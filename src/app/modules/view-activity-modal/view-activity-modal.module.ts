import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { ViewActivityModal } from './view-activity-modal.component';

@NgModule({
  imports: [
    ModalModule,
    BootstrapModalModule,
    BrowserModule
  ],
  declarations: [
    ViewActivityModal
  ],
  exports: [
    ViewActivityModal
  ]
})
export class ViewActivityModalModule { }
