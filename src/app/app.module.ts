import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ModalModule } from 'angular2-modal';
import { ViewActivityModalModule } from './modules/view-activity-modal';

import { AppComponent } from './app.component';
import { HeaderBarModule } from './modules/header-bar';
import { TimeLineModule } from './modules/timeline';

import { DataSvc } from './modules/data-service';
import { ViewActivityModalSvc } from './modules/view-activity-modal/view-activity-modal.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeaderBarModule,
    TimeLineModule,
    HttpModule,
    ViewActivityModalModule,
    ModalModule.forRoot()
  ],
  providers: [
    DataSvc,
    ViewActivityModalSvc
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
