import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PageCard, Confirm } from '../../../../components'
// import moment from 'moment'
import {
  MemberPateintList
} from '../../../../ducks'
import {getAgeByBirthday} from '../../../../utils'
import AddDrugInstockScreen from './components/addDrugInstockScreen'
import moment from 'moment'

// 病历
class PatientMgtScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      start_date: '',
      end_date: '',
      keyword: '',
      showType: 1,
      showWay: 1,
      drug_instock_record_id: ''
    }
  }

  async componentWillMount() {
    this.getDataList({offset: 0, limit: 10})
  }
  getDataList({ offset = 0, limit = 10 }) {
    const {MemberPateintList} = this.props
    const {start_date, end_date, keyword} = this.state
    let requestData = {
      offset,
      limit
    }
    if (start_date !== '') {
      requestData.start_date = start_date
    }
    if (end_date !== '') {
      requestData.end_date = end_date
    }
    if (keyword !== '') {
      requestData.keyword = keyword
    }
    MemberPateintList(requestData)
  }
  renderTable() {
    const { patients, pageInfo } = this.props
    console.log('patients=====', patients)
    return (
      <div className={'contentCenterRight'} style={{marginLeft: '0'}}>
        <div className={'contentTable'}>
          <div className={'tableContent'}>
            <table>
              <thead>
                <tr>
                  <td>姓名</td>
                  <td>病人ID</td>
                  <td>手机号码</td>
                  <td>年龄</td>
                  <td>性别</td>
                  <td>登记时间</td>
                  <td>最近就诊时间</td>
                  {/* <td>就诊类型</td>
                  <td>是否为会员</td> */}
                  <td style={{flex: 2}}>操作</td>
                </tr>
              </thead>
              <tbody>
                {patients.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.name}</td>
                      <td>{item.id}</td>
                      <td>{item.phone}</td>
                      <td>{getAgeByBirthday(item.birthday)}</td>
                      <td>{item.sex === 0 ? '女' : '男'}</td>
                      <td>{moment(item.created_time).format('YYYY-MM-DD hh:mm')}</td>
                      <td>{moment(item.visited_time).format('YYYY-MM-DD hh:mm') === 'Invalid date' ? '' : moment(item.visited_time).format('YYYY-MM-DD hh:mm')}</td>
                      {/* <td>{item.supplier_name}</td>
                      <td>{item.instock_operation_name}</td> */}
                      <td style={{flex: 2}} className={'operTd'}>
                        <div>
                          <div onClick={() => {
                            this.setState({
                              showType: 2,
                              drug_instock_record_id: item.drug_instock_record_id,
                              showWay: 2
                            })
                          }}>预约</div>
                          <div className={'divideLine'}>|</div>
                          <div onClick={() => {
                            this.DrugInstockRecordDelete(item.drug_instock_record_id)
                          }}>更多</div>
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
            <PageCard
              offset={pageInfo.offset}
              limit={pageInfo.limit}
              total={pageInfo.total}
              style={{margin: '20px 0', width: '100%'}}
              onItemClick={({ offset, limit }) => {
                // const keyword = this.state.keyword
                this.getDataList({ offset, limit })
              }}
            />
          </div>
        </div>
        <style jsx='true'>{`
          .contentCenterRight{
            width:100%;
            height:715px; 
            background:rgba(255,255,255,1);
            box-shadow: 0px 2px 8px 0px rgba(0,0,0,0.2) ;
            border-radius: 4px ;
            margin-left:20px;
            margin-top:5px;
            display: flex;
            flex-direction: column;
          }
          .contentCenter{
            // background:#a0a0a0;
            display: flex;
          }
          .contentTable{
            margin:18px 32px;
            // background:#b0b0b0;
          }
          .tableContent{

          }
          .tableContent table{
            display: flex;
            flex-direction: column;
            border-collapse: collapse;
            border-top:1px solid #e8e8e8;
          }
          .tableContent table thead{
            background:rgba(250,250,250,1);
            box-shadow: 1px 1px 0px 0px rgba(232,232,232,1) 
          }
          .tableContent table tr{
            height:40px; 
            display: flex;
            border-bottom:1px solid #e8e8e8;
            border-right:1px solid #e8e8e8;
            align-items: center;
          }
          .tableContent table tr td{
            border-left:1px solid #e8e8e8;
            height:40px; 
            // display: flex;
            align-items: center;
            flex:1;
            justify-content: center;
            line-height: 40px;
            text-align: center;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .operTd>div{
            margin:0 auto;
            width: max-content;
          }
          .operTd>div>div{
            cursor:pointer;
            color:#2ACDC8;
            float:left;
          }
          .operTd>div>div.divideLine{
            cursor:default;
            color:#e8e8e8;
            margin:0 5px;
          }
        `}</style>
      </div>
    )
  }
  showView() {
    let { showType, drug_instock_record_id, showWay } = this.state
    let map = {
      // 1: <AddDrugScreen />,
      2: <AddDrugInstockScreen showWay={showWay} drug_instock_record_id={drug_instock_record_id} drugType={1} backToList={() => {
        this.setState({showType: 1})
        this.getDataList({offset: 0, limit: 10})
      }} />
    }
    return map[showType] || null
  }
  renderFilter() {
    return (
      <div className={'filterBox'}>
        <div className={'boxLeft'}>
          <input
            placeholder={`就诊开始日期`}
            type='date'
            onChange={e => {
              this.setState({start_date: e.target.value})
            }}
          />
          <input
            placeholder={`就诊结束日期`}
            type='date'
            onChange={e => {
              this.setState({end_date: e.target.value})
            }}
          />
          <input
            style={{width: '300px'}}
            type='text'
            placeholder={`搜索就诊人姓名/门诊ID/身份证号码/手机号码`}
            onChange={(e) => {
              this.setState({keyword: e.target.value})
            }}
          />
          <button onClick={() => {
            this.getDataList({offset: 0, limit: 10})
          }}>查询</button>
        </div>
        <div className={'boxRight'} style={{display: 'flex'}}>
          <button
            onClick={() => {
            }}
          >
            新增就诊人
          </button>
          <button
            onClick={() => {
            }}
          >
            导出数据
          </button>
        </div>
        <style jsx='true'>{`
          .filterBox {
            float: left;
            width: 100%;
            height: 60px;
            background: rgba(255, 255, 255, 1);
            box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.2);
            border-radius: 4px;
            margin-left: 0;
          }
          .filterBox .boxLeft {
            float: left;
          }
          .filterBox .boxLeft input {
            float: left;
            width: 150px;
            height: 28px;
            line-height: 28px;
            background: rgba(255, 255, 255, 1);
            border-radius: 4px;
            border: 1px solid #d9d9d9;
            margin: 16px 30px;
            text-indent: 10px;
            padding: 0;
          }
          .filterBox .boxLeft>input[type='date'] {
            height: 20px;
            padding: 5px 0;
            width: 120px;
            text-indent: 0;
            margin: 14px 0 0 30px;
          }
          .filterBox .boxLeft button {
            float: left;
            width: 60px;
            height: 28px;
            border-radius: 4px;
            border: 1px solid #2acdc8;
            color: rgba(42, 205, 200, 1);
            font-size: 12px;
            margin: 16px 0;
            background: none;
            cursor: pointer;
          }
          .filterBox .boxRight {
            float: right;
          }
          .filterBox .boxRight button {
            float: left;
            width: 100px;
            height: 28px;
            background: rgba(42, 205, 200, 1);
            border-radius: 4px;
            border: none;
            color: rgba(255, 255, 255, 1);
            font-size: 12px;
            cursor: pointer;
            margin: 16px 35px;
          }
        `}</style>
      </div>
    )
  }
  renderBack() {
    return (
      <div className={'filterBox'}>
        <div className={'boxLeft'}>
          <span>药房管理-入库</span>
        </div>
        <div className='back2List' onClick={() => this.setState({showType: 1})}>
          {'<返回'}
        </div>
        <style jsx='true'>{`
          .filterBox {
            float: left;
            width: 100%;
            height: 60px;
            background: rgba(255, 255, 255, 1);
            box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.2);
            border-radius: 4px;
            margin-left: 0;
            margin: 5px 0;
            font-size: 20px;
          }
          .filterBox .boxLeft {
            float: left;
            margin: 15px 20px;
          }
          .back2List{
            flex:1;
            cursor:pointer;
            text-align: end;
            margin: 15px 20px;
          }
        `}</style>
      </div>
    )
  }
  render() {
    const {showType} = this.state
    return (
      <div className={'boxContent'}>
        {showType === 1 ? this.renderFilter() : this.renderBack()}
        {showType === 1 ? this.renderTable() : this.showView()}
        <style jsx='true'>{`
          .boxContent{
            // background:#909090;
            display: flex;
            flex-direction: column;
            margin:0 20px;
            min-width:1165px;
          }
        `}</style>
        <Confirm ref='myAlert' />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    clinic_id: state.user.data.clinic_id,
    patients: state.patients.member_patient_data,
    pageInfo: state.patients.page_info
  }
}

export default connect(mapStateToProps, {
  MemberPateintList
})(PatientMgtScreen)
