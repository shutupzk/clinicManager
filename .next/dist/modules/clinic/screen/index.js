'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PharmacyListScreen = exports.ScheduleListScreen = exports.DepartmentListScreen = exports.DoctorListScreen = undefined;

var _doctor_list_screen = require('./doctor/doctor_list_screen');

var _doctor_list_screen2 = _interopRequireDefault(_doctor_list_screen);

var _department_list_screen = require('./department/department_list_screen');

var _department_list_screen2 = _interopRequireDefault(_department_list_screen);

var _schedule_list_screen = require('./schedule/schedule_list_screen');

var _schedule_list_screen2 = _interopRequireDefault(_schedule_list_screen);

var _pharmacy_list_screen = require('./pharmacy/pharmacy_list_screen');

var _pharmacy_list_screen2 = _interopRequireDefault(_pharmacy_list_screen);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.DoctorListScreen = _doctor_list_screen2.default;
exports.DepartmentListScreen = _department_list_screen2.default;
exports.ScheduleListScreen = _schedule_list_screen2.default;
exports.PharmacyListScreen = _pharmacy_list_screen2.default;