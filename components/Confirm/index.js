import React, { Component } from 'react'

export default class Confirm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isAlert: false,
      showConfirm: false,
      title: '提示',
      content: '',
      type: '',
      hideCancelButton: false,
      confirmFun: null
    }
  }

  alert(title, content, confirmFun, type) {
    this.setState({
      title,
      content,
      showConfirm: true,
      type,
      confirmFun,
      isAlert: true
    })
  }

  confirm(title, content, type, confirmFun) {
    this.setState({
      title,
      content,
      confirmFun,
      type,
      showConfirm: true,
      isAlert: false
    })
  }

  closeConfirm() {
    this.setState({ showConfirm: false })
  }

  openConfirm() {
    this.setState({ showConfirm: true })
  }

  render() {
    let { showConfirm, title, content, type, hideCancelButton, confirmFun, isAlert } = this.state
    if (!showConfirm) return null
    if (type !== 'Danger' && type !== 'Warning') {
      type = 'Success'
    }
    return (
      <div className='mask'>
        <div className='alertDiv'>
          <div style={{ width: '369px', display: 'flex', flexDirection: 'row', height: '24px', marginLeft: '32px', marginRight: '32px', marginTop: '32px' }}>
            <img src={`/static/icons/${type}.svg`} />
            <div className='title'>{title}</div>
          </div>
          <div style={{ width: '369px', display: 'flex', flexDirection: 'row', flex: 1, marginLeft: '32px', marginRight: '32px', marginTop: '12px', marginBottom: '24px' }}>
            <div className='content'>{content ? content + '' : ''}</div>
          </div>

          <div style={{ width: '369px', display: 'flex', flexDirection: 'row', height: '32px', marginLeft: '32px', marginRight: '32px', marginBottom: '24px' }}>
            <div style={{ flex: 1 }} />
            {hideCancelButton || isAlert ? null : (
              <div className='buttonDiv buttonDivCancel' onClick={() => this.closeConfirm()}>
                <span className='cancel'>取消</span>
              </div>
            )}
            {this.props.children}
            <div
              className={`buttonDiv buttonDiv${type}`}
              onClick={() => {
                this.closeConfirm()
                if (confirmFun) {
                  confirmFun()
                }
              }}
            >
              <span className={`span${type}`}>{!this.props.sureText ? '确定' : this.props.sureText}</span>
            </div>
          </div>
        </div>
        <style jsx='true'>
          {`
            .mask {
              position: fixed;
              display: flex;
              width: 100%;
              height: 100%;
              background: rgba(0, 0, 0, 0.2);
              top: 0;
              left: 0;
              z-index: 1000;
              align-items: center;
              justify-content: center;
            }
            .alertDiv {
              margin-bottom: 150px;
              display: flex;
              flex-direction: column;
              width: 433px;
              height: auto;
              background: rgba(255, 255, 255, 1);
              box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.2);
              border-radius: 4px;
            }
            .title {
              height: 24px;
              font-size: 16px;
              font-family: PingFangSC-Medium;
              color: rgba(0, 0, 0, 0.85);
              line-height: 24px;
              flex: 1;
              margin-left: 16px;
            }
            .content {
              height: auto;
              font-size: 14px;
              font-family: PingFangSC-Regular;
              color: rgba(0, 0, 0, 0.65);
              line-height: 22px;
              margin-left: 38px;
            }
            .buttonDiv {
              width: 63px;
              height: 30px;
              border-radius: 4px;
              cursor: pointer;
              display: flex;
              align-items: center;
              justify-content: center;
              margin-left: 8px;
            }
            .buttonDivSuccess {
              background: rgba(42, 205, 200, 1);
              border: 1px solid rgba(42, 205, 200, 1);
            }
            .buttonDivWarning {
              background: rgba(42, 205, 200, 1);
              border: 1px solid rgba(42, 205, 200, 1);
            }
            .buttonDivDanger {
              background: rgba(0, 0, 0, 0.04);
              border: 1px solid #d9d9d9;
            }
            .buttonDivCancel {
              background: rgba(255, 255, 255, 1);
              border: 1px solid #d9d9d9;
            }
            .buttonDiv span {
              height: 22px;
              font-size: 14px;
              font-family: PingFangSC-Regular;
              line-height: 22px;
            }
            .spanSuccess {
              color: rgba(255, 255, 255, 1);
            }
            .spanWarning {
              color: rgba(255, 255, 255, 1);
            }
            .spanDanger {
              color: rgba(245, 34, 45, 1);
            }
            .cancel {
              color: rgba(0, 0, 0, 0.65);
            }
          `}
        </style>
      </div>
    )
  }
}
