import { TestBed, inject } from '@angular/core/testing';
import { TimelineUtils } from '../timeline.utils';
import { timelineFixture as fixture } from './timeline.fixture';
import * as moment from 'moment';

let timelineUtils: TimelineUtils = null;

describe('Time line utils', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TimelineUtils
      ]
    }).compileComponents();

  });

  it('should initialise', inject([TimelineUtils], timelineUtils => {
    expect(timelineUtils).toBeTruthy();
  }));

  it('getRangeMinMax()', inject([TimelineUtils], timelineUtils => {
    let range = timelineUtils.getRangeMinMax(fixture);
    expect(range.min).toEqual(fixture[0].activities[0].period.from);
    expect(range.max).toEqual(fixture[1].activities[1].period.to);
  }));

  it('getActivityWidth()', inject([TimelineUtils], timelineUtils => {
    let from = moment({ year: 2016 });
    let to = moment({ year: 2017 });

    timelineUtils.setRange(fixture);
    let activityWidth = timelineUtils.getActivityWidth(from, to);
    expect(activityWidth).toBe(10.831606984314886);
  }));

  it('getActivityPosition()', inject([TimelineUtils], timelineUtils => {
    let to = moment({ year: 2014 });

    timelineUtils.setRange(fixture);
    let activityPosition = timelineUtils.getActivityPosition(to);
    expect(activityPosition).toBe(6.096478248002367);
  }));

  it('getYearHeadings()', inject([TimelineUtils], timelineUtils => {
    timelineUtils.setRange(fixture);
    let years = timelineUtils.getYearHeadings();
    expect(years.length).toEqual(10);
  }));

  it('getRangeInDays()', inject([TimelineUtils], timelineUtils => {
    let from = moment({ year: 2016 });
    let to = moment({ year: 2017 });
    let rangeInDays = timelineUtils.getRangeInDays(from, to);
    expect(rangeInDays).toBe(366);
  }));

  it('getFullRangeInDays()', inject([TimelineUtils], timelineUtils => {
    timelineUtils.setRange(fixture);
    let fullRangeInDays = timelineUtils.getFullRangeInDays();
    expect(fullRangeInDays).toEqual(3379);
  }));

  it('calculateWidthAsPercentage()', inject([TimelineUtils], timelineUtils => {
    let fullRangeInDays = 400;
    let rangeInDays = 60;
    let width = timelineUtils.calculateWidthAsPercentage(fullRangeInDays, rangeInDays);
    expect(width).toEqual(15);
  }));

});
