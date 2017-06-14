import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TimelineSvc } from './timeline.service';
import * as moment from 'moment';

@Component({
  selector: 'channel',
  styleUrls: ['channel.style.css'],
  template: `
    <h1>{{channel.name}}</h1>
    <button *ngIf="editMode" (click)="addActivity()">Add activity</button>
    <button *ngIf="editMode" (click)="removeChannel()">Remove channel</button>
    <activity
      *ngFor="let activity of channel.activities"
      [activity]="activity"
      [channelId]="channel._id"
    ></activity>
  `
})
export class ChannelCom {
  @Input() channel: any;
  @Output() onRemove: EventEmitter<any> = new EventEmitter();
  private editMode: boolean;

  constructor(private timelineSvc: TimelineSvc){
    timelineSvc.onEditMode.subscribe(toggle => this.editMode = toggle);
  }

  addActivity(){
    console.log("addActivity()");
  }

  removeChannel(){
    this.onRemove.emit(this.channel._id);
  }


}
