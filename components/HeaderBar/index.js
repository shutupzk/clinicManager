import React, { Component } from 'react'
import Router from 'next/router'
import { TITLE, MAINFUNCTION } from '../../config'
import canlendarStyles from './Wrapper'
// import Link from 'next/link'
import { theme } from '../../components'
import { signout } from '../../ducks'
import { connect } from 'react-redux'
import localforage from 'localforage'

class HeaderBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showLogutBtn: false
    }
  }

  // 登出
  async doSignout() {
    // let error = await this.props.signout()
    // console.log(error)
    try {
      localforage.clear()
      Router.push('/signin')
    } catch (e) {
      console.log(e)
    }
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
          {/* <Link href='/profile/update_password'>
            <article>修改密码</article>
          </Link> */}
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
  logout() {
    Router.push('/login')
  }

  render() {
    let { clinic_name } = this.props
    // const hideRightCon = this.props.hideRightCon || false
    // const { showLogutBtn } = this.state
    const curUrl = this.props.url && this.props.url.pathname
    // const imgstylenormal = { height: '.26rem', padding: '0 .1rem 0 .3rem', marginTop: '.16rem' }
    console.log('curUrl =========', curUrl)
    return (
      <div className={'headerBar'}>
        <div className={'headerTop'}>
          <span style={{ marginRight: 55 }}>消息中心</span>
          <span onClick={() => this.logout()}>退出</span>
          <span style={{ marginRight: 25 }}>您好，{'管理员'}</span>
        </div>
        {/* <div className={'headerNav'}>
          <div className={'left_title'}>
            <img src={'/static/login/u49.png'} />
            <span className={'left_title_txt'}>{`${TITLE}`}</span>
            <span className={'left_title_addr'}>深圳市龙华店</span>
          </div>
          <div className={'right_nav_menu'}>
            <ul>
              <li className={'selLi'}>
                就诊流程
                <img src={'/static/home/u141.png'} />
              </li>
              <li>诊所管理<img src={'/static/home/u141.png'} /></li>
              <li>财务管理<img src={'/static/home/u141.png'} /></li>
              <li>设置管理<img src={'/static/home/u141.png'} /></li>
              <li>平台管理<img src={'/static/home/u141.png'} /></li>
            </ul>
          </div>
        </div> */}
        <div className={'headerNav'}>
          <div className={'left_title'}>
            <img src={'/static/login/u49.png'} />
            <span className={'left_title_txt'}>{`${TITLE}`}</span>
            <span className={'left_title_addr'}>{clinic_name}</span>
          </div>
          <div className={'right_nav_menu'}>
            <ul className='left'>
              {MAINFUNCTION.map((item, iKey) => {
                // return (
                //   <li
                //     className={curUrl.indexOf(item.short_name) > -1 ? 'selLi' : ''}
                //     onClick={() => {
                //       Router.push(item.navigateName)
                //     }}
                //     key={iKey}
                //   >
                //     {item.title}
                //   </li>
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
        </div>
        {/* <img style={HOSPITALINFO.headerImg && HOSPITALINFO.headerImg.imgstyle ? HOSPITALINFO.headerImg.imgstyle : imgstylenormal} src={HOSPITALINFO.hospital_loginlogo} className='left' /> */}
        {/* <article className="left" style={{ marginLeft: '20px', fontSize: 18 }}>
          {HOSPITAL_NAME}管理后台
        </article>
        {hideRightCon ? (
          ''
        ) : (
          <section className="headerBarRight right">
            <ul className="left">
              {MAINFUNCTION.map((item, iKey) => {
                return (
                  <li
                    className={curUrl.indexOf(item.short_name) > -1 ? 'left curLi' : 'left'}
                    onClick={() => {
                      Router.push(item.navigateName)
                    }}
                    key={iKey}
                  >
                    {item.title}
                  </li>
                )
              })}
              <div className="clearfix" />
            </ul>
            {this.headerUser()}
            <div className="clearfix" />
          </section>
        )} */}
        {canlendarStyles()}
        <div className='clearfix' />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    clinic_name: state.user.data.clinic_name
    // adminId: state.user.data.id,
    // loading: state.user.loading,
    // error: state.user.error
  }
}

export default connect(
  mapStateToProps,
  { signout }
)(HeaderBar)
