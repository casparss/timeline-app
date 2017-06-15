import { Component } from '@angular/core';
import { DataSvc } from '../data-service';

@Component({
  selector: 'control-filters',
  styleUrls: ['./control-filters.style.css'],
  template: `
    <div class="filter-panel">
      <h1>Filters</h1>

      <ul>
        <li *ngFor="let filterControl of channelFilterControls | async">
          <input type="checkbox" />
          {{channel.name}}
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

  private channelFilterControls: any;

  constructor(private dataSvc: DataSvc) {
    this.dataSvc.channels$.subscribe(channels => {
      this.channelFilterControls = channels.map(channel => ({
        _id: channel._id,
        name: channel.name,
        visibility: true
      }));
    });
  }

}
