import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlFiltersCom } from './control-filters.component';

@NgModule({
  declarations: [
    ControlFiltersCom
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ControlFiltersCom
  ]
})
export class ControlFiltersModule { }
