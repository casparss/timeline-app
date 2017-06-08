import { Component, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'channel',
  styleUrls: ['channel.style.css'],
  template: `
    <activity
      *ngFor="let activity of channel.activities"
      [activity]="activity"
    ></activity>
  `
})
export class ChannelCom {
  @Input() channel: any;
}
