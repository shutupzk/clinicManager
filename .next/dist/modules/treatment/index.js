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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvdHJlYXRtZW50L2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlZ2lzdHJhdGlvbkFkZFNjcmVlbiIsIlJlZ2lzdHJhdGlvbkxpc3RTY3JlZW4iLCJMaXN0RGV0YWlsU2NyZWVuIiwiVHJpYWdlU2NyZWVuIiwiQWRkbWlzaW9uU2NyZWVuIiwiQXBwb2ludG1lbnRMaXN0U2NyZWVuIiwiQXBwb2ludG1lbnRBZGRTY3JlZW4iLCJUcmlhZ2VSZWNvcmRTY3JlZW4iLCJUb2JlQ2hhcmdlZFNjcmVlbiIsIkNoYXJnZWRTY3JlZW4iLCJBbHJlYWR5Q2hhcmdlZFNjcmVlbiIsIlJlZnVuZGVkU2NyZWVuIiwiT3JkZXJNYW5hZ2VtZW50U2NyZWVuIiwiVG9sbFNjcmVlbiIsIlBlbmRpbmdEcnVnU2NyZWVuIiwiRHJ1Z0hhc0JlZW5Jc3N1ZWRTY3JlZW4iLCJEcnVnSGFzQmVlbldpdGhkcmF3blNjcmVlbiIsIlJlY3B0aW9uU2NyZWVuIiwiVG9iZUNoZWNrZWRTY3JlZW4iLCJJbkluc3BlY3Rpb25TY3JlZW4iLCJDaGVja2VkU2NyZWVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztRQUdFLEE7UUFDQSxBO1FBQ0EsQTtRQUNBLEE7UUFDQSxBO1FBQ0EsQTtRQUNBLEE7UUFDQSxBO1FBQ0EsQTtRQUNBLEE7UUFDQSxBO1FBQ0EsQTtRQUNBLEE7UUFDQSxBO1FBRUEsQTtRQUNBLEE7UUFDQSxBO1FBQ0EsQTtRQUNBLEE7UUFDQSxBO1FBQ0EsQTtBQTNDRiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva2FuZ2NoYS9NeVByb2plY3QvY2xpbmljTWFuYWdlciJ9