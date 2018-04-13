import withData from './withData'

const TITLE = '院内接口对接管理平台'

const API_SERVER = 'localhost:9151'
const PORT = '9151' // 端口

// 主功能
const MAINFUNCTION = [
  {
    title: 'api管理',
    short_name: 'apis',
    navigateName: '/apis',
    children: [
      { title: 'api列表', navigateName: '/apis', color: '#5D75A6' }
    ]
  },
  {
    title: '项目管理',
    short_name: 'projects',
    navigateName: '/projects',
    children: [
      { title: '项目列表', navigateName: '/projects', color: '#5D75A6' }
    ]
  }
]

// home 页面
const HOME_PAGE = { url: '/apis' }

// 主题颜色
const MAINCOLOR = '#2A4680'

export { API_SERVER, withData, HOME_PAGE, MAINCOLOR, PORT, TITLE, MAINFUNCTION }
