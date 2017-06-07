import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'timeline',
  styleUrls: ['./timeline.style.css'],
  template: `
    <time-range></time-range>
    <channel name="Advisory Boards"></channel>
    <channel name="Publications"></channel>
    <channel name="Medical Education"></channel>
  `
})
export class TimelineCom {

  private timeRange: Array<any> = [];

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
