import React, { Component } from 'react'
import { MAINFUNCTION } from '../../../config'
import { theme } from '../../../components'
import Navigation from './foot_navigation'

class ConLayout extends Component {
  render () {
    const url = (this.props.url && this.props.url.pathname) || '/'
    const conList = MAINFUNCTION.filter(item => url.indexOf(item.short_name) > -1)
    const screenHeight = process.browser ? document.documentElement.clientHeight : 1000
    const appConHeight = screenHeight - 126
    return (
      <div className={'appContent'} style={{ background: '#fff' }}>
        <div className={'appContentLeft left'}>
          <Navigation url={url} data={conList[0] && conList[0].children} />
        </div>
        <div className={'right appContentRight'}>
          <div className={'appConRightCon'} style={{ minHeight: appConHeight }}>
            {this.props.children}
          </div>
        </div>
        <div className='clearfix' />
        <style jsx>{`
          .appContentLeft {
            // background: ${theme.maincolor};
            width: 9%;
            color: #000;
            text-align: center;
            height: 100%;
          }
          .appContentLeft:after {
            content: '';
            display: block;
            // background: ${theme.maincolor};
            position: fixed;
            top: 0;
            left: 0;
            bottom: 0;
            width: 9%;
            border-right:1px solid #d8d8d8
          }
          .appContentRight {
            width: 88%;
          }
          .appConRightCon {
            padding: 0.14rem;
          }
        `}</style>
      </div>
    )
  }
}

export default ConLayout
