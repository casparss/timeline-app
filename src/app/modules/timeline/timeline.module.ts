import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TimeRangeCom } from './time-range.component';
import { TimelineCom } from './timeline.component';
import { ActivityCom } from './activity.component';
import { ChannelCom } from './channel.component';
import { TimelineSvc } from './timeline.service';
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
    TimelineSvc
  ],
  exports: [
    TimelineCom
  ]
})
export class TimeLineModule { }
