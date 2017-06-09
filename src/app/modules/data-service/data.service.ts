import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from "rxjs";
import { activityInterface, channelInterface } from './data.interface';
import * as moment from 'moment';

let channelsSubject: BehaviorSubject<channelInterface[]> = new BehaviorSubject(null);

@Injectable()
export class DataSvc {

  constructor(private http: Http){}

  fetch(){
    return this.http.get('/api/channels')
      .map(data => data.json())
      .map(channels => {
        channels.forEach(({ activities }) => {
          activities.forEach(({ period }) => {
            period.from = moment(period.from);
            period.to = moment(period.to);
          });
        });
        return channels;
      });
  }

  addChannel(channel){
    return this.http.post('/api/channel', channel)
      .map(data => data.json());
  }



}
