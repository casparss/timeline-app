import { Component } from '@angular/core';

@Component({
  selector: 'header-bar',
  template: `
    <h1>{{title}}</h1>
  `
})
export class HeaderBarCom {
  title = 'header';
}
