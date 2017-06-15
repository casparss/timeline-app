import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class ViewActivityModalSvc {

  public onOpen = new EventEmitter();

  open(args){
    this.onOpen.emit(args);
  }

}
