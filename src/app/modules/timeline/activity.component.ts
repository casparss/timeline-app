import { Component, Input, HostBinding, HostListener } from '@angular/core';
import { Overlay, Modal } from 'angular2-modal';
import { TimelineUtils } from './timeline.utils';
import * as moment from 'moment';
import { ViewActivityModalCom } from '../view-activity-modal/view-activity-modal.component';

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

  constructor(private timelineUtils: TimelineUtils, public modal: Modal){}

  @HostListener('click', ['$event.target'])
  openModal(){
    this.modal.open(ViewActivityModalCom, this.activity);
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
