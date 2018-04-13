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
