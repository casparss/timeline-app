import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable()
export class TimelineSvc {

  //This would be calculated from the range of the activity data
  //stubbed for now
  public from = moment("2017");
  public to = moment("2020");

  constructor(){
    console.log(this);
  }

  public getRangeInDays(to, from) {
    return to.diff(from, "days");
  }

  public getFullRangeInDays(){
    return this.getRangeInDays(this.to, this.from);
  }

  public calculateWidthAsPercentage(fullRangeInDays, rangeInDays){
    return (rangeInDays / fullRangeInDays) * 100;
  }

  public getActivityWidth(to, from){
    let fullRangeInDays = this.getFullRangeInDays();
    let rangeInDays = this.getRangeInDays(to, from);
    return this.calculateWidthAsPercentage(fullRangeInDays, rangeInDays);
  }

  public getActivityPosition(to){
    let diffInDays = this.getRangeInDays(to, this.from);
    let fullRangeInDays = this.getFullRangeInDays();
    return this.calculateWidthAsPercentage(fullRangeInDays, diffInDays);
  }

}
