import { Component } from '@angular/core';
import { DataSvc } from '../data-service';
import { TimelineSvc } from '../timeline/timeline.service';

@Component({
  selector: 'control-filters',
  styleUrls: ['./control-filters.style.css'],
  template: `
    <div class="filter-panel">
      <h1>Filters</h1>

      <h2>Filter channels</h2>

      <ul>
        <li *ngFor="let filterControl of channelFilterControls">
          <label>
            <input
              [(ngModel)]="filterControl.checked"
              (change)="filterControlChanged($event)"
              type="checkbox" />
            {{filterControl.name}}
          </label>
        </li>
      </ul>

      <h2>Filter on activity props</h2>

      //Selects for Audience
      //Key drivers
      //location
      //kols engaged

    </div>
  `
})
export class ControlFiltersCom {

  private channelFilterControls: any;

  constructor(
    private dataSvc: DataSvc,
    private timelineSvc: TimelineSvc
  ) {
    this.dataSvc.channels$.subscribe(channels => {

      //If channelFilterControls already populated then assign the current checked state
      this.channelFilterControls = channels.map(channel => ({
        _id: channel._id,
        name: channel.name,
        checked: true
      }));
    });
  }

  filterControlChanged(){
    this.timelineSvc.filterChannels(this.channelFilterControls);
  }

}
