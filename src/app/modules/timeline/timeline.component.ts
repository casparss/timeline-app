import { Component } from '@angular/core';
import { TimelineSvc } from './timeline.service';
import { TimelineUtils } from './timeline.utils';
import { DataSvc } from '../data-service';
import { Subject, Observable } from 'rxjs';
import { FileUploader } from 'ng2-file-upload';


@Component({
  selector: 'timeline',
  styleUrls: ['./timeline.style.css'],
  template: `
    <time-range [years]="years"></time-range>
    <channel
      *ngFor="let channel of dataSvc.channels$ | async"
      [channel]="channel"
      (onRemove)="removeChannel($event)"
    ></channel>

    <div class="button-group">
      <div *ngIf="editMode" class="button-container">
        <button (click)="addChannel()">Add Channel</button>
          <label>Channel title:
          <input [(ngModel)]="channelTitle" type="text" />
        </label>
      </div>

      <div class="button-container">
        <button (click)="toggleEditMode()">Toggle edit mode</button>
      </div>

      <div *ngIf="editMode" class="button-container">
        <label>
          Import channel from CSV
          <input name="csv" type="file" ng2FileSelect [uploader]="uploader" />
          <button (click)="uploadCsv()">Upload</button>
        </label>
      </div>
    </div>
  `
})
export class TimelineCom {

  private editMode: boolean = false;
  private uploader: FileUploader = new FileUploader({url: '/api/import'});

  private channelTitle: string;
  private years: Array<number>;

  constructor(
    private dataSvc: DataSvc,
    private timelineUtils: TimelineUtils,
    private timelineSvc: TimelineSvc
  ){
    this.dataSvc.channels$.subscribe(channels => {
      this.timelineUtils.setRange(channels);
      this.years = this.timelineUtils.getYearHeadings();
    });
  }

  ngOnInit(){
    this.fetch();

    this.uploader.onCompleteItem = ((file, res) =>
      this.dataSvc.handleUploadResponse(res));
  }

  toggleEditMode(){
    this.timelineSvc.editMode(this.editMode = !this.editMode);
  }

  fetch(){
    this.dataSvc.fetch().subscribe();
  }

  uploadCsv(){
    this.uploader.uploadAll();
  }

  addChannel(){
    this.dataSvc.addChannel(this.channelTitle)
      .subscribe(channel => this.channelTitle = "");
  }

  removeChannel(channelId: string){
    this.dataSvc.removeChannel(channelId).subscribe();
  }

}
