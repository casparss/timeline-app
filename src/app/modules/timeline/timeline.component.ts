import { Component } from '@angular/core';
import { remove } from 'lodash';
import { TimelineSvc } from './timeline.service';
import { TimelineUtils } from './timeline.utils';
import { DataSvc } from '../data-service';
import { Subject, Observable } from 'rxjs';
import { FileUploader } from 'ng2-file-upload';
import * as moment from 'moment';

@Component({
  selector: 'timeline',
  styleUrls: ['./timeline.style.css'],
  template: `
    <time-range [years]="years"></time-range>
    <channel
      *ngFor="let channel of channels$ | async"
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

  private channels$: Observable<any>;
  private channelsSubject$ = <any>new Subject();
  private channelsLastValue;
  private editMode: boolean = false;
  private uploader: FileUploader = new FileUploader({url: '/api/import'});

  private channelTitle: string;
  private years: Array<number>;

  constructor(
    private dataSvc: DataSvc,
    private timelineUtils: TimelineUtils,
    private timelineSvc: TimelineSvc
  ){
    this.channels$ = this.configureChannels$();
  }

  ngOnInit(){
    this.fetch();

    this.uploader.onCompleteItem = ((file, res) => {
      this.updateChannels(channels => {
        channels.push(JSON.parse(res));
        return channels;
      });
    });
  }

  toggleEditMode(){
    this.timelineSvc.editMode(this.editMode = !this.editMode);
  }

  configureChannels$(){
    return this.channelsSubject$.asObservable()
      .map(channels => {
        channels.forEach(({ activities }) => {
          activities.forEach(({ period }) => {
            period.from = moment(period.from);
            period.to = moment(period.to);
          });
        });
        return channels;
      })
      .do(channels => {
        this.timelineUtils.setRange(channels);
        this.years = this.timelineUtils.getYearHeadings();
        this.channelsLastValue = channels;
      });
  }

  fetch(){
    this.dataSvc.fetch().subscribe(channels => this.channelsSubject$.next(channels));
  }

  uploadCsv(){
    this.uploader.uploadAll();
  }

  addChannel(){
    let newChannel = {
      name: this.channelTitle,
      activities: []
    };

    this.dataSvc.addChannel(newChannel)
      .subscribe(channel => {
        this.updateChannels(channels => {
          channels.push(channel);
          return channels;
        });
        this.channelTitle = "";
      });
  }

  removeChannel(channelId: string){
    this.dataSvc.removeChannel(channelId)
      .subscribe(() => this.updateChannels(
        channels => {
          remove(channels, channel => channel._id === channelId);
          return channels;
        }
      ));
  }

  updateChannels(mutator){
    let channelsCopy = Object.assign([], this.channelsLastValue);
    this.channelsSubject$.next(mutator(channelsCopy));
  }

}
