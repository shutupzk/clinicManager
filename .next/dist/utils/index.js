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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL2luZGV4LmpzIl0sIm5hbWVzIjpbInJlYWRKc29uS2V5Iiwia2V5IiwianNvbiIsImZrZXkiLCJ0S2V5IiwiZm9yZWFjaEpzb25LZXkiLCJmb3JtYXRBcnJheVRvSnNvbiIsImZvcmVhY2hBcnJheUtleSIsImFycmF5IiwiaXNFbXB0eU9iamVjdCIsIm9iaiIsImNoaWxkcyIsImF0dHIiLCJvbGRrZXkiLCJpbmRleE9mIiwib25lIiwicmVwbGFjZSIsInB1c2giLCJtaWRkbGVPYmoiLCJnZXRBZ2VCeUJpcnRoZGF5IiwiYmlydGhkYXkiLCJkYXlzIiwiZGlmZiIsImhvdXJzIiwibW9udGhzIiwiZCIsImFkZCIsInllYXJzIiwieSIsImZvcm1hdE1vbmV5IiwibW9uZXkiLCJ0b0ZpeGVkIiwiY3JlYXRlVHJhZGVObyIsInNlYyIsImZvcm1hdCIsInIyIiwiTWF0aCIsInJhbmRvbSIsInN1YnN0ciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7O0FBRU8sSUFBTSxvQ0FBYyxTQUFkLEFBQWMsWUFBQyxBQUFELEtBQU0sQUFBTixNQUFZLEFBQVosTUFBa0IsQUFBbEIsTUFBMkIsQUFDcEQ7U0FBTyxlQUFlLEFBQWYsS0FBb0IsQUFBcEIsTUFBMEIsQUFBMUIsTUFBZ0MsQUFBaEMsQUFBUCxBQUNEO0FBRk07O0FBSUEsSUFBTSxnREFBb0IsU0FBcEIsQUFBb0IseUJBQVMsQUFDeEM7U0FBTyxnQkFBZ0IsQUFBaEIsQUFBUCxBQUNEO0FBRk07O0FBSUEsSUFBTSx3Q0FBZ0IsU0FBaEIsQUFBZ0Isb0JBQVEsQUFDbkM7T0FBSyxJQUFJLEFBQVQsT0FBZ0IsQUFBaEIsTUFBc0IsQUFDcEI7V0FBTyxBQUFQLEFBQ0Q7QUFDRDtTQUFPLEFBQVAsQUFDRDtBQUxNOztBQU9QLElBQU0sa0JBQWtCLFNBQWxCLEFBQWtCLGtCQUFnQjtNQUFmLEFBQWUsNEVBQVAsQUFBTyxBQUN0Qzs7TUFBSSxNQUFNLEFBQVYsQUFEc0M7a0NBQUE7MEJBQUE7dUJBQUE7O01BRXRDO29EQUFpQixBQUFqQixpSEFBd0I7VUFBZixBQUFlLGFBQUE7VUFDaEIsQUFEZ0IsTUFDQSxBQURBLEtBQ2hCLEFBRGdCO1VBQ1gsQUFEVyxTQUNBLEFBREEsS0FDWCxBQURXLEFBRXRCOzthQUFPLEtBQUssQUFBWixBQUNBO2FBQU8sS0FBSyxBQUFaLEFBQ0E7VUFBSSxBQUFKLE9BQVcsQUFBWCxBQUNBO1dBQUssSUFBSSxBQUFULFFBQWlCLEFBQWpCLE1BQXVCLEFBQ3JCO1lBQUksQUFBSixLQUFZLEFBQVosWUFBbUIsQUFBbkIsUUFBNkIsS0FBSyxBQUFMLEFBQTdCLEFBQ0Q7QUFDRDtVQUFJLEFBQUosT0FBVyxzQkFBYyxBQUFkLElBQWtCLElBQUksQUFBSixBQUFsQixNQUE0QixnQkFBZ0IsQUFBaEIsQUFBNUIsQUFBWCxBQUNEO0FBWHFDO2dCQUFBO3dCQUFBO3FCQUFBO1lBQUE7UUFBQTswREFBQTtrQkFBQTtBQUFBO2NBQUE7NkJBQUE7Y0FBQTtBQUFBO0FBQUE7QUFZdEM7O1NBQU8sQUFBUCxBQUNEO0FBYkQ7O0FBZUEsSUFBTSxpQkFBaUIsU0FBakIsQUFBaUIsZUFBQyxBQUFELFFBQVMsQUFBVCxNQUFlLEFBQWYsTUFBcUIsQUFBckIsTUFBOEIsQUFDbkQ7TUFBSSxPQUFPLEFBQVAsUUFBa0IsQUFBbEIsa0JBQWlDLEFBQXJDLEdBQXdDLE9BQU8sQUFBUCxBQUN4QztNQUFJLE1BQU0sRUFBRSxLQUFLLEFBQVAsQUFBVixBQUNBO09BQUssSUFBSSxBQUFULE9BQWdCLEFBQWhCLE1BQXNCLEFBQ3BCO1FBQUksTUFBTSxLQUFLLEFBQUwsQUFBVixBQUNBO1FBQUksSUFBSSxBQUFKLFFBQWUsQUFBZixrQkFBOEIsQUFBbEMsR0FBcUMsQUFDbkM7VUFBSSxJQUFJLEFBQUosUUFBZSxBQUFmLGNBQTBCLEFBQTFCLEFBQUosT0FBcUMsQUFBckMsQUFDRDtBQUZELFdBRU8sQUFDTDtVQUFJLElBQUksQUFBUixRQUFnQixBQUNkO1lBQUksQUFBSixPQUFXLEFBQVgsS0FBZ0IsZUFBZSxBQUFmLEtBQW9CLEFBQXBCLEtBQXlCLEFBQXpCLE1BQStCLEFBQS9CLEFBQWhCLEFBQ0E7QUFDRDtBQUNEO1VBQUksQUFBSixTQUFhLENBQUMsZUFBZSxBQUFmLEtBQW9CLEFBQXBCLEtBQXlCLEFBQXpCLE1BQStCLEFBQS9CLEFBQUQsQUFBYixBQUNEO0FBQ0Y7QUFDRDtNQUFJLFlBQVksSUFBSSxBQUFKLEFBQWhCLEFBQ0E7TUFBSSxBQUFKLFFBQVksSUFBSSxBQUFKLEFBQVosQUFDQTtNQUFJLENBQUMsSUFBSSxBQUFKLEFBQUwsT0FBZ0IsQUFDZDtXQUFPLElBQUksQUFBSixBQUFQLEFBQ0Q7QUFDRDtNQUFJLEFBQUosUUFBWSxBQUFaLEFBQ0E7TUFBSSxDQUFDLEFBQUwsV0FBZ0IsQUFDZDtXQUFPLElBQUksQUFBSixBQUFQLEFBQ0Q7QUFDRDtTQUFPLEFBQVAsQUFDRDtBQXpCRDs7QUEyQk8sSUFBTSw4Q0FBbUIsU0FBbkIsQUFBbUIsMkJBQVksQUFDMUM7TUFBSSxDQUFDLEFBQUwsVUFBZSxPQUFPLEFBQVAsQUFDZjtNQUFJLE9BQU8sd0JBQVMsQUFBVCxLQUFjLHNCQUFPLEFBQVAsQUFBZCxXQUFnQyxBQUFoQyxBQUFYLEFBQ0E7TUFBSSxPQUFPLEFBQVgsR0FBYyxBQUNaO1FBQUksUUFBUSx3QkFBUyxBQUFULEtBQWMsc0JBQU8sQUFBUCxBQUFkLFdBQWdDLEFBQWhDLEFBQVosQUFDQTtXQUFVLEFBQVYsUUFDRDtBQUNEO01BQUksU0FBUyx3QkFBUyxBQUFULEtBQWMsc0JBQU8sQUFBUCxBQUFkLFdBQWdDLEFBQWhDLEFBQWIsQUFDQTtNQUFJLFNBQVMsQUFBYixHQUFnQixPQUFVLEFBQVYsT0FDaEI7TUFBSSxTQUFTLEFBQWIsSUFBaUIsQUFDZjtRQUFJLElBQUksd0JBQ0wsQUFESyxJQUNELFNBQVMsQ0FBQyxBQURULEdBQ1ksQUFEWixTQUVMLEFBRkssS0FFQSxzQkFBTyxBQUFQLEFBRkEsV0FFa0IsQUFGbEIsQUFBUixBQUdBO1FBQUksTUFBTSxBQUFWLEdBQWEsT0FBVSxBQUFWLFNBQ2I7V0FBVSxBQUFWLG9CQUFvQixBQUFwQixJQUNEO0FBQ0Q7TUFBSSxRQUFRLHdCQUFTLEFBQVQsS0FBYyxzQkFBTyxBQUFQLEFBQWQsV0FBZ0MsQUFBaEMsQUFBWixBQUNBO01BQUksUUFBUSxBQUFaLEdBQWUsQUFDYjtRQUFJLElBQUksd0JBQ0wsQUFESyxJQUNELFFBQVEsQ0FBQyxBQURSLEdBQ1csQUFEWCxRQUVMLEFBRkssS0FFQSxzQkFBTyxBQUFQLEFBRkEsV0FFa0IsQUFGbEIsQUFBUixBQUdBO1FBQUksTUFBTSxBQUFWLEdBQWEsT0FBVSxBQUFWLFFBQ2I7V0FBVSxBQUFWLG1CQUFtQixTQUFTLEFBQTVCLEtBQ0Q7QUFDRDtTQUFVLEFBQVYsUUFDRDtBQXpCTTs7QUEyQkEsSUFBTSxvQ0FBYyxTQUFkLEFBQWMsbUJBQVMsQUFDbEM7TUFBSSxDQUFDLEFBQUwsT0FBWSxPQUFPLEFBQVAsQUFDWjtTQUFPLENBQUMsUUFBUSxBQUFULEtBQWMsQUFBZCxRQUFzQixBQUF0QixBQUFQLEFBQ0Q7QUFITTs7QUFLQSxJQUFNLHdDQUFnQixTQUFoQixBQUFnQixnQkFBTSxBQUNqQztNQUFJLE1BQU0sd0JBQVMsQUFBVCxPQUFnQixBQUFoQixBQUFWLEFBQ0E7TUFBSSxLQUFLLENBQUMsS0FBSyxBQUFMLFdBQWdCLEFBQWpCLElBQXFCLEFBQXJCLE9BQTRCLEFBQTVCLEdBQStCLEFBQS9CLEFBQVQsQUFDQTtTQUFPLE1BQU0sQUFBYixBQUNEO0FBSk0iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2thbmdjaGEvTXlQcm9qZWN0L2NsaW5pY01hbmFnZXIifQ==