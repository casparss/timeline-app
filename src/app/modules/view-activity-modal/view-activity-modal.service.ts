import { Injectable } from '@angular/core';

//This service is used to pass data between the activity component and the
//modal component instance. It's a really crap work around, we should just
//be passing the data as args through the model.open method, but it doesn't
//seem to support passing arguments, amazingly, or at least if it does it's
//undocumented.

@Injectable()
export class ViewActivityModalSvc {

  private _activity: any = null;
  private _channelId: any = null;

  get activity(){
    return this._activity;
  }

  get channelId(){
    return this._channelId;
  }

  set activity(activity){
    this._activity = activity;
  }

  set channelId(_id){
    this._channelId = _id;
  }

  purge(){
    this._activity = this._activity = null;
  }

}
