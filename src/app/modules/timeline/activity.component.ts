import { Component, Input, HostBinding } from '@angular/core';
import { TimelineUtils } from './timeline.utils';
import * as moment from 'moment';

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
  @HostBinding('style.width') width: string;
  @HostBinding('style.left') position: string;

  constructor(private timelineUtils: TimelineUtils){}

  ngOnChanges(){
    this.convertToMoment();
  }

  convertToMoment(){
    let { from, to } = this.activity.period;
    this.activity.period.from = moment(from);
    this.activity.period.to = moment(to);
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
