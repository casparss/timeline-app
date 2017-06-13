import { Component, Input, HostBinding, HostListener, ViewChild } from '@angular/core';
import { TimelineUtils } from './timeline.utils';
import * as moment from 'moment';
import { ViewActivityModalSvc } from '../view-activity-modal/view-activity-modal.service';

@Component({
  selector: 'activity',
  styleUrls: ['./activity.style.css'],
  template: `
    <p>{{activity.title}}</p>
    <p>{{activity.period.from.format("MMMM")}} to {{activity.period.to.format("MMMM")}}</p>
  `
})
export class ActivityCom {
  @Input() activity: any;
  @Input() channelId: any;
  @HostBinding('style.width') width: string;
  @HostBinding('style.left') position: string;

  constructor(
    private timelineUtils: TimelineUtils,
    private viewActivitySvc: ViewActivityModalSvc
  ){}

  @HostListener('click', ['$event.target'])
  openModal(){
    let args = { activity: this.activity, channelId: this.channelId };
    this.viewActivitySvc.open(args);
  }

  ngOnInit(){
    this.setWidth();
    this.setPosition();
  }

  setWidth(){
    let { from, to } = this.activity.period;
    this.width = this.timelineUtils.getActivityWidth(from, to) + "%";
  }

  setPosition(){
    let { from } = this.activity.period;
    this.position = this.timelineUtils.getActivityPosition(from) + "%";
  }

}
