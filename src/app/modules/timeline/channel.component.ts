import { Component, Input } from '@angular/core';

@Component({
  selector: 'channel',
  template: `
    <h1>Channel!</h1>
  `
})
export class ChannelCom {
  @Input() name: any;

  title = 'Timeline';
}
