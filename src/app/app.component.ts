import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
    <header>
      <header-bar></header-bar>
    </header>
    <main>
      <timeline></timeline>
    </main>
    <footer>
      Footer
    </footer>
  `
})
export class AppComponent {
  title = 'app';
}
