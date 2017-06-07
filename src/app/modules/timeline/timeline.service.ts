import { Injectable } from '@angular/core';
import * as moment from 'moment';

const generateNumberArr = (num: number) => new Array(num).fill(null).map((x,i) => i);

@Injectable()
export class TimelineSvc {

  //This would be calculated from the range of the activity data
  //stubbed for now
  private from = moment();
  private to = moment().add(3, "years");

  public generateRange(): Array<number> {
    return generateNumberArr(this.to.diff(this.from, "quarters"));
  }

}
