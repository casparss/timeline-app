import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { remove } from 'lodash';
import { BehaviorSubject } from "rxjs";
import { Subject, Observable } from 'rxjs';
import { activityInterface, channelInterface } from './data.interface';
import * as moment from 'moment';

@Injectable()
export class DataSvc {

  public channelsSubject$ = <any>new Subject();
  public channels$: Observable<any>;
  private channelsLastValue;

  constructor(private http: Http){
    this.channels$ = this.configureChannels$();
  }

  private configureChannels$(){
    return this.channelsSubject$.asObservable()
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

  fetch(){
    return this.http.get('/api/channels')
      .map(res => res.json())
      .do(channels => {
        this.channelsSubject$.next(channels);
        this.channelsLastValue = channels;
      })
  }

  addChannel(channelTitle){
    let newChannel = {
      name: channelTitle,
      activities: []
    };

    return this.http.post('/api/channel', newChannel)
      .map(res => res.json())
      .do(channel => {
        this.pushNewChanges(channels => {
          channels.push(channel);
          return channels;
        });
      });
  }

  pushNewChanges(mutator){
    let channelsCopy = Object.assign([], this.channelsLastValue);
    this.channelsSubject$.next(mutator(channelsCopy));
  }

  removeChannel(channelId: string){
    return this.http.delete(`/api/channel/${channelId}`)
      .do(() => this.pushNewChanges(
        channels => {
          remove(channels, channel => channel._id === channelId);
          return channels;
        }
      ));
  }

  handleUploadResponse(res){
    this.pushNewChanges(channels => {
      channels.push(JSON.parse(res));
      return channels;
    });
  }

  updateActivity({ activityForm, channelId, activityId }){
    let uri = `/api/channel/${channelId}/acitvity/${activityId}`;
    return this.http.post(uri, activityForm);
  }

}
