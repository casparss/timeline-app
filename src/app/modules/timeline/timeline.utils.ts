import { Injectable } from '@angular/core';
import { minBy, maxBy } from 'lodash';
import * as moment from 'moment';

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
    let chanelsMinMax = data.map(channel => {
      let min = minBy(channel.activities, ({ period }) => period.from.unix());
      let max = maxBy(channel.activities, ({ period }) => period.to.unix());

      return {
        min: min ? min.period.from : { unix(){} },
        max: max ? max.period.to : { unix(){} }
      }
    });

    return {
      min: minBy(chanelsMinMax, ({ min }) => min.unix()).min.set({ month: 0, date: 1 }),
      max: maxBy(chanelsMinMax, ({ max }) => max.unix()).max.set({ month: 11, date: 31 })
    };
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

    for(let i = 0; i <= (max - min); i++){
      years.push(min + i);
    }

    return years;
  }

  public getRangeInDays(from, to) {
    return to.diff(from, "days");
  }

  public getFullRangeInDays(){
    return this.getRangeInDays(range.min, range.max);
  }

  public calculateWidthAsPercentage(fullRangeInDays, rangeInDays){
    return (rangeInDays / fullRangeInDays) * 100;
  }

}
