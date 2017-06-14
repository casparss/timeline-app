import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from "rxjs";
import { activityInterface, channelInterface } from './data.interface';

let channelsSubject: BehaviorSubject<channelInterface[]> = new BehaviorSubject(null);

@Injectable()
export class DataSvc {

  constructor(private http: Http){}

  fetch(){
    return this.http.get('/api/channels')
      .map(res => res.json());
  }

  addChannel(channel){
    return this.http.post('/api/channel', channel)
      .map(res => res.json());
  }

  removeChannel(channelId: string){
    return this.http.delete(`/api/channel/${channelId}`);
  }

  updateActivity({ activityForm, channelId, activityId }){
    let uri = `/api/channel/${channelId}/acitvity/${activityId}`;
    return this.http.post(uri, activityForm);
  }

}
