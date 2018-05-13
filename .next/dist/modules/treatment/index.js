'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckedScreen = exports.InInspectionScreen = exports.TobeCheckedScreen = exports.RecptionScreen = exports.DrugHasBeenWithdrawnScreen = exports.DrugHasBeenIssuedScreen = exports.PendingDrugScreen = exports.TollScreen = exports.OrderManagementScreen = exports.RefundedScreen = exports.AlreadyChargedScreen = exports.ChargedScreen = exports.TobeChargedScreen = exports.TriageRecordScreen = exports.AppointmentAddScreen = exports.AppointmentListScreen = exports.AddmisionScreen = exports.TriageScreen = exports.ListDetailScreen = exports.RegistrationListScreen = exports.RegistrationAddScreen = undefined;

var _registration_add_screen = require('./screens/registration/registration_add_screen');

var _registration_add_screen2 = _interopRequireDefault(_registration_add_screen);

var _registration_list_screen = require('./screens/registration/registration_list_screen');

var _registration_list_screen2 = _interopRequireDefault(_registration_list_screen);

var _triage_screen = require('./screens/triage/triage_screen');

var _triage_screen2 = _interopRequireDefault(_triage_screen);

var _addmission = require('./screens/addmission');

var _addmission2 = _interopRequireDefault(_addmission);

var _appointment_list_screen = require('./screens/triage/appointment_list_screen');

var _appointment_list_screen2 = _interopRequireDefault(_appointment_list_screen);

var _appointment_add_screen = require('./screens/triage/appointment_add_screen');

var _appointment_add_screen2 = _interopRequireDefault(_appointment_add_screen);

var _triage_record_screen = require('./screens/triage/triage_record_screen');

var _triage_record_screen2 = _interopRequireDefault(_triage_record_screen);

var _list_detail_screen = require('./screens/registration/list_detail_screen');

var _list_detail_screen2 = _interopRequireDefault(_list_detail_screen);

var _charge = require('./screens/charge');

var _charge2 = _interopRequireDefault(_charge);

var _charged_screen = require('./screens/charge/charged_screen');

var _charged_screen2 = _interopRequireDefault(_charged_screen);

var _alreadyCharged_screen = require('./screens/charge/alreadyCharged_screen');

var _alreadyCharged_screen2 = _interopRequireDefault(_alreadyCharged_screen);

var _refunded_screen = require('./screens/charge/refunded_screen');

var _refunded_screen2 = _interopRequireDefault(_refunded_screen);

var _orderManagement_screen = require('./screens/charge/orderManagement_screen');

var _orderManagement_screen2 = _interopRequireDefault(_orderManagement_screen);

var _toll_screen = require('./screens/charge/toll_screen');

var _toll_screen2 = _interopRequireDefault(_toll_screen);

var _pending_drug_screen = require('./screens/drugdelivery/pending_drug_screen');

var _pending_drug_screen2 = _interopRequireDefault(_pending_drug_screen);

var _drug_hasbeen_issued_screen = require('./screens/drugdelivery/drug_hasbeen_issued_screen');

var _drug_hasbeen_issued_screen2 = _interopRequireDefault(_drug_hasbeen_issued_screen);

var _drug_hasbeen_withdrawn_screen = require('./screens/drugdelivery/drug_hasbeen_withdrawn_screen');

var _drug_hasbeen_withdrawn_screen2 = _interopRequireDefault(_drug_hasbeen_withdrawn_screen);

var _reception_screen = require('./screens/addmission/reception_screen');

var _reception_screen2 = _interopRequireDefault(_reception_screen);

var _tobe_checked_screen = require('./screens/exam/tobe_checked_screen');

var _tobe_checked_screen2 = _interopRequireDefault(_tobe_checked_screen);

var _in_inspection_screen = require('./screens/exam/in_inspection_screen');

var _in_inspection_screen2 = _interopRequireDefault(_in_inspection_screen);

var _checked_screen = require('./screens/exam/checked_screen');

var _checked_screen2 = _interopRequireDefault(_checked_screen);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.RegistrationAddScreen = _registration_add_screen2.default;
exports.RegistrationListScreen = _registration_list_screen2.default;
exports.ListDetailScreen = _list_detail_screen2.default;
exports.TriageScreen = _triage_screen2.default;
exports.AddmisionScreen = _addmission2.default;
exports.AppointmentListScreen = _appointment_list_screen2.default;
exports.AppointmentAddScreen = _appointment_add_screen2.default;
exports.TriageRecordScreen = _triage_record_screen2.default;
exports.TobeChargedScreen = _charge2.default;
exports.ChargedScreen = _charged_screen2.default;
exports.AlreadyChargedScreen = _alreadyCharged_screen2.default;
exports.RefundedScreen = _refunded_screen2.default;
exports.OrderManagementScreen = _orderManagement_screen2.default;
exports.TollScreen = _toll_screen2.default;
exports.PendingDrugScreen = _pending_drug_screen2.default;
exports.DrugHasBeenIssuedScreen = _drug_hasbeen_issued_screen2.default;
exports.DrugHasBeenWithdrawnScreen = _drug_hasbeen_withdrawn_screen2.default;
exports.RecptionScreen = _reception_screen2.default;
exports.TobeCheckedScreen = _tobe_checked_screen2.default;
exports.InInspectionScreen = _in_inspection_screen2.default;
exports.CheckedScreen = _checked_screen2.default;
// import NewListDetails from './screens/newListDetail_screen'