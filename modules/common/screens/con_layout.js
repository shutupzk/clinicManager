import React, { Component } from 'react'
import {TITLE, HOSPITAL_NAME, MAINFUNCTION } from '../../../config'
import { theme } from '../../../components'
import Navigation from './foot_navigation'
// import { TITLE, HOSPITAL_NAME} from '../../../config'

class ConLayout extends Component {
  render () {
    const url = (this.props.url && this.props.url.pathname) || '/'
    const conList = MAINFUNCTION.filter(item => url.indexOf(item.short_name) > -1)
    const screenHeight = process.browser ? document.documentElement.clientHeight : 1000
    const appConHeight = screenHeight - 126
    return (
      //className={'appContent'} style={{ background: '#fff',minWidth: 1000 }}
      <div className={'leftBar'}>
        <div className={'logoBox'}>
          <img src={'/static/login/u49.png'} />
          <div className={'logoTxt'}>
            <span>{`${TITLE}`}</span>
            <span>深圳市龙华店</span>
          </div>
        </div>
        <div className={'appContentLeft left'}>
          <Navigation url={url} data={conList[0] && conList[0].children} />
        </div>
        {/* <div className={'right appContentRight'}>
          <div className={'appConRightCon'} style={{ minHeight: appConHeight }}>
            {this.props.children}
          </div>
        </div> */}
        <div className='clearfix' />
        <style jsx>{`
          .leftBar{
            width: 171px;
            float: left;
          }
          .appConRightCon{
            overflow: auto;
          }
          .appContentLeft {
            // background: ${theme.maincolor};
            width: 171px;
            color: #000;
            text-align: center;
            height: 100%;
          }
          .appContentLeft:after {
            content: '';
            display: block;
            // background: ${theme.maincolor};
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            width: 171px;
            border-right:1px solid #d8d8d8
          }
          .appContentRight {
            // max-width: 91%;
            // min-width: 800px;
            width:auto;
            overflow:auto;
          }
          .appConRightCon {
            // padding: 0.14rem;
          }
        `}</style>
      </div>
    )
  }
}

export default ConLayout
