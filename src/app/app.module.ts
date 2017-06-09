import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ModalModule } from 'angular2-modal';

import { AppComponent } from './app.component';
import { HeaderBarModule } from './modules/header-bar';
import { TimeLineModule } from './modules/timeline';

import { DataSvc } from './modules/data-service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeaderBarModule,
    TimeLineModule,
    HttpModule,
    ModalModule.forRoot()
  ],
  providers: [DataSvc],
  bootstrap: [AppComponent]
})
export class AppModule { }
