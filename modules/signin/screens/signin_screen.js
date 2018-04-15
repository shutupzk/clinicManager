import React, { Component } from 'react'
import Router from 'next/router'
import { TITLE, HOME_PAGE } from '../../../config'
import localforage from 'localforage'
// import { showPrompt } from '../../../ducks'
import { connect } from 'react-redux'
import { styles } from '../../../components/styles'
import { theme } from '../../../components'

class SigninScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username: 'admin',
      password: '123456'
    }
  }
  async submit () {
    const username = this.state.username
    const password = this.state.password
    if (!username) {
      alert('请输入账号');
      // this.props.showPrompt({ text: '请输入账号' })
      return
    }
    if (!password) {
      alert('请输入密码');
      // this.props.showPrompt({ text: '请输入密码' })
      return
    }

    if (username === 'admin' && password === '123456') {
      localforage.setItem('token', 'token')
      localforage.setItem('adminId', 'adminId')
      localforage.setItem('username', username)
      localforage.setItem('password', password)
      // Router.push('/')
      // Router.push(HOME_PAGE.url)
      Router.push('/home')
    } else {
      alert('用户名或密码错误');
      // this.props.showPrompt({ text: '用户名或密码错误' })
    }
  }
  render () {
    //欢迎使用  
    return (
      <div className={'loginPage'}>
        <div className={'loginCon'}>
          <div className={'loginTop'}>
            <img src={'/static/login/u49.png'} />
            <span>{`${TITLE}`}</span>
            {/* <h3 style={{ textAlign: 'center', fontSize: 22, color: theme.mainfontcolor, paddingTop: 50, margin: 0 }}>{`${TITLE}`}</h3>  */}
          </div>
          <img style={{
              float:'left',
              margin:'30px 0 0 40px'
            }} src={'/static/login/u35.png'} />
          <section
            style={{
              background: 'none',
              height: 'auto',
              paddingTop: 30,
              float:'left',
              marginLeft:'179px',
              paddingBottom: 100
            }}
          >
            <span className={'loginTxt'}>登录</span>
            <dl>
              <dt>用户名</dt>
              <dd>
                <input type='text' placeholder={'请输入您的手机号'} onChange={e => this.setState({ username: e.target.value })} value={this.state.username} />
              </dd>
            </dl>
            <dl>
              <dt>密码</dt>
              <dd>
                <input placeholder={'请输入密码'} type='password' onChange={e => this.setState({ password: e.target.value })} value={this.state.password} />
                {/* <a className='right forgetpass flex tb-flex'
                  onClick={() => { Router.push('/profile/forgot_password') }}>
                  <img style={{width: 16, paddingRight: 3}} src={`/static/${HOSPITALINFO.hospital_short_name}/forgetPass.png`} />
                  <span className=''>忘记密码?</span>
                </a> */}
              </dd>
            </dl>
            <button className='loginBtn' onClick={() => this.submit(this.props)}>
              登录
            </button>
          </section>
          
        </div>
        <style jsx>{`
          .loginTxt{
            font-family: 'PingFangSC-Semibold','PingFang SC Semibold','PingFang SC';
            font-weight: 650;
            font-style: normal;
            font-size: 18px;
            text-align: left;
            float: left;
            line-height: 51px;
            color: #333333;
            width: 100%;
          }
          .loginTop{
            padding: 10px;
            height: 51px;
            display: block;
            float: left;
            width: 90%;
          }
          .loginTop img{
            float: left;
          }
          .loginTop span{
            font-family: 'PingFangSC-Semibold', 'PingFang SC Semibold', 'PingFang SC';
            font-weight: 650;
            font-style: normal;
            font-size: 32px;
            text-align: left;
            float: left;
            line-height:51px;
            margin-left:10px;
            color: #333333;
          }
          .loginPage {
            background: url('/static/icons/loginBack.png') center no-repeat;
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
          }
          .loginCon {
            background: #ffffff;
            box-shadow: 0px 10px 28px 0px rgba(0, 0, 0, 0.3);
            border-radius: 6px;
            // width: 30%;
            // height: auto;
            width:1000px;
            height:665px;
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
          input{
            left: 0px;
            top: 0px;
            width: 326px;
            height: 49px;
            font-family: 'ArialMT', 'Arial';
            font-weight: 400;
            font-style: normal;
            font-size: 13px;
            text-decoration: none;
            color: #000000;
            text-align: left;
            border: 1px solid #909090;
          }
          .forgetpass {
            color: ${theme.maincolor};
            font-size: ${theme.nfontsize};
            padding-left: 26px;
          }
          .loginBtn{
            border-width: 0px;
            // position: absolute;
            left: 0px;
            top: 0px;
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
            color:#ffffff;
            padding:0;
            margin: 30px auto;
            display: table;
          }

        `}</style>
        {styles()}
      </div>
    )
  }
}

export default connect(null)(SigninScreen)
