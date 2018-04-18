import React, { Component } from 'react'
import Router from 'next/router'
import { TITLE, HOSPITAL_NAME, MAINFUNCTION } from '../../config'
import canlendarStyles from './Wrapper'
// import Link from 'next/link'
import { theme } from '../../components'
import { signout } from '../../ducks'
import { connect } from 'react-redux'
import localforage from 'localforage'
// import Navigation from './foot_navigation'
// import ConLayout from '../common/con_layout'

class RightContent extends Component {
  constructor (props) {
    super(props)
    // console.log(window,window);
    // let windowWidth = window.innerWidth;
    // this.onWindowResize.bind(this);
    this.state = {
      showLogutBtn: false
    }
  }

  // 登出
  async doSignout () {
    localforage.clear()
    Router.push('/signin')
  }

  headerUser () {
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
  //退出登录
  logout(){
    Router.push('/login')
  }
  componentDidMount() {
    // window.addEventListener('resize', this.onWindowResize.bind(this));
  }
  componentWillUnmount() {
    // window.removeEventListener('resize', this.onWindowResize.bind(this));
  }
  onWindowResize(){
    // let winWidth1 = window.innerWidth;
    // const winHeight = window.innerHeight;
    // console.log("winWidth=="+winHeight+"==="+window.outerHeight);
    // if(winHeight < window.outerHeight){
    //   winWidth1 = winWidth1-17;
    // }
    // this.setState({winWidth:winWidth1});
  }

  render () {
    // this.state.winWidth = window.innerWidth;
    // const hideRightCon = this.props.hideRightCon || false
    // const { showLogutBtn } = this.state
    const curUrl = this.props.url && this.props.url.pathname
    // const imgstylenormal = { height: '.26rem', padding: '0 .1rem 0 .3rem', marginTop: '.16rem' }
    // console.log('curUrl =========', curUrl)
    const url = (this.props.url && this.props.url.pathname) || '/'
    const conList = MAINFUNCTION.filter(item => url.indexOf(item.short_name) > -1)
    // const winWidth = this.state.winWidth;
    // console.log("winWidth"+winWidth);
    // window.re();
    return (
      <div className={'rightContent'} style={{width:'91%'}}>
        <div className={'right_nav_menu'}>
          <ul className='left'>
           {MAINFUNCTION.map((item, iKey) => {
              return (
                <li
                  className={curUrl.indexOf(item.short_name) > -1 ? 'selLi' : ''}
                  onClick={() => {
                    Router.push(item.navigateName)
                  }}
                >
                  {item.title}
                  <img src={'/static/home/u141.png'} />
                </li>
              )
            })}
            <div className='clearfix' />
          </ul>
        </div>
        <div className={'contentBox'}>
          {this.props.children}
        </div>
        <style jsx>{`
          .rightContent{
            float:left;
            position: absolute;
            left: 171px;
            // background: #909090;
          }
          .right_nav_menu{
            float:left;
            width:100%;
            border-bottom: 1px solid #d8d8d8;
          }
          .right_nav_menu ul{
          

          }
          .right_nav_menu ul li{
            float: left;
            // padding: 0 3px;
            line-height: 90px;
            width: 76px;
            margin-left: 15px;
            cursor: pointer;
            position: relative;
            text-align:center;
            height: 78px;
          }
          .right_nav_menu ul li img{
            position:absolute;
            bottom:-2px;
            left:0;
            display:none;
          }
          .right_nav_menu ul li:hover img,
          .right_nav_menu ul li.selLi img{
            display:block;
          }
          .contentBox{
            float: left;
            width: 100%;
          }
        `}</style>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    // token: state.user.data.token,
    // adminId: state.user.data.id,
    // loading: state.user.loading,
    // error: state.user.error
  }
}

export default connect(mapStateToProps, { signout })(RightContent)
