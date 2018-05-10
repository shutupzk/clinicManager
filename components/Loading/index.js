import React from 'react'
// import theme from '../theme.js'

function Loading(props) {
  return (
    <div>
      {props.showLoading ? (
        <div>
          {/* <div className='loading'>
            <img src='/static/icons/loading.gif' width='100' />
          </div> */}
          <div className={'loadEffect1'}>
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className={'loadingTxt'}>
            <i>正</i><i>在</i><i>加</i><i>载</i><i>.</i><i>.</i><i>.</i>
          </div>
          <style jsx>{`
            .loadEffect1 {
              width: 100px;
              height: 100px;
              margin: 100px auto 0 auto;
              position: relative;
            }
          
            .loadEffect1 span {
                display: inline-block;
                width: 16px;
                height: 16px;
                border-radius: 50%;
                background: #288dde;
                position: absolute;
                animation: load1 1.04s ease infinite;
            }
            
            .loadEffect1 span:nth-child(1) {
                left: 0;
                top: 50%;
                margin-top: -8px;
                animation-delay: 0.13s;
            }
            
            .loadEffect1 span:nth-child(2) {
                left: 14px;
                top: 14px;
                animation-delay: 0.26s;
            }
            
            .loadEffect1 span:nth-child(3) {
                left: 50%;
                top: 0;
                margin-left: -8px;
                animation-delay: 0.39s;
            }
            
            .loadEffect1 span:nth-child(4) {
                right: 14px;
                top: 14px;
                animation-delay: 0.52s;
            }
            
            .loadEffect1 span:nth-child(5) {
                right: 0;
                top: 50%;
                margin-top: -8px;
                animation-delay: 0.65s;
            }
            
            .loadEffect1 span:nth-child(6) {
                right: 14px;
                bottom: 14px;
                animation-delay: 0.78s;
            }
            
            .loadEffect1 span:nth-child(7) {
                left: 50%;
                bottom: 0;
                margin-left: -8px;
                animation-delay: 0.91s;
            }
            
            .loadEffect1 span:nth-child(8) {
                left: 14px;
                bottom: 14px;
                animation-delay: 1.04s;
            }
            .loadingTxt {
              text-align: center;
              color: #e1e1e1;
              font-size: 20px;
              margin-top: 40px;
            }
            .loadingTxt i {
              animation: load1 2.8s ease infinite;
            }
          
            .loadingTxt i:nth-child(1) {
                animation-delay: 0.4s;
            }
            
            .loadingTxt i:nth-child(2) {
                animation-delay: 0.8s;
            }
            
            .loadingTxt i:nth-child(3) {
                animation-delay: 1.2s;
            }
            
            .loadingTxt i:nth-child(4) {
                animation-delay: 1.6s;
            }
            
            .loadingTxt i:nth-child(5) {
                animation-delay: 2s;
            }
            
            .loadingTxt i:nth-child(6) {
                animation-delay: 2.4s;
            }
            
            .loadingTxt i:nth-child(7) {
                animation-delay: 2.8s;
            }
            @keyframes load1 {
              0% {
                  opacity: 1;
              }
              100% {
                  opacity: 0.2;
              }
            }
            @-webkit-keyframes load1 {
              0% {
                  opacity: 1;
              }
              100% {
                  opacity: 0.2;
              }
            }
            @-moz-keyframes load1 {
              0% {
                  opacity: 1;
              }
              100% {
                  opacity: 0.2;
              }
            }
          `}</style>
        </div>
			) : (
				''
			)}
    </div>
  )
}

export default Loading
