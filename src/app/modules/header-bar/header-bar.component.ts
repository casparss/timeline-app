import { Component } from '@angular/core';

@Component({
  selector: 'header-bar',
  styleUrls: ['./header-bar.css'],
  template: `
    <h1>INSPIRE <span>by complete healthvision</span></h1>
    <select>
      <option>One</option>
      <option>Two</option>
    </select>
    <button>Person</button>
    <button>Lock</button>
  `
})
export class HeaderBarCom {
  title = 'header';
}
