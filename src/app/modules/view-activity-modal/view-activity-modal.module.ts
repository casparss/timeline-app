import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { ViewActivityModalCom } from './view-activity-modal.component';


@NgModule({
  imports: [
    ModalModule,
    BootstrapModalModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ViewActivityModalCom
  ],
  entryComponents: [
    ViewActivityModalCom
  ],
  exports: [
    ViewActivityModalCom
  ]
})
export class ViewActivityModalModule { }
