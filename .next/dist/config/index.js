'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MAINFUNCTION = exports.TITLE = exports.PORT = exports.MAINCOLOR = exports.HOME_PAGE = exports.withData = exports.API_SERVER = undefined;

var _withData = require('./withData');

var _withData2 = _interopRequireDefault(_withData);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var TITLE = '诊小二管家平台';

var API_SERVER = 'http://47.104.206.95:8080'; //
// const API_SERVER = 'http://localhost:8080' //
var PORT = '9151'; // 端口

// 主功能
var MAINFUNCTION = [{
  title: '就诊流程',
  short_name: 'treatment',
  navigateName: '/treatment/registration',
  children: [{ title: '就诊人登记', navigateName: '/treatment/registration', icon: '/static/icons/patient.svg' }, { title: '预约分诊', navigateName: '/treatment/triage/triage', icon: '/static/icons/triage.svg' }, { title: '医生接诊', navigateName: '/treatment/admission', icon: '/static/icons/admission.svg' }, { title: '收费管理', navigateName: '/treatment/charge', icon: '/static/icons/charge.svg' }, { title: '门诊发药', navigateName: '/treatment/drugdelivery', icon: '/static/icons/drugdelivery.svg' }, { title: '检查', navigateName: '/treatment/exam', icon: '/static/icons/exam.svg' }, { title: '检验', navigateName: '/treatment/inspect', icon: '/static/icons/inspect.svg' }, { title: '治疗', navigateName: '/treatment/treat', icon: '/static/icons/treat.svg' }, { title: '药品零售', navigateName: '/treatment/drugretail', icon: '/static/icons/drugretail.svg' }]
}, {
  title: '诊所管理',
  short_name: 'clinic',
  navigateName: '/clinic',
  children: [{ title: '科室管理', navigateName: '/clinic', icon: '/static/icons/department.svg' }, { title: '医生管理', navigateName: '/clinic/doctor', icon: '/static/icons/doctor.svg' }, { title: '排班管理', navigateName: '/clinic/schedule', icon: '/static/icons/schedule.svg' }, { title: '药房管理', navigateName: '/clinic/pharmacy', icon: '/static/icons/pharmacy.svg' }, { title: '耗材管理', navigateName: '/clinic/consumable', icon: '/static/icons/consumable.svg' }, { title: '患者管理', navigateName: '/clinic/patient', icon: '/static/icons/patient2.svg' }]
}, {
  title: '财务管理',
  short_name: 'finance',
  navigateName: '/finance',
  children: [{ title: '费用报表', navigateName: '/finance', icon: '/static/icons/expenseReport.svg' }, { title: '医用报表', navigateName: '/finance/template', icon: '/static/icons/medicalReport.svg' }]
}, {
  title: '设置管理',
  short_name: 'setting',
  navigateName: '/setting/chargeItemSetting/wMedicinePrescription',
  children: [{
    title: '收费项目设置',
    navigateName: '/setting/chargeItemSetting/wMedicinePrescription',
    icon: '/static/icons/charge2.svg',
    children: [{ title: '西/成药处方', navigateName: '/setting/chargeItemSetting/wMedicinePrescription' }, { title: '中药处方', navigateName: '/setting/chargeItemSetting/cMedicinePrescription' }, { title: '检验医嘱', navigateName: '/setting/chargeItemSetting/inspectionPhysician' }, { title: '检验项目', navigateName: '/setting/chargeItemSetting/testItems' }, { title: '检查医嘱', navigateName: '/setting/chargeItemSetting/checkAdvice' }, { title: '治疗医嘱', navigateName: '/setting/chargeItemSetting/treatDoctor' }, { title: '材料费用', navigateName: '/setting/chargeItemSetting/meterialCosts' }, { title: '其他费用', navigateName: '/setting/chargeItemSetting/otherFee' }, { title: '诊疗项目', navigateName: '/setting/chargeItemSetting/medicalTreatmentItems' }]
  }, {
    title: '模板设置',
    navigateName: '/setting/template/medicalRecordTemplate',
    icon: '/static/icons/template.svg',
    children: [{ title: '病历模板', navigateName: '/setting/template/medicalRecordTemplate' }, { title: '检验模板', navigateName: '/setting/template/inspectionTemplate' }, { title: '检查模板', navigateName: '/setting/template/checkTemplate' }, { title: '治疗模板', navigateName: '/setting/template/treatTemplate' }, { title: '西/成药处方模板', navigateName: '/setting/template/wMedicinePrescriptionTemplate' }, { title: '中药处方模板', navigateName: '/setting/template/cMedicinePrescriptionTemplate' }]
  }, {
    title: '权限分组',
    navigateName: '/setting/permissionGroup',
    icon: '/static/icons/permissionGroup.svg'
  }, {
    title: '用户权限',
    navigateName: '/setting/userRights',
    icon: '/static/icons/userRights.svg'
    // , {
    //   title: '会员规则管理',
    //   navigateName: '/setting/membershipRules',
    //   icon: '/static/icons/membershipRules.svg'
    // }, {
    //   title: '供应商管理',
    //   navigateName: '/setting/supplier',
    //   icon: '/static/icons/supplier.svg'
    // }
  }]
}, {
  title: '平台管理',
  short_name: 'platform',
  navigateName: '/platform',
  children: [{ title: '诊所管理', navigateName: '/platform', icon: '/static/icons/clinic.svg' }, { title: '业务管理', navigateName: '/platform/business', icon: '/static/icons/business.svg' }]
}];

// home 页面
var HOME_PAGE = { url: '/apis'

  // 主题颜色
};var MAINCOLOR = '#2A4680';

exports.API_SERVER = API_SERVER;
exports.withData = _withData2.default;
exports.HOME_PAGE = HOME_PAGE;
exports.MAINCOLOR = MAINCOLOR;
exports.PORT = PORT;
exports.TITLE = TITLE;
exports.MAINFUNCTION = MAINFUNCTION;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy9pbmRleC5qcyJdLCJuYW1lcyI6WyJUSVRMRSIsIkFQSV9TRVJWRVIiLCJQT1JUIiwiTUFJTkZVTkNUSU9OIiwidGl0bGUiLCJzaG9ydF9uYW1lIiwibmF2aWdhdGVOYW1lIiwiY2hpbGRyZW4iLCJpY29uIiwiSE9NRV9QQUdFIiwidXJsIiwiTUFJTkNPTE9SIiwid2l0aERhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7QUFFQSxJQUFNLFFBQU4sQUFBYzs7QUFFZCxJQUFNLGFBQU4sQUFBbUIsQSw2QkFBNEI7QUFDL0M7QUFDQSxJQUFNLE8sQUFBTixBQUFhLFFBQU87O0FBRXBCO0FBQ0EsSUFBTTtTQUNKLEFBQ1MsQUFDUDtjQUZGLEFBRWMsQUFDWjtnQkFIRixBQUdnQixBQUNkO1lBQVUsQ0FDWCxFQUFFLE9BQUYsQUFBUyxTQUFTLGNBQWxCLEFBQWdDLDJCQUEyQixNQURoRCxBQUNYLEFBQWlFLCtCQUNqRSxFQUFFLE9BQUYsQUFBUyxRQUFRLGNBQWpCLEFBQStCLDRCQUE0QixNQUZoRCxBQUVYLEFBQWlFLDhCQUNqRSxFQUFFLE9BQUYsQUFBUyxRQUFRLGNBQWpCLEFBQStCLHdCQUF3QixNQUg1QyxBQUdYLEFBQTZELGlDQUM3RCxFQUFFLE9BQUYsQUFBUyxRQUFRLGNBQWpCLEFBQStCLHFCQUFxQixNQUp6QyxBQUlYLEFBQTBELDhCQUMxRCxFQUFFLE9BQUYsQUFBUyxRQUFRLGNBQWpCLEFBQStCLDJCQUEyQixNQUwvQyxBQUtYLEFBQWdFLG9DQUNoRSxFQUFFLE9BQUYsQUFBUyxNQUFNLGNBQWYsQUFBNkIsbUJBQW1CLE1BTnJDLEFBTVgsQUFBc0QsNEJBQ3RELEVBQUUsT0FBRixBQUFTLE1BQU0sY0FBZixBQUE2QixzQkFBc0IsTUFQeEMsQUFPWCxBQUF5RCwrQkFDekQsRUFBRSxPQUFGLEFBQVMsTUFBTSxjQUFmLEFBQTZCLG9CQUFvQixNQVJ0QyxBQVFYLEFBQXVELDZCQUN2RCxFQUFFLE9BQUYsQUFBUyxRQUFRLGNBQWpCLEFBQStCLHlCQUF5QixNQWR0QyxBQUNuQixBQUlZLEFBU1gsQUFBOEQ7QUFiL0QsQUFDRSxDQUZpQjtTQWlCbkIsQUFDUyxBQUNQO2NBRkYsQUFFYyxBQUNaO2dCQUhGLEFBR2dCLEFBQ2Q7WUFBVSxDQUNYLEVBQUUsT0FBRixBQUFTLFFBQVEsY0FBakIsQUFBK0IsV0FBVyxNQUQvQixBQUNYLEFBQWdELGtDQUNoRCxFQUFFLE9BQUYsQUFBUyxRQUFRLGNBQWpCLEFBQStCLGtCQUFrQixNQUZ0QyxBQUVYLEFBQXVELDhCQUN2RCxFQUFFLE9BQUYsQUFBUyxRQUFRLGNBQWpCLEFBQStCLG9CQUFvQixNQUh4QyxBQUdYLEFBQXlELGdDQUN6RCxFQUFFLE9BQUYsQUFBUyxRQUFRLGNBQWpCLEFBQStCLG9CQUFvQixNQUp4QyxBQUlYLEFBQXlELGdDQUN6RCxFQUFFLE9BQUYsQUFBUyxRQUFRLGNBQWpCLEFBQStCLHNCQUFzQixNQUwxQyxBQUtYLEFBQTJELGtDQUMzRCxFQUFFLE9BQUYsQUFBUyxRQUFRLGNBQWpCLEFBQStCLG1CQUFtQixNQTNCaEMsQUFpQm5CLEFBSVksQUFNWCxBQUF3RDtBQVZ6RCxBQUNFO1NBWUYsQUFDUyxBQUNQO2NBRkYsQUFFYyxBQUNaO2dCQUhGLEFBR2dCLEFBQ2Q7WUFBVSxDQUNSLEVBQUUsT0FBRixBQUFTLFFBQVEsY0FBakIsQUFBK0IsWUFBWSxNQURuQyxBQUNSLEFBQWlELHFDQUNqRCxFQUFFLE9BQUYsQUFBUyxRQUFRLGNBQWpCLEFBQStCLHFCQUFxQixNQXBDckMsQUE4Qm5CLEFBSVksQUFFUixBQUEwRDtBQU45RCxBQUNFO1NBUUYsQUFDUyxBQUNQO2NBRkYsQUFFYyxBQUNaO2dCQUhGLEFBR2dCLEFBQ2Q7O1dBQ0UsQUFDUyxBQUNQO2tCQUZGLEFBRWdCLEFBQ2Q7VUFIRixBQUdRLEFBQ047Y0FBVSxDQUNSLEVBQUMsT0FBRCxBQUFRLFVBQVUsY0FEVixBQUNSLEFBQWdDLHNEQUNoQyxFQUFDLE9BQUQsQUFBUSxRQUFRLGNBRlIsQUFFUixBQUE4QixzREFDOUIsRUFBQyxPQUFELEFBQVEsUUFBUSxjQUhSLEFBR1IsQUFBOEIsb0RBQzlCLEVBQUMsT0FBRCxBQUFRLFFBQVEsY0FKUixBQUlSLEFBQThCLDBDQUM5QixFQUFDLE9BQUQsQUFBUSxRQUFRLGNBTFIsQUFLUixBQUE4Qiw0Q0FDOUIsRUFBQyxPQUFELEFBQVEsUUFBUSxjQU5SLEFBTVIsQUFBOEIsNENBQzlCLEVBQUMsT0FBRCxBQUFRLFFBQVEsY0FQUixBQU9SLEFBQThCLDhDQUM5QixFQUFDLE9BQUQsQUFBUSxRQUFRLGNBUlIsQUFRUixBQUE4Qix5Q0FDOUIsRUFBQyxPQUFELEFBQVEsUUFBUSxjQWRaLEFBQ1IsQUFJWSxBQVNSLEFBQThCO0FBYmxDLEFBQ0UsR0FGTTtXQWdCTCxBQUNNLEFBQ1A7a0JBRkMsQUFFYSxBQUNkO1VBSEMsQUFHSyxBQUNOO2NBQVUsQ0FDUixFQUFDLE9BQUQsQUFBUSxRQUFRLGNBRFIsQUFDUixBQUE4Qiw2Q0FDOUIsRUFBQyxPQUFELEFBQVEsUUFBUSxjQUZSLEFBRVIsQUFBOEIsMENBQzlCLEVBQUMsT0FBRCxBQUFRLFFBQVEsY0FIUixBQUdSLEFBQThCLHFDQUM5QixFQUFDLE9BQUQsQUFBUSxRQUFRLGNBSlIsQUFJUixBQUE4QixxQ0FDOUIsRUFBQyxPQUFELEFBQVEsWUFBWSxjQUxaLEFBS1IsQUFBa0MscURBQ2xDLEVBQUMsT0FBRCxBQUFRLFVBQVUsY0ExQmQsQUFnQkwsQUFJUyxBQU1SLEFBQWdDO0FBVmpDLEFBQ0Q7V0FXQyxBQUNNLEFBQ1A7a0JBRkMsQUFFYSxBQUNkO1VBL0JNLEFBNEJMLEFBR0s7QUFITCxBQUNEO1dBR0MsQUFDTSxBQUNQO2tCQUZDLEFBRWEsQUFDZDtVQUFNLEFBRVI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBeEZlLEFBdUNuQixBQUlZLEFBZ0NMO0FBQUEsQUFDRDtBQXJDTixBQUNFO1NBbURGLEFBQ1MsQUFDUDtjQUZGLEFBRWMsQUFDWjtnQkFIRixBQUdnQixBQUNkO1lBQVUsQ0FBQyxFQUFFLE9BQUYsQUFBUyxRQUFRLGNBQWpCLEFBQStCLGFBQWEsTUFBN0MsQUFBQyxBQUFrRCw4QkFBOEIsRUFBRSxPQUFGLEFBQVMsUUFBUSxjQUFqQixBQUErQixzQkFBc0IsTUEvRnBKLEFBQXFCLEFBMkZuQixBQUlZLEFBQWlGLEFBQTJEO0FBSnhKLEFBQ0U7O0FBT0o7QUFDQSxJQUFNLGNBQWMsS0FBSyxBQUV6Qjs7QUFGQSxBQUFrQjtBQUFBLEVBR2xCLElBQU0sWUFBTixBQUFrQjs7UUFFVCxBLGEsQUFBQTtRQUFZLEE7UUFBVSxBLFlBQUEsQTtRQUFXLEEsWUFBQSxBO1FBQVcsQSxPQUFBLEE7UUFBTSxBLFFBQUEsQTtRQUFPLEEsZUFBQSxBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rYW5nY2hhL015UHJvamVjdC9jbGluaWNNYW5hZ2VyIn0=