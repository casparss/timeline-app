import { Component } from '@angular/core';
import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { ViewActivityModalSvc } from './view-activity-modal.service';


@Component({
  selector: 'view-activity-modal',
  styleUrls: ['./view-activity-modal.style.css'],
  template: `
    <h1>{{activity.title}}</h1>
    <p>{{activity.description}}</p>
  `
})
export class ViewActivityModalCom  {

  context: any;
  activity: any;

  constructor(public dialog: DialogRef<any>, private viewActivitySvc: ViewActivityModalSvc) {
    dialog.setCloseGuard("this");
    this.activity = this.viewActivitySvc.activity;
  }

  beforeDismiss(): void {

  }

  beforeClose(): void {
    this.viewActivitySvc.purge();
  }
}
