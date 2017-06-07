import { Component } from '@angular/core';
import { TimelineSvc } from './timeline.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'time-range',
  styleUrls: ['./time-range.style.css'],
  template: `
    <div class="year-row">
      <div class="year-cell" *ngFor="let year of years">
        <h1>{{ year }}</h1>
        <div class="quarter-row">
          <div class="quarter-cell" *ngFor="let q of quarters">
            {{ q }}
          </div>
        </div>
      </div>
    </div>
  `
})
export class TimeRangeCom {

  private timeRange: Array<any> = [];
  private quarters: Array<string> = ["Q1", "Q2", "Q3", "Q4"];
  private years: Array<number> = [2017, 2018, 2019];


  // Generate timeline heading from range

  // calculate difference in time of from and to

  // build a date range object that begins with the from date, rounded
  // down to nearest year, that iterates the difference, in quarters

  // Iterate through object with ngFor in template to render the view

}
