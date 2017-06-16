import { Component, Input, Output, EventEmitter, HostBinding, ChangeDetectionStrategy } from '@angular/core';
import { TimelineSvc } from './timeline.service';
import * as moment from 'moment';

const SHOW = 'block';
const HIDE = 'none';

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
  @HostBinding('style.display') display: string;
  private editMode: boolean;

  constructor(private timelineSvc: TimelineSvc){
    timelineSvc.onEditMode.subscribe(toggle => this.editMode = toggle);
    timelineSvc.onFilterChange.subscribe(filterControls => this.filterChange(filterControls));
  }

  filterChange(filterControls){
    let filterControl = filterControls.find(({ _id }) => this.channel._id === _id);
    if(filterControl){
      this.display = filterControl.checked ? SHOW : HIDE;
    }
  }

  addActivity(){
    console.log("addActivity()");
  }

  removeChannel(){
    this.onRemove.emit(this.channel._id);
  }

}
