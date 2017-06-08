import { Component } from '@angular/core';
import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';


//Ripped out the example and removed everything
//need to test to see if this even works
@Component({
  selector: 'view-activity-modal',
  styles: [``],
  template: `
    <h1>VIEW ACTIVITY MODAL</h1>
  `
})
export class ViewActivityModal  {

  context: any;

  constructor(public dialog: DialogRef<any>) {
    this.context = dialog.context;
    dialog.setCloseGuard("this");
  }

  beforeDismiss(): void {

  }

  beforeClose(): void {

  }
}
