import withData from './withData'

const TITLE = '海王星辰管家平台'

// const API_SERVER = 'http://47.104.206.95:8080' //
const API_SERVER = 'https://szapi.med.gzhc365.com/9001'
// const API_SERVER = 'http://localhost:8080' //
const PORT = 9000 // 端口

// 主功能
const MAINFUNCTION = [
  {
    title: '就诊流程',
    short_name: 'treatment',
    navigateName: '/treatment/registration',
    children: [
			{ title: '就诊人登记', navigateName: '/treatment/registration', icon: '/static/icons/patient.svg' },
			{ title: '预约分诊', navigateName: '/treatment/triage/triage', icon: '/static/icons/triage.svg' },
			{ title: '医生接诊', navigateName: '/treatment/admission', icon: '/static/icons/admission.svg' },
			{ title: '收费管理', navigateName: '/treatment/charge', icon: '/static/icons/charge.svg' },
			{ title: '门诊发药', navigateName: '/treatment/drugdelivery', icon: '/static/icons/drugdelivery.svg' },
      { title: '检查', navigateName: '/treatment/exam', icon: '/static/icons/exam.svg' },
      
			{ title: '检验', navigateName: '/treatment/inspect', icon: '/static/icons/inspect.svg' },
			{ title: '治疗', navigateName: '/treatment/treat', icon: '/static/icons/treat.svg' },
			{ title: '药品零售', navigateName: '/treatment/drugretail', icon: '/static/icons/drugretail.svg' }
    ]
  },
  {
    title: '诊所管理',
    short_name: 'clinic',
    navigateName: '/clinic',
    children: [
			{ title: '科室管理', navigateName: '/clinic', icon: '/static/icons/department.svg' },
			{ title: '医生管理', navigateName: '/clinic/doctor', icon: '/static/icons/doctor.svg' },
			{ title: '排班管理', navigateName: '/clinic/schedule', icon: '/static/icons/schedule.svg' },
			{ title: '药房管理', navigateName: '/clinic/pharmacy', icon: '/static/icons/pharmacy.svg' },
			{ title: '耗材管理', navigateName: '/clinic/consumable', icon: '/static/icons/consumable.svg' },
			{ title: '患者管理', navigateName: '/clinic/patient', icon: '/static/icons/patient2.svg' }
    ]
  },
  {
    title: '财务管理',
    short_name: 'finance',
    navigateName: '/finance',
    children: [
      { title: '费用报表', navigateName: '/finance', icon: '/static/icons/expenseReport.svg' },
      { title: '医用报表', navigateName: '/finance/template', icon: '/static/icons/medicalReport.svg' },
      { title: '分析类报表', navigateName: '/finance/analysis', icon: '/static/icons/medicalReport.svg' },
      { title: '进销存统计', navigateName: '/finance/stock', icon: '/static/icons/medicalReport.svg' }
    ]
  },
  {
    title: '设置管理',
    short_name: 'setting',
    navigateName: '/setting/chargeItemSetting/wMedicinePrescription',
    children: [
      {
        title: '收费项目设置',
        navigateName: '/setting/chargeItemSetting/wMedicinePrescription',
        icon: '/static/icons/charge2.svg',
        children: [
          {title: '西/成药处方', navigateName: '/setting/chargeItemSetting/wMedicinePrescription'},
          {title: '中药处方', navigateName: '/setting/chargeItemSetting/cMedicinePrescription'},
          {title: '检验医嘱', navigateName: '/setting/chargeItemSetting/inspectionPhysician'},
          {title: '检验项目', navigateName: '/setting/chargeItemSetting/testItems'},
          {title: '检查医嘱', navigateName: '/setting/chargeItemSetting/checkAdvice'},
          {title: '治疗医嘱', navigateName: '/setting/chargeItemSetting/treatDoctor'},
          {title: '材料费用', navigateName: '/setting/chargeItemSetting/meterialCosts'},
          {title: '其他费用', navigateName: '/setting/chargeItemSetting/otherFee'},
          {title: '诊疗项目', navigateName: '/setting/chargeItemSetting/medicalTreatmentItems'}
        ]
      }, {
        title: '模板设置',
        navigateName: '/setting/template/medicalRecordTemplate',
        icon: '/static/icons/template.svg',
        children: [
          {title: '病历模板', navigateName: '/setting/template/medicalRecordTemplate'},
          {title: '检验模板', navigateName: '/setting/template/inspectionTemplate'},
          {title: '检查模板', navigateName: '/setting/template/checkTemplate'},
          {title: '治疗模板', navigateName: '/setting/template/treatTemplate'},
          {title: '西/成药处方模板', navigateName: '/setting/template/wMedicinePrescriptionTemplate'},
          {title: '中药处方模板', navigateName: '/setting/template/cMedicinePrescriptionTemplate'}
        ]
      }, {
        title: '权限分组',
        navigateName: '/setting/permissionGroup',
        icon: '/static/icons/permissionGroup.svg'
      }, {
        title: '用户权限',
        navigateName: '/setting/userRights',
        icon: '/static/icons/userRights.svg'
      }
      // , {
      //   title: '会员规则管理',
      //   navigateName: '/setting/membershipRules',
      //   icon: '/static/icons/membershipRules.svg'
      // }, {
      //   title: '供应商管理',
      //   navigateName: '/setting/supplier',
      //   icon: '/static/icons/supplier.svg'
      // }
    ]
  },
  {
    title: '平台管理',
    short_name: 'platform',
    navigateName: '/platform',
    children: [
      { title: '诊所管理', navigateName: '/platform', icon: '/static/icons/clinic.svg' },
      { title: '业务管理', navigateName: '/platform/business', icon: '/static/icons/business.svg' }]
  }
]

// home 页面
const HOME_PAGE = { url: '/apis' }

// 主题颜色
const MAINCOLOR = '#2A4680'

export { API_SERVER, withData, HOME_PAGE, MAINCOLOR, PORT, TITLE, MAINFUNCTION }
