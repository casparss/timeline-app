import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { ViewActivityModalModule } from './modules/view-activity-modal';
import { HeaderBarModule } from './modules/header-bar';
import { TimeLineModule } from './modules/timeline';

import { DataSvc } from './modules/data-service';
import { ViewActivityModalSvc } from './modules/view-activity-modal/view-activity-modal.service';
import { HttpModule } from '@angular/http';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        ViewActivityModalModule,
        HeaderBarModule,
        TimeLineModule,
        HttpModule
      ],
      providers: [
        DataSvc,
        ViewActivityModalSvc
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
