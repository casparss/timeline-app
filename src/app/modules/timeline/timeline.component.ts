import { Component } from '@angular/core';
import { TimelineSvc } from './timeline.service';
import { Subject } from 'rxjs';


@Component({
  selector: 'timeline',
  styleUrls: ['./timeline.style.css'],
  template: `
    <time-range></time-range>
  `
})
export class TimelineCom {

  private timeRange: Array<any> = [];

  constructor(private timelineSvc: TimelineSvc){
    this.timeRange = timelineSvc.generateRange();
    console.log(this);
  }

  private channelsStub = [{
      type: "something",
      name: "Advisory Boards",
      activities: [
        {
          name: "EADV",
          from: new Date(),
          to: new Date()
        }
      ]
    }
  ];

}
