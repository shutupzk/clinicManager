import React, { Component } from 'react'
import Router from 'next/router'
// import { TITLE, HOME_PAGE } from '../../../config'
// import { showPrompt } from '../../../ducks'
import { connect } from 'react-redux'
import { styles } from '../../../components/styles'
import { theme } from '../../../components'
import {
  signin,
  FunMenusByPersonnel,
  saveUserMenu,
  queryClinicHassetPermissions,
  AdminLogin,
  MenuGetByAdminID
} from '../../../ducks'
import { formatMenuList, getLastMenu } from '../../../utils'

class SigninScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      loginType: 1
    }
  }
  async submit() {
    const username = this.state.username
    const password = this.state.password
    const {loginType} = this.state
    if (!username) {
      alert('请输入账号')
      return
    }
    if (!password) {
      alert('请输入密码')
      return
    }
    let data
    if (loginType === 1) {
      data = await this.props.signin({ username, password })
    } else {
      data = await this.props.AdminLogin({ username, password })
    }
    console.log('data=====', data)
    if (data.code !== '200') {
      return alert('登录失败：' + data.msg)
    } else {
      let user = data.data
      if (loginType === 1) {
        this.FunMenusByPersonnel({ user })
      } else {
        this.MenuGetByAdminID({ user })
      }
    }
  }
  async FunMenusByPersonnel({ user }) {
    const { FunMenusByPersonnel, saveUserMenu } = this.props
    let data = await FunMenusByPersonnel({ id: user.id })
    if (!data || data.length === 0) return alert('登录失败：没有权限')
    let user_menu = formatMenuList(null, JSON.parse(JSON.stringify(data)))
    saveUserMenu({ user_menu })
    let menu = getLastMenu(user_menu[0])
    Router.push(menu.menu_url)
  }
  async MenuGetByAdminID({ user }) {
    const { MenuGetByAdminID, saveUserMenu } = this.props
    let data = await MenuGetByAdminID({ admin_id: user.id })
    if (!data || data.length === 0) return alert('登录失败：没有权限')
    let user_menu = formatMenuList(null, JSON.parse(JSON.stringify(data)))
    saveUserMenu({ user_menu })
    let menu = getLastMenu(user_menu[0])
    Router.push(menu.menu_url)
  }

  render() {
    const {loginType} = this.state
    return (
      <div className={'loginPage'}>
        <div className={'loginLogo'} />
        <div className={'login_border'} />
        <div className={'login_welcome'}>
          <a>欢迎使用</a>
          <a>海王星辰管家平台</a>
        </div>
        <section>
          <span className={'loginTxt'}>登录系统</span>
          <ul>
            <li>
              <input type='text' placeholder={'请输入您的手机号'} onChange={e => this.setState({ username: e.target.value })} value={this.state.username} />
            </li>
            <li>
              <input placeholder={'请输入密码'} type='password' onChange={e => this.setState({ password: e.target.value })} value={this.state.password} />
            </li>
            <li style={{height: 'auto'}}>
              <label>
                <input
                  type={'radio'}
                  name={'loginType'}
                  checked={loginType === 1}
                  onChange={e => {
                    this.setState({loginType: 1})
                  }}
                />诊所用户
              </label>
              <label style={{marginLeft: '20px'}}>
                <input
                  type={'radio'}
                  name={'loginType'}
                  checked={loginType === 2}
                  onChange={e => {
                    this.setState({loginType: 2})
                  }}
                />管理用户
              </label>
            </li>
          </ul>
          <button className='loginBtn' onClick={() => this.submit(this.props)}>
            登录
          </button>
        </section>
        <style jsx='true'>{`
          .loginLogo {
            background: url('/static/login/login_logo.png') top center no-repeat;
            width: 172px;
            height: 66px;
            top: 79px;
            left: 115px;
            position: absolute;
          }
          .login_border {
            position: absolute;
            width: 10px;
            height: 102px;
            background: rgba(255, 255, 255, 1);
            border-radius: 5px;
            top: 285px;
            left: 256px;
          }
          .login_welcome {
            width: 400px;
            height: 120px;
            font-size: 50px;
            font-family: PingFangTC-Semibold;
            color: rgba(255, 255, 255, 1);
            line-height: 60px;
            position: absolute;
            top: 276px;
            left: 287px;
          }
          .login_welcome a {
            float: left;
            width: 100%;
            color: #fff;
          }
          section {
            border: 1px solid #d8d8d8;
            position: absolute;
            top: 30%;
            right: 120px;
            width: 420px;
            height: 440px;
            background: rgba(255, 255, 255, 1);
            box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.13);
            border-radius: 13px;
          }
          ul {
            width: 284px;
            height: auto;
            float: left;
            margin: 25px 68px;
            // background: #909090;
          }
          ul li {
            float: left;
            height: 72px;
          }
          .loginTxt {
            text-align: left;
            float: left;
            color: #333333;
            margin: 42px 60px;
            font-size: 28px;
            font-family: MicrosoftYaHei;
            color: rgba(51, 51, 51, 1);
          }
          .loginTop {
            padding: 10px;
            height: 51px;
            display: block;
            float: left;
            width: 90%;
          }
          .loginTop img {
            float: left;
          }
          .loginTop span {
            font-family: 'PingFangSC-Semibold', 'PingFang SC Semibold', 'PingFang SC';
            font-weight: 650;
            font-style: normal;
            font-size: 32px;
            text-align: left;
            float: left;
            line-height: 51px;
            margin-left: 10px;
            color: #333333;
          }
          .loginPage {
            background: url('/static/login/login_bg.png') top center no-repeat;
            // background:#ffffff;
            position: fixed;
            background-size: 100% 60%;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
          }
          .loginCon {
            background: #ffffff;
            border-radius: 6px;
            width: 1000px;
            height: 665px;
            margin: 5% auto 0;
            position: relative;
            min-width: 380px;
          }
          dl {
            // padding: 0 50px;
          }
          dt {
            font-size: 14px;
            padding-top: 16px;
            line-height: 46px;
            color: ${theme.mainfontcolor};
          }
          dd {
            border-bottom: 1px solid ${theme.bordercolor};
          }
          input {
            color: ${theme.mainfontcolor};
            padding: 0;
            margin: 0;
            border: none;
            font-size: ${theme.mainfontsize};
            line-height: 0.24rem;
          }
          input[type='password'],
          input[type='text'] {
            left: 0px;
            top: 0px;
            width: 284px;
            height: 44px;
            font-family: 'ArialMT', 'Arial';
            font-weight: 400;
            font-style: normal;
            font-size: 14px;
            text-decoration: none;
            color: #000000;
            text-align: left;
            border-bottom: 1px solid rgba(213, 213, 213, 1);
            text-indent: 10px;
          }
          .forgetpass {
            color: ${theme.maincolor};
            font-size: ${theme.nfontsize};
            padding-left: 26px;
          }
          .loginBtn {
            width: 286px;
            height: 50px;
            background: rgba(42, 205, 200, 1);
            border: none;
            border-radius: 25px;
            font-size: 16px;
            font-family: MicrosoftYaHei-Bold;
            color: rgba(255, 255, 255, 1);
            margin: 0 auto;
            display: table;
            cursor: pointer;
          }
        `}</style>
        {styles()}
      </div>
    )
  }
}

export default connect(
  null,
  {
    signin,
    FunMenusByPersonnel,
    saveUserMenu,
    queryClinicHassetPermissions,
    AdminLogin,
    MenuGetByAdminID
  }
)(SigninScreen)
