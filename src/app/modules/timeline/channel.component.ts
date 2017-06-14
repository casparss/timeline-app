import { Component, Input } from '@angular/core';
import { TimelineSvc } from './timeline.service';
import * as moment from 'moment';

@Component({
  selector: 'channel',
  styleUrls: ['channel.style.css'],
  template: `
    <h1>{{channel.name}}</h1>
    <button *ngIf="editMode" (click)="addActivity()">Add activity</button>
    <activity
      *ngFor="let activity of channel.activities"
      [activity]="activity"
      [channelId]="channel._id"
    ></activity>
  `
})
export class ChannelCom {
  @Input() channel: any;
  private editMode: boolean;

  constructor(private timelineSvc: TimelineSvc){
    timelineSvc.onEditMode.subscribe(toggle => this.editMode = toggle);
  }

  addActivity(){
    console.log("addActivity()");
  }


}
