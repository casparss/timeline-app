import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Overlay, Modal } from 'angular2-modal';

import { TimeRangeCom } from './time-range.component';
import { TimelineCom } from './timeline.component';
import { ActivityCom } from './activity.component';
import { ChannelCom } from './channel.component';
import { TimelineUtils } from './timeline.utils';
import { FormsModule }   from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    TimelineCom,
    ActivityCom,
    ChannelCom,
    TimeRangeCom
  ],
  providers: [
    TimelineUtils,
    Overlay
  ],
  exports: [
    TimelineCom
  ]
})
export class TimeLineModule { }
