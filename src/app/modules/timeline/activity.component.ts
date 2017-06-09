import { Component, Input, HostBinding, HostListener, ViewChild } from '@angular/core';
import { Overlay, Modal } from 'angular2-modal';
import { TimelineUtils } from './timeline.utils';
import * as moment from 'moment';
import { ViewActivityModalCom } from '../view-activity-modal/view-activity-modal.component';
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
  @HostBinding('style.width') width: string;
  @HostBinding('style.left') position: string;

  constructor(
    private timelineUtils: TimelineUtils,
    private modal: Modal,
    private viewActivitySvc: ViewActivityModalSvc
  ){}

  @HostListener('click', ['$event.target'])
  openModal(){
    this.viewActivitySvc.activity = this.activity;
    this.modal.open(ViewActivityModalCom);
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
