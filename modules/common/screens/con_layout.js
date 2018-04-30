import React, { Component } from 'react'
import { TITLE, MAINFUNCTION } from '../../../config'
import { theme } from '../../../components'
import Navigation from './foot_navigation'
// import { TITLE, HOSPITAL_NAME} from '../../../config'

class ConLayout extends Component {
  render() {
    const url = (this.props.url && this.props.url.pathname) || '/'
    const conList = MAINFUNCTION.filter(item => url.indexOf(item.short_name) > -1)
    // const screenHeight = process.browser ? document.documentElement.clientHeight : 1000
    // const appConHeight = screenHeight - 126
    return (
			// className={'appContent'} style={{ background: '#fff',minWidth: 1000 }}
      <div className={'leftBar'}>
        <div className={'logoBox'}>
          <img src={'/static/home/index_logo.png'} />
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
            width: 256px;
            /* float: left; */
            position: absolute;
            top: 0;
            height: 100%;
            background:rgba(255,255,255,1);
            box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.15) 
          }
          .logoBox{
            float:left;
            width: 100%;
            // background: #909090;
          }
          .logoBox img{
            width:72px;
            height:42px; 
            float:left;
            margin: 25px 0 32px 21px;
          }
          .logoBox>div{
            float: left;
            width: 100px;
            margin: 25px 0 32px 5px;
          }
          .logoBox span:nth-child(1){
            width:106px;
            height:19px; 
            font-size:14px;
            font-family:MicrosoftYaHei-Bold;
            color:rgba(52,52,52,1);
            line-height:19px;
            float:left;
            width: 100px;
            text-align: left;
          }
          .logoBox span:nth-child(2){
            float:left;
            width: 100px;
            text-align: left;
          }
          .appConRightCon{
            overflow: auto;
          }
          .appContentLeft {
            // background: ${theme.maincolor};
            width: 256px;
            color: #000;
            text-align: center;
            height: 80%;
            overflow-y: auto;
            overflow-x: hidden;
          }
          // .appContentLeft:after {
          //   content: '';
          //   display: block;
          //   // background: ${theme.maincolor};
          //   position: absolute;
          //   top: 0;
          //   left: 0;
          //   bottom: 0;
          //   width: 256px;
          //   border-right:1px solid #d8d8d8
          // }
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
