import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';

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
    TimeRangeCom,
    FileSelectDirective
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
