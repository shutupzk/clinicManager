import withData from './withData'

const TITLE = '诊小二管家平台'

const API_SERVER = 'localhost:9151'
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
    children: []
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
    children: []
  },
  {
    title: '平台管理',
    short_name: 'platform',
    navigateName: '/platform',
    children: []
  }
]

// home 页面
const HOME_PAGE = { url: '/apis' }

// 主题颜色
const MAINCOLOR = '#2A4680'

export { API_SERVER, withData, HOME_PAGE, MAINCOLOR, PORT, TITLE, MAINFUNCTION }
