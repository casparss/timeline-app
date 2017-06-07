import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TimeRangeCom } from './time-range.component';
import { TimelineCom } from './timeline.component';
import { ActivityCom } from './activity.component';
import { ChannelCom } from './channel.component';
import { TimelineSvc } from './timeline.service';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    TimelineCom,
    ActivityCom,
    ChannelCom,
    TimeRangeCom
  ],
  providers: [
    TimelineSvc
  ],
  exports: [
    TimelineCom
  ]
})
export class TimeLineModule { }
