import { NgModule } from '@angular/core';

import { HeaderBarCom } from './header-bar.component';

@NgModule({
  declarations: [
    HeaderBarCom
  ],
  exports: [
    HeaderBarCom
  ]
})
export class HeaderModule { }
