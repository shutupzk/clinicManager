'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTradeNo = exports.formatMoney = exports.getAgeByBirthday = exports.isEmptyObject = exports.formatArrayToJson = exports.readJsonKey = undefined;

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var readJsonKey = exports.readJsonKey = function readJsonKey(key, json, fkey, tKey) {
  return foreachJsonKey(key, json, fkey, tKey);
};

var formatArrayToJson = exports.formatArrayToJson = function formatArrayToJson(array) {
  return foreachArrayKey(array);
};

var isEmptyObject = exports.isEmptyObject = function isEmptyObject(json) {
  for (var key in json) {
    return false;
  }
  return true;
};

var foreachArrayKey = function foreachArrayKey() {
  var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  var obj = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _getIterator3.default)(array), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var json = _step.value;
      var key = json.key,
          childs = json.childs;

      delete json.key;
      delete json.childs;
      obj[key] = {};
      for (var attr in json) {
        obj[key][key + '#' + attr] = json[attr];
      }
      obj[key] = (0, _assign2.default)({}, obj[key], foreachArrayKey(childs));
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return obj;
};

var foreachJsonKey = function foreachJsonKey(oldkey, json, fkey, tKey) {
  if (oldkey.indexOf(oldkey + '#') === 0) return null;
  var obj = { key: oldkey };
  for (var key in json) {
    var one = json[key];
    if (key.indexOf(oldkey + '#') === 0) {
      obj[key.replace(oldkey + '#', '')] = one;
    } else {
      if (obj.childs) {
        obj.childs.push(foreachJsonKey(key, one, fkey, tKey));
        continue;
      }
      obj.childs = [foreachJsonKey(key, one, fkey, tKey)];
    }
  }
  var middleObj = obj[fkey];
  obj[fkey] = obj[tKey];
  if (!obj[tKey]) {
    delete obj[fkey];
  }
  obj[tKey] = middleObj;
  if (!middleObj) {
    delete obj[tKey];
  }
  return obj;
};

var getAgeByBirthday = exports.getAgeByBirthday = function getAgeByBirthday(birthday) {
  if (!birthday) return '未知';
  var days = (0, _moment2.default)().diff((0, _moment2.default)(birthday), 'day');
  if (days < 1) {
    var hours = (0, _moment2.default)().diff((0, _moment2.default)(birthday), 'h');
    return hours + '\u5C0F\u65F6';
  }
  var months = (0, _moment2.default)().diff((0, _moment2.default)(birthday), 'month');
  if (months < 1) return days + '\u5929';
  if (months < 12) {
    var d = (0, _moment2.default)().add(months * -1, 'month').diff((0, _moment2.default)(birthday), 'day');
    if (d === 0) return months + '\u6708';
    return months + '\u6708' + d + '\u5929';
  }
  var years = (0, _moment2.default)().diff((0, _moment2.default)(birthday), 'year');
  if (years < 7) {
    var y = (0, _moment2.default)().add(years * -1, 'year').diff((0, _moment2.default)(birthday), 'month');
    if (y === 0) return years + '\u5C81';
    return years + '\u5C81' + months % 12 + '\u6708';
  }
  return years + '\u5C81';
};

var formatMoney = exports.formatMoney = function formatMoney(money) {
  if (!money) return '';
  return (money / 100).toFixed(2);
};

var createTradeNo = exports.createTradeNo = function createTradeNo() {
  var sec = (0, _moment2.default)().format('YYYYMMDDHHmmsss');
  var r2 = (Math.random() + '').substr(4, 3);
  return sec + r2;
};