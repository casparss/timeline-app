const moment = require('moment');

module.exports = class CsvArrayParser {

  constructor(){
    this.channel = {};
    this.isFirstRow = true;
    this.rawCsvArr = [];
  }

  pushRawCsvRow(csvRow){
    this.rawCsvArr.push(csvRow);
  }

  generate(){
    let firstTwoRows = this.rawCsvArr.splice(0, 2);
    this.setChannelTitle(firstTwoRows[0]);

    this.channel.activities = this.rawCsvArr.map(([
      title,
      from,
      to,
      location,
      description,
      communication_drivers,
      audience,
      kols_engaged,
      no_of_hcps,
      status
    ]) => ({
      title,
      period: {
        from: this.parseDate(from),
        to: this.parseDate(to)
      },
      to,
      location,
      description,
      communication_drivers,
      audience,
      kols_engaged,
      no_of_hcps,
      status
    }));

    return this.channel;
  }

  addRow(csvRow){
    if(this.isFirstRow){
      this.setChannelTitle(csvRow);
      this.isFirstRow = false;
    } else {
      this.pushChannelData(csvRow);
    }
  }

  setChannelTitle([title]){
    this.channel.name = title;
  }

  parseDate(dateStr){
    let momentDate = moment();
    let [ date, month, year ] = dateStr.split('/');
    month--;
    momentDate.set({ date, month, year });
    return momentDate;
  }

};
