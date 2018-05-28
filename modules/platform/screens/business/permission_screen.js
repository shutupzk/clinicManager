import React, { Component } from 'react'
import { connect } from 'react-redux'
import { queryClinicList, clinicSelect } from '../../../../ducks'
import { Confirm } from '../../../../components'

class BusinessClinicPermissionScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      keyword: ''
    }
  }

  showList() {
    const { clinics, clinic_selectId } = this.props
    let clinic = null
    for (let item of clinics) {
      if (item.id === clinic_selectId) clinic = item
    }
    return (
      <div>
        <div className={'bussinessTitle'}>诊所业务分配</div>
        <div className={'formList'} style={{ marginTop: 0 }}>
          <div className={'boxTitle'}>诊所名称：{clinic.name}</div>
          <div className={'boxContent'}>
            <ul>
              <li>
                <span>业务分配</span>
                <div className={'boxContentItem'}>
                  <div className={'boxContentList'}>
                    <span>标题</span>
                    <ul>
                      <li>1</li>
                      <li>2</li>
                    </ul>
                  </div>
                  <div className={'boxContentList'}>
                    <span>标题</span>
                    <ul>
                      <li>
                        <input type={'checkBox'} />
                        <label>1</label>
                      </li>
                      <li>2</li>
                      <li>3</li>
                      <li>4</li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <span>业务已分配</span>
                <div className={'boxContentItem'}>
                  <div className={'boxContentList'}>
                    <span>标题</span>
                    <ul>
                      <li>1</li>
                      <li>2</li>
                      <li>3</li>
                      <li>4</li>
                    </ul>
                  </div>
                  <div className={'boxContentList'}>
                    <span>标题</span>
                    <ul>
                      <li>1</li>
                      <li>2</li>
                      <li>3</li>
                      <li>4</li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <style jsx>{`
          .bussinessTitle {
            margin: 24px 0 26px 33px;
            height: 24px;
            font-size: 20px;
            font-family: MicrosoftYaHei;
            color: rgba(102, 102, 102, 1);
            line-height: 24px;
          }
          .boxTitle {
            margin: 29px 0 0 32px
            height: 22px;
            font-size: 14px;
            font-family: PingFangSC-Regular;
            color: rgba(0, 0, 0, 0.85);
            line-height: 22px;
          }
          .boxContent {
            margin: 30px 0 0 32px
          }
          .boxContent ul {
            width: 100%
          }
          .boxContent ul li {
            margin: 0;
            width: 49%;
            margin-right: 1%;
          }
          .boxContent ul li>span {
            height:20px;
            font-size:14px;
            font-family:PingFangSC-Regular;
            color:rgba(0,0,0,0.85);
            line-height:20px;
          }
          .boxContentItem {
            margin-top: 8px
            width:100%;
            height:482px;
            background:rgba(255,255,255,1);
            border-radius:4px;
            border:1px solid rgba(0,0,0,0.15);
          }
          .boxContentList {
            width: 94%
            margin-top: 20px
            display: flex;
            flex-direction: column;
            float: left;
            padding-left: 24px
            font-size:14px;
            font-family:PingFangSC-Regular;
            color:rgba(0,0,0,0.85);
            line-height:20px;
          }
          .boxContentList ul {
            width: 100%
          }
          .boxContentList ul li{
            margin: 0;
            width: 25%

          }
          .boxContentList span {
            height:20px;
            margin-bottom: 10px
          }
          .boxContentList input {
            margin: 0;
            margin-top: 2px;
            width:16px;
            height:16px;
            background:rgba(42,205,200,1);
            border-radius:2px;
          }
          .boxContentList > ul > li {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
          }
          .boxContentList > ul > li > input{
            flex: 1;
          }
          .boxContentList > ul > li > label{
            flex: 4;
          }
        `}</style>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.showList()}
        <Confirm ref='myAlert' isAlert />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    clinics: state.clinics.data,
    clinic_selectId: state.clinics.selectId
  }
}

export default connect(mapStateToProps, { queryClinicList, clinicSelect })(BusinessClinicPermissionScreen)
