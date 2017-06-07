import { Component, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'channel',
  styleUrls: ['channel.style.css'],
  template: `
    <activity
      *ngFor="let activityData of acivityList"
      [activityData]="activityData"
    ></activity>
  `
})
export class ChannelCom {
  @Input() name: string;

  private acivityList: Array<any> = [{
    name: "Activity 1",
    from: moment("2017").month("feb"),
    to: moment("2017").month("july")
  },
  {
    name: "Activity 2",
    from: moment("2017").month("oct"),
    to: moment("2017").month("dec")
  },
  {
    name: "Activity 3",
    from: moment("2018").month("jan"),
    to: moment("2018").month("july")
  },
  {
    name: "Activity 4",
    from: moment("2019").month("mar"),
    to: moment("2019").month("dec")
  }];

}
