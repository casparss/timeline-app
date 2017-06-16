import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class TimelineSvc {
  public onEditMode = new BehaviorSubject(false);
  editMode(toggle: boolean){
    this.onEditMode.next(toggle);
  }

  public onFilterChange: EventEmitter<any> = new EventEmitter();
  public filterChannels(channelFilterControls){
    this.onFilterChange.emit(channelFilterControls);
  }
}
