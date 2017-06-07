import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TimeRangeCom } from './time-range.component';
import { TimelineCom } from './timeline.component';
import { ActivityCom } from './activity.component';
import { ChannelCom } from './channel.component';
import { TimelineUtils } from './timeline.utils';

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
    TimelineUtils
  ],
  exports: [
    TimelineCom
  ]
})
export class TimeLineModule { }
