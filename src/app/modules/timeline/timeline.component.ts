import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { TimelineUtils } from './timeline.utils';
import { DataSvc } from '../data-service';

@Component({
  selector: 'timeline',
  styleUrls: ['./timeline.style.css'],
  template: `
    <time-range [years]="years"></time-range>
    <channel
      *ngFor="let channel of channels"
      [channel]="channel"
    ></channel>
  `
})
export class TimelineCom {

  private timeRange: Array<any> = [];
  private channels: any;
  private years: Array<number>;

  constructor(
    private dataSvc: DataSvc,
    private timelineUtils: TimelineUtils
  ){
    this.fetch();
  }

  fetch(){
    this.dataSvc.fetch()
      .subscribe(channels => {
        this.timelineUtils.setRange(channels);
        this.years = this.timelineUtils.getYearHeadings();
        this.channels = channels;
      });
  }

}
