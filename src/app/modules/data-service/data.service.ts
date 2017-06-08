import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { activityInterface, channelInterface } from './data.interface';
import * as moment from 'moment';
import { stub } from './stub';

let channelsSubject: BehaviorSubject<any> = new BehaviorSubject(null);

@Injectable()
export class DataSvc {

  fetch(){
    return new Promise((resolve, reject) => {
      channelsSubject.next(stub);
      resolve(this.data$());
    });
  }

  data$(){
    return channelsSubject.asObservable()
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

}
