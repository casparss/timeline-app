import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderBarModule } from './modules/header-bar';
import { TimeLineModule } from './modules/timeline';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeaderBarModule,
    TimeLineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
