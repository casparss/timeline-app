import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ControlFiltersCom } from './control-filters.component';

@NgModule({
  declarations: [
    ControlFiltersCom
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ControlFiltersCom
  ]
})
export class ControlFiltersModule { }
