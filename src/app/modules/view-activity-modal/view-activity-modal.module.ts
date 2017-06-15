import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ViewActivityModalCom } from './view-activity-modal.component';
import { ModalModule } from "ng2-modal";


@NgModule({
  imports: [
    ModalModule,
    CommonModule,
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
