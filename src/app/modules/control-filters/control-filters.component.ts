import { Component } from '@angular/core';
import { TimelineSvc } from '../timeline/timeline.service';

@Component({
  selector: 'control-filters',
  styleUrls: ['./control-filters.style.css'],
  template: `
    <div class="filter-panel">
      <h1>Filters</h1>

      <ul>
        <li>
          <input type="checkbox" />

        </li>
      </ul>

      //Selects for Audience
      //Key drivers
      //location
      //kols engaged

    </div>
  `
})
export class ControlFiltersCom {

  constructor(private timelineSvc: TimelineSvc) {

    this.timelineSvc

  }

}
