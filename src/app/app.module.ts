import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ViewActivityModalModule } from './modules/view-activity-modal';

import { AppComponent } from './app.component';
import { HeaderBarModule } from './modules/header-bar';
import { TimeLineModule } from './modules/timeline';
import { ControlFiltersModule } from './modules/control-filters';

import { TimelineSvc } from './modules/timeline/timeline.service';
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
    ControlFiltersModule
  ],
  providers: [
    DataSvc,
    ViewActivityModalSvc,
    TimelineSvc
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
