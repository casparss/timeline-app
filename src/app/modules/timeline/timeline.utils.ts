import { Injectable } from '@angular/core';
import { minBy, maxBy } from 'lodash';
import * as moment from 'moment';

//Ideally would want moment typing on this object
let range = {
  min: null,
  max: null
};

@Injectable()
export class TimelineUtils {

  public setRange(data){
    Object.assign(range, this.getRangeMinMax(data));
  }

  public getRangeMinMax(data:any){
    let chanelsMinMax = data.map(channel => ({
      min: minBy(channel.activities, ({ period }) => period.from.unix()).period.from,
      max: maxBy(channel.activities, ({ period }) => period.to.unix()).period.to
    }));

    return {
      min: minBy(chanelsMinMax, ({ min }) => min.unix()).min,
      max: maxBy(chanelsMinMax, ({ max }) => max.unix()).max
    }
  }

  public getActivityWidth(from, to){
    let fullRangeInDays = this.getFullRangeInDays();
    let rangeInDays = this.getRangeInDays(from, to);
    return this.calculateWidthAsPercentage(fullRangeInDays, rangeInDays);
  }

  public getActivityPosition(to){
    let diffInDays = this.getRangeInDays(range.min, to);
    let fullRangeInDays = this.getFullRangeInDays();
    return this.calculateWidthAsPercentage(fullRangeInDays, diffInDays);
  }

  public getYearHeadings(){
    let min = range.min.year();
    let max = range.max.year();
    let years = [];

    for(let i = 0; i < (max - min); i++){
      years.push(min + i);
    }

    return years;
  }

  private getRangeInDays(from, to) {
    return to.diff(from, "days");
  }

  private getFullRangeInDays(){
    return this.getRangeInDays(range.min, range.max);
  }

  private calculateWidthAsPercentage(fullRangeInDays, rangeInDays){
    return (rangeInDays / fullRangeInDays) * 100;
  }

}
