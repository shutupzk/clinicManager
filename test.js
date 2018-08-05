import moment from 'moment'
let month = moment()
.add(-1, 'M')
.format('YYYY-MM-DD')
let end_date = moment()
.format('YYYY-MM-DD')
let xdata = []
console.log('xdata====', xdata)
while (month < end_date) {
  month = moment(month).add(1, 'M').format('YYYY-MM')
  xdata.push(month)
  console.log('xdata====', month, xdata)
}
