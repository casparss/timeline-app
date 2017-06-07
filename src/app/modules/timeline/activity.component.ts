import { Component, Input, HostBinding } from '@angular/core';
import { TimelineSvc } from './timeline.service';

@Component({
  selector: 'activity',
  styleUrls: ['./activity.style.css'],
  template: `
    <p>{{activityData.name}}</p>
    <p>{{activityData.from.format("MMMM")}} to {{activityData.to.format("MMMM")}}</p>
  `
})
export class ActivityCom {
  @Input() activityData: any;
  @HostBinding('style.width') width: string;
  @HostBinding('style.left') position: string;

  constructor(private timelineSvc: TimelineSvc){}

  ngOnInit(){
    this.setWidth();
    this.setPosition();
  }

  setWidth(){
    let { from, to } = this.activityData;
    this.width = this.timelineSvc.getActivityWidth(to, from) + "%";
  }

  setPosition(){
    let { from } = this.activityData;
    this.position = this.timelineSvc.getActivityPosition(from) + "%";
  }

}
