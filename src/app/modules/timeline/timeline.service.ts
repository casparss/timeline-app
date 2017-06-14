import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class TimelineSvc {
  public onEditMode = new BehaviorSubject(false);
  editMode(toggle: boolean){
    this.onEditMode.next(toggle);
  }
}
