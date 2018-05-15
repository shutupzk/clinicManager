import moment from 'moment'

export const readJsonKey = (key, json, fkey, tKey) => {
  return foreachJsonKey(key, json, fkey, tKey)
}

export const formatArrayToJson = array => {
  return foreachArrayKey(array)
}

export const isEmptyObject = json => {
  for (let key in json) {
    return false
  }
  return true
}

const foreachArrayKey = (array = []) => {
  let obj = {}
  for (let json of array) {
    let { key, childs } = json
    delete json.key
    delete json.childs
    obj[key] = {}
    for (let attr in json) {
      obj[key][`${key}#${attr}`] = json[attr]
    }
    obj[key] = Object.assign({}, obj[key], foreachArrayKey(childs))
  }
  return obj
}

const foreachJsonKey = (oldkey, json, fkey, tKey) => {
  if (oldkey.indexOf(`${oldkey}#`) === 0) return null
  let obj = { key: oldkey }
  for (let key in json) {
    let one = json[key]
    if (key.indexOf(`${oldkey}#`) === 0) {
      obj[key.replace(`${oldkey}#`, '')] = one
    } else {
      if (obj.childs) {
        obj.childs.push(foreachJsonKey(key, one, fkey, tKey))
        continue
      }
      obj.childs = [foreachJsonKey(key, one, fkey, tKey)]
    }
  }
  let middleObj = obj[fkey]
  obj[fkey] = obj[tKey]
  if (!obj[tKey]) {
    delete obj[fkey]
  }
  obj[tKey] = middleObj
  if (!middleObj) {
    delete obj[tKey]
  }
  return obj
}

export const getAgeByBirthday = birthday => {
  if (!birthday) return '未知'
  let days = moment().diff(moment(birthday), 'day')
  if (days < 1) {
    let hours = moment().diff(moment(birthday), 'h')
    return `${hours}小时`
  }
  let months = moment().diff(moment(birthday), 'month')
  if (months < 1) return `${days}天`
  if (months < 12) {
    let d = moment()
      .add(months * -1, 'month')
      .diff(moment(birthday), 'day')
    if (d === 0) return `${months}月`
    return `${months}月${d}天`
  }
  let years = moment().diff(moment(birthday), 'year')
  if (years < 7) {
    let y = moment()
      .add(years * -1, 'year')
      .diff(moment(birthday), 'month')
    if (y === 0) return `${years}岁`
    return `${years}岁${months % 12}月`
  }
  return `${years}岁`
}

export const formatMoney = money => {
  if (money === undefined) return ''
  return (money / 100).toFixed(2)
}

export const createTradeNo = () => {
  let sec = moment().format('YYYYMMDDHHmmsss')
  let r2 = (Math.random() + '').substr(4, 3)
  return sec + r2
}
