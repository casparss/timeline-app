import { Component, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
    <view-activity-modal></view-activity-modal>
    <header>
      <header-bar></header-bar>
    </header>
    <main>
      <timeline></timeline>
    </main>
    <footer></footer>
  `
})
export class AppComponent {

}
