import { Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ViewActivityModalSvc } from './view-activity-modal.service';
import { DataSvc } from '../data-service';

@Component({
  selector: 'view-activity-modal',
  styleUrls: ['./view-activity-modal.style.css'],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './view-activity-modal.view.html'
})
export class ViewActivityModalCom  {

  private activity: any;
  private channelId: string;
  private hasFormData: boolean = false;

  editMode: boolean = false;
  activityForm: FormGroup;
  @ViewChild('activityModal') activityModal;

  constructor(
    private viewActivitySvc: ViewActivityModalSvc,
    private fb: FormBuilder,
    private dataSvc: DataSvc
  ) {}

  ngOnInit(){
    this.viewActivitySvc.onOpen
      .subscribe(({ activity, channelId }) => {
        this.activity = activity;
        this.channelId = channelId;
        this.initialiseForm();
        this.hasFormData = true;
        this.activityModal.open();
      });
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
    let { channelId } = this;
    this.dataSvc.updateActivity({ activityForm, channelId, activityId })
      .subscribe(() => this.toggleEditMode());
  }

  toggleEditMode(){
    this.editMode = !this.editMode;
  }

  getFormVal(key){
    return this.activityForm.controls[key].value;
  }

  getPeriodVal(key){
    return this.activityForm.controls.period['controls'][key].value;
  }

  beforeDismiss(): void {

  }

}
