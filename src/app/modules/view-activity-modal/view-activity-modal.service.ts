import { Injectable } from '@angular/core';

//This service is used to pass data between the activity component and the
//modal component instance. It's a really crap work around, we should just
//be passing the data as args through the model.open method, but it doesn't
//seem to support passing arguments, amazingly, or at least if it does it's
//undocumented.

@Injectable()
export class ViewActivityModalSvc {

  private _activity: any = null;

  get activity(){
    return this._activity;
  }

  set activity(newActivity){
    this._activity = newActivity;
  }

  purge(){
    this._activity = null;
  }

}
