import React, { Component } from 'react'
import Router from 'next/router'
import { MAINFUNCTION } from '../../config'
// import canlendarStyles from './Wrapper'
// import Link from 'next/link'
import { theme } from '../../components'
import { signout } from '../../ducks'
import { connect } from 'react-redux'
// import localforage from 'localforage'
// import Navigation from './foot_navigation'
// import ConLayout from '../common/con_layout'

class RightContent extends Component {
  constructor(props) {
    super(props)
    // console.log(window,window);
    // let windowWidth = window.innerWidth;
    // this.onWindowResize.bind(this);
    this.state = {
      showLogutBtn: false,
      windowWidth: 1920,
      windowHeight: 1080
    }
  }

  // 登出
  async doSignout() {
    // localforage.clear()
    let error = await this.props.signout()
    if (error) return alert('注销失败：' + error)
    Router.push('/login')
  }

  headerUser() {
    return (
      <div className={'headerUser left'}>
        <div
          className='flex tb-flex'
          onClick={() => {
            const prevshowLogutBtn = this.state.showLogutBtn
            this.setState({
              showLogutBtn: !prevshowLogutBtn
            })
          }}
        >
          <img src='/static/icons/doctorheader.png' style={{ height: '.14rem' }} />
          <span className='left'>{'管理员'}</span>
          <article className='sanjiao headerUserBack' style={{ borderTopColor: theme.nfontcolor }} />
        </div>
        <section>
          <article
            onClick={() => {
              this.doSignout()
            }}
          >
            退出
          </article>
        </section>
      </div>
    )
  }
  // 退出登录
  // logout() {
  //   Router.push('/login')
  // }
  componentWillMount() {}
  componentDidMount() {
    this.setState({ windowWidth: window.innerWidth, windowHeight: window.innerHeight })
    window.addEventListener('resize', this.onWindowResize.bind(this))
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.onWindowResize.bind(this))
  }
  onWindowResize() {
    let winWidth1 = window.innerWidth
    this.setState({ windowWidth: winWidth1, windowHeight: window.innerHeight })
  }

  render() {
    // this.state.winWidth = window.innerWidth;
    // const hideRightCon = this.props.hideRightCon || false
    // const { showLogutBtn } = this.state
    const curUrl = this.props.url && this.props.url.pathname
    // const imgstylenormal = { height: '.26rem', padding: '0 .1rem 0 .3rem', marginTop: '.16rem' }
    // console.log('curUrl =========', curUrl)
    // const url = (this.props.url && this.props.url.pathname) || '/'
    // const conList = MAINFUNCTION.filter(item => url.indexOf(item.short_name) > -1)
    // const winWidth = this.state.winWidth;
    // console.log("winWidth"+winWidth);
    // window.re();
    // console.log("curUrl",this.props.url.pathname+"==="+curUrl);
    return (
      <div className={'rightContent'} style={{ width: this.state.windowWidth - 256 }}>
        <div className={'right_nav_menu'}>
          <ul className='left'>
            {MAINFUNCTION.map((item, iKey) => {
              return (
                <li
                  key={item.navigateName}
                  className={curUrl.indexOf(item.short_name) > -1 ? 'selLi' : ''}
                  onClick={() => {
                    Router.push(item.navigateName)
                  }}
                >
                  {item.title}
                  {/* <img src={'/static/home/u141.png'} /> */}
                </li>
              )
            })}
            <div className='clearfix' />
          </ul>
          {/* <div
            style={{ float: 'right', cursor: 'pointer' }}
            onClick={() => {
              this.doSignout()
            }}
					>
						注销
					</div> */}
          <div className={'rightUserInfo'}>
            <span>
              <img src='/static/login/u49.png' />
              <a>你好，{this.props.name}</a>
            </span>
            <span>消息中心</span>
            <span
              onClick={() => {
                this.doSignout()
              }}
            >
              退出
            </span>
          </div>
        </div>
        <div className={'contentBox'} style={{ height: this.state.windowHeight - 64 }}>
          {this.props.children}
        </div>
        <style jsx='true'>{`
					.rightContent {
						// float: left;
						position: absolute;
						left: 256px;
						// background: #909090;
						height: 100%;
						top: 0;
						overflow: hidden;
						background-color: #f4f7f8;
					}
					.right_nav_menu {
						float: left;
						width: 100%;
						height: 64px;
						background:rgba(255,255,255,1);
						box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.12);
						min-width:1000px;
					}
					.right_nav_menu ul {
					}
					.right_nav_menu ul li {
						float: left;
						line-height: 64px;
						width: 76px;
						margin-left: 15px;
						cursor: pointer;
						position: relative;
						text-align: center;
						height: 62px;
						#343434
					}
					.right_nav_menu ul li.selLi,
					.right_nav_menu ul li:hover{
						color:#000000;
						border-bottom:2px solid #30A8A4;
					}
					.rightUserInfo{
						float:right;
						width:350px;
						height:64px;
						// background:#909090;
					}
					.rightUserInfo>span{
						float:left;
						height:26px;
						line-height:26px;
						margin-top: 20px;
					}
					.rightUserInfo>span:nth-child(1) img{
						width:20px;
						height:20px;
						border-radius:100%;
						margin:3px;
						float: left;
					}
					.rightUserInfo>span:nth-child(1) a{
						height: 26px;
						line-height: 26px;
						float: left;
						margin-left: 10px;
					}
					.rightUserInfo>span:nth-child(2){
						width:70px;
						height:26px; 
						background:rgba(42,205,200,1);
						border-radius: 15px ; 
						color:#FFFFFF;
						font-size:12px;
						line-height:26px;
						display: block;
						text-align: center;
						float:left;
						margin-left: 20px;
						cursor: pointer;
					}
					.rightUserInfo>span:nth-child(3){
						width:70px;
						height:26px; 
						border-radius: 15px ; 
						border:1px solid #31B0B3;
						display: block;
						text-align: center;
						line-height:26px;
						float:left;
						margin-left: 10px;
						color:#31B0B3;
						cursor: pointer;
					}

					.contentBox {
						float: left;
						width: 100%;
						overflow:auto;
					}
				`}</style>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    // token: state.user.data.token,
    name: state.user.data.name
    // loading: state.user.loading,
    // error: state.user.error
  }
}

export default connect(mapStateToProps, { signout })(RightContent)
