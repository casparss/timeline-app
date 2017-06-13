import { Component, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'channel',
  styleUrls: ['channel.style.css'],
  template: `
    <h1>{{channel.name}}</h1>
    <activity
      *ngFor="let activity of channel.activities"
      [activity]="activity"
      [channelId]="channel._id"
    ></activity>
  `
})
export class ChannelCom {
  @Input() channel: any;
}
