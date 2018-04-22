import React, { Component } from 'react'
import Router from 'next/router'
// import { TITLE, HOME_PAGE } from '../../../config'
// import { showPrompt } from '../../../ducks'
import { connect } from 'react-redux'
import { styles } from '../../../components/styles'
import { theme } from '../../../components'
import { signin } from '../../../ducks'

class SigninScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: 'admin',
      password: '123456'
    }
  }
  async submit() {
    const username = this.state.username
    const password = this.state.password
    if (!username) {
      alert('请输入账号')
      // this.props.showPrompt({ text: '请输入账号' })
      return
    }
    if (!password) {
      alert('请输入密码')
      // this.props.showPrompt({ text: '请输入密码' })
      return
    }

    let error = await this.props.signin({ username, password })
    if (error) return alert('登录失败：' + error)
    Router.push('/treatment')
  }
  render() {
    return (
      <div className={'loginPage'}>
        <section>
          <span className={'loginTxt'}>登录系统</span>
          <ul>
            <li>
              <input type='text' placeholder={'请输入您的手机号'} onChange={e => this.setState({ username: e.target.value })} value={this.state.username} />
            </li>
            <li>
              <input placeholder={'请输入密码'} type='password' onChange={e => this.setState({ password: e.target.value })} value={this.state.password} />
            </li>
          </ul>
          <button className='loginBtn' onClick={() => this.submit(this.props)}>
            登录
          </button>
        </section>
        <style jsx>{`
          section {
            background: #ffffff;
            height: auto;
            border: 1px solid #d8d8d8;
            border-radius: 10px;
            position: absolute;
            top: 30%;
            right: 20%;
            box-shadow: 0 0 10px #bcbcbc;
            width: 310px;
            height: 380px;
          }
          ul {
            width: 250px;
            float: left;
            margin: 10px 30px;
          }
          ul li {
            float: left;
            height: 70px;
          }
          .loginTxt {
            font-size: 25px;
            text-align: left;
            float: left;
            line-height: 51px;
            color: #333333;
            width: 100%;
            height: 80px;
            line-height: 80px;
            text-indent: 30px;
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
            background: url('/static/login/u35.png') top center no-repeat;
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
            // box-shadow: 0px 10px 28px 0px rgba(0, 0, 0, 0.3);
            border-radius: 6px;
            // width: 30%;
            // height: auto;
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
          input {
            left: 0px;
            top: 0px;
            width: 250px;
            height: 40px;
            font-family: 'ArialMT', 'Arial';
            font-weight: 400;
            font-style: normal;
            font-size: 13px;
            text-decoration: none;
            color: #000000;
            text-align: left;
            // border: 1px solid #909090;
          }
          .forgetpass {
            color: ${theme.maincolor};
            font-size: ${theme.nfontsize};
            padding-left: 26px;
          }
          .loginBtn {
            width: 140px;
            height: 40px;
            background: inherit;
            background-color: rgba(22, 155, 213, 1);
            border: none;
            border-radius: 5px;
            -moz-box-shadow: none;
            -webkit-box-shadow: none;
            box-shadow: none;
            font-family: 'PingFangSC-Regular', 'PingFang SC';
            font-weight: 400;
            font-style: normal;
            color: #ffffff;
            padding: 0;
            margin: 20px 85px;
          }
        `}</style>
        {styles()}
      </div>
    )
  }
}

export default connect(null, { signin })(SigninScreen)
