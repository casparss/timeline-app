import { Component } from '@angular/core';
import { DialogRef } from 'angular2-modal';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ViewActivityModalSvc } from './view-activity-modal.service';
import { DataSvc } from '../data-service';

@Component({
  selector: 'view-activity-modal',
  styleUrls: ['./view-activity-modal.style.css'],
  template: `
    <form [formGroup]="activityForm" [ngSwitch]="editMode" (submit)="updateActivity(this.activityForm.value, activityForm.valid)">

      <div>
        <button type="button" (click)="toggleEditMode()">Edit activity</button>
      </div>

      <h1>
        TItle:
        <span *ngSwitchCase="false">{{activity.title}}</span>
        <input *ngSwitchCase="true" formControlName="title" type="text" />
      </h1>

      <p>
        Description:
        <span *ngSwitchCase="false">{{activity.description}}</span>
        <input *ngSwitchCase="true" formControlName="description" type="text" />
      </p>

      <div formGroupName="period">
        <p>
          From:
          <span *ngSwitchCase="false">{{activity.period.from}}</span>
          <input *ngSwitchCase="true" formControlName="from" type="text" />
        </p>

        <p>
          To:
          <span *ngSwitchCase="false">{{activity.period.to}}</span>
          <input *ngSwitchCase="true" formControlName="to" type="text" />
        </p>
      </div>

      <p>
        Location:
        <span *ngSwitchCase="false">{{activity.location}}</span>
        <input *ngSwitchCase="true" formControlName="location" type="text" />
      </p>

      <p>
        Communication drivers:
        <span *ngSwitchCase="false">{{activity.communication_drivers}}</span>
        <input *ngSwitchCase="true" formControlName="communication_drivers" type="text" />
      </p>

      <p>
        Kols engaged:
        <span *ngSwitchCase="false">{{activity.kols_engaged}}</span>
        <input *ngSwitchCase="true" formControlName="kols_engaged" type="text" />
      </p>

      <p>
        No. of HCPs:
        <span *ngSwitchCase="false">{{activity.no_of_hcps}}</span>
        <input *ngSwitchCase="true" formControlName="no_of_hcps" type="text" />
      </p>

      <p>
        Status:
        <span *ngSwitchCase="false">{{activity.status}}</span>
        <input *ngSwitchCase="true" formControlName="status" type="text" />
      </p>
      <button *ngSwitchCase="true" type="submit">Update activity</button>
    </form>
  `
})
export class ViewActivityModalCom  {

  context: any;
  activity: any;
  editMode: boolean = false;
  activityForm: FormGroup;

  constructor(
    public dialog: DialogRef<any>,
    private viewActivitySvc: ViewActivityModalSvc,
    private fb: FormBuilder,
    private dataSvc: DataSvc
  ) {

    this.activity = this.viewActivitySvc.activity;
    this.initialiseForm();
  }

  initialiseForm(){
    let {
      title,
      location,
      period: { from, to },
      description,
      communication_drivers,
      audience,
      kols_engaged,
      no_of_hcps,
      status
    } = this.activity;

    this.activityForm = this.fb.group({
      title: [title],
      location: [location],
      period: this.fb.group({
        from: [from],
        to: [to],
      }),
      description: [description],
      communication_drivers: [communication_drivers],
      audience: [audience],
      kols_engaged: [kols_engaged.join(", ")],
      no_of_hcps: [no_of_hcps],
      status: [status]
    });
  }

  updateActivity(activityForm){
    let activityId = this.activity._id;
    let { channelId } = this.viewActivitySvc;
    this.dataSvc.updateActivity({ activityForm, channelId, activityId })
      .subscribe(() => alert("Succesfully updated!"));
  }

  toggleEditMode(){
    this.editMode = !this.editMode;
  }

  beforeDismiss(): void {

  }

  beforeClose(): void {
    this.viewActivitySvc.purge();
  }
}
