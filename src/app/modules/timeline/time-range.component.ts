import { Component, Input } from '@angular/core';
import { DataSvc } from '../data-service';
import { Subject } from 'rxjs';
import { TimelineUtils } from './timeline.utils';

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
  @Input() years: Array<number>;

  constructor(
    private dataSvc: DataSvc,
    private timelineUtils: TimelineUtils
  ){}

}
