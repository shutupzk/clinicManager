import withData from './withData'

const TITLE = '诊小二管家平台'

const API_SERVER = 'http://47.104.206.95:8080'//'http://localhost:8080'
const PORT = '9151' // 端口

// 主功能
const MAINFUNCTION = [
  {
    title: '就诊流程',
    short_name: 'treatment',
    navigateName: '/treatment',
    children: [
      { title: '就诊人登记', navigateName: '/treatment' },
      { title: '预约分诊', navigateName: '/treatment/triage' },
      { title: '医生接诊', navigateName: '/treatment/admission' },
      { title: '收费管理', navigateName: '/treatment/charge' },
      { title: '门诊发药', navigateName: '/treatment/drugdelivery' },
      { title: '检查', navigateName: '/treatment/exam' },
      { title: '检验', navigateName: '/treatment/inspect' },
      { title: '治疗', navigateName: '/treatment/treat' },
      { title: '药品零售', navigateName: '/treatment/drugretail' }
    ]
  },
  {
    title: '诊所管理',
    short_name: 'clinic',
    navigateName: '/clinic',
    children: [
      { title: '科室管理', navigateName: '/clinic' },
      { title: '医生管理', navigateName: '/clinic/doctor' },
      { title: '排班管理', navigateName: '/clinic/schedule' },
      { title: '药房管理', navigateName: '/clinic/pharmacy' },
      { title: '耗材管理', navigateName: '/clinic/consumable' },
      { title: '患者管理', navigateName: '/clinic/patient' }
    ]
  },
  {
    title: '财务管理',
    short_name: 'finance',
    navigateName: '/finance',
    children: []
  },
  {
    title: '设置管理',
    short_name: 'setting',
    navigateName: '/setting',
    children: [
      { title: '收费项目设置', navigateName: '/setting' },
      { title: '模板设置', navigateName: '/setting/template' },
      { title: '权限分组', navigateName: '/setting/permissionGroup' },
      { title: '用户权限', navigateName: '/setting/userRights' },
      { title: '会员规则管理', navigateName: '/setting/membershipRules' },
      { title: '供应商管理', navigateName: '/setting/supplier' }
    ]
  },
  {
    title: '平台管理',
    short_name: 'platform',
    navigateName: '/platform',
    children: [
      { title: '诊所管理', navigateName: '/platform' },
      { title: '业务管理', navigateName: '/platform/business' }
    ]
  }
]

// home 页面
const HOME_PAGE = { url: '/apis' }

// 主题颜色
const MAINCOLOR = '#2A4680'

export { API_SERVER, withData, HOME_PAGE, MAINCOLOR, PORT, TITLE, MAINFUNCTION }
