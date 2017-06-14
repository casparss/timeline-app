import { Component } from '@angular/core';
import { TimelineSvc } from './timeline.service';
import { TimelineUtils } from './timeline.utils';
import { DataSvc } from '../data-service';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'timeline',
  styleUrls: ['./timeline.style.css'],
  template: `
    <time-range [years]="years"></time-range>
    <channel
      *ngFor="let channel of channels$ | async"
      [channel]="channel"
    ></channel>

    <div *ngIf="editMode" class="button-container">
      <button (click)="addChannel()">Add Channel</button>
      <label>Channel title:
        <input [(ngModel)]="channelTitle" type="text" />
      </label>
    </div>

    <div class="button-container">
      <button (click)="toggleEditMode()">Toggle edit mode</button>
    </div>
  `
})
export class TimelineCom {

  private channels$: Observable<any>;
  private channelsSubject$ = new Subject();
  private channelsLastValue;
  private editMode: boolean = false;

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
  }

  toggleEditMode(){
    this.timelineSvc.editMode(this.editMode = !this.editMode);
  }

  configureChannels$(){
    return this.channelsSubject$.asObservable()
      .do(channels => {
        this.timelineUtils.setRange(channels);
        this.years = this.timelineUtils.getYearHeadings();
        this.channelsLastValue = channels;
      });
  }

  fetch(){
    this.dataSvc.fetch().subscribe(channels => this.channelsSubject$.next(channels));
  }

  addChannel(){
    let newChannel = {
      name: this.channelTitle,
      activities: []
    };

    this.dataSvc.addChannel(newChannel)
      .subscribe(channel => {
        let channelsCopy = Object.assign([], this.channelsLastValue);
        channelsCopy.push(channel);
        this.channelsSubject$.next(channelsCopy);
        this.channelTitle = "";
      });
  }

  removeChannel(){

  }

}
