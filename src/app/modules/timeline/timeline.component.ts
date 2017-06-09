import { Component } from '@angular/core';
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
    <div class="button-container">
      <button (click)="addChannel()">Add Channel</button>
      <label>Channel title:
        <input [(ngModel)]="channelTitle" type="text" />
      </label>
    </div>
  `
})
export class TimelineCom {

  private channels$: Observable<any>;
  private channelsSubject$ = new Subject();
  private channelsLastValue;

  private channelTitle: string;
  private years: Array<number>;

  constructor(
    private dataSvc: DataSvc,
    private timelineUtils: TimelineUtils
  ){
    this.channels$ = this.configureChannels$();
    this.fetch();
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
