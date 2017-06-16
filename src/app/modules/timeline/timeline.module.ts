import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';

import { TimeRangeCom } from './time-range.component';
import { TimelineCom } from './timeline.component';
import { ActivityCom } from './activity.component';
import { ChannelCom } from './channel.component';
import { TimelineUtils } from './timeline.utils';

@NgModule({
  imports: [
    CommonModule,
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
    TimelineUtils
  ],
  exports: [
    TimelineCom
  ]
})
export class TimeLineModule { }
