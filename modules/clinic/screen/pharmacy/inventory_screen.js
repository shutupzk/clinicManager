import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PageCard, Confirm, DatePicker } from '../../../../components'
// import moment from 'moment'
import {
  DrugInventoryList,
  DrugInventoryRecordDelete
} from '../../../../ducks'
import AddDrugInventoryScreen from './components/addDrugInventoryScreen'
import moment from 'moment'

class InventoryScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      start_date: '',
      end_date: '',
      showType: 1,
      showWay: 1,
      drug_inventory_record_id: ''
    }
  }

  async componentWillMount() {
    this.getDataList({offset: 0, limit: 10})
  }
  getDataList({ offset = 0, limit = 10 }) {
    const {clinic_id, DrugInventoryList} = this.props
    const {start_date, end_date} = this.state
    let requestData = {
      clinic_id,
      offset,
      limit,
      start_date,
      end_date
    }
    DrugInventoryList(requestData)
  }
  async DrugInventoryRecordDelete(drug_inventory_record_id) {
    const { DrugInventoryRecordDelete, pageInfo, drugInventorys } = this.props
    this.refs.myAlert.confirm('提示', '确认删除这条记录？', 'Warning', async () => {
      let error = await DrugInventoryRecordDelete({drug_inventory_record_id})
      if (error) {
        return this.refs.myAlert.alert('删除失败', error)
      } else {
        this.refs.myAlert.alert('删除成功')
        if (drugInventorys.length > 1) {
          this.getDataList({ offset: pageInfo.offset, limit: 10 })
        } else if (pageInfo.offset > 0) {
          this.getDataList({ offset: pageInfo.offset - 1, limit: 10 })
        }
      }
    })
  }
  renderTable() {
    const { drugInventorys, pageInfo } = this.props
    console.log('drugInventorys=====  ', drugInventorys)
    return (
      <div className={'contentCenterRight'} style={{marginLeft: '0'}}>
        <div className={'contentTable'}>
          <div className={'tableContent'}>
            <table>
              <thead>
                <tr>
                  <td style={{flex: 2}}>盘点单号</td>
                  <td style={{flex: 2}}>盘点日期</td>
                  <td>操作员</td>
                  <td>状态</td>
                  <td style={{flex: 2}}>操作</td>
                </tr>
              </thead>
              <tbody>
                {drugInventorys.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td style={{flex: 2}}>{item.order_number}</td>
                      <td style={{flex: 2}}>{moment(item.inventory_date).format('YYYY-MM-DD')}</td>
                      <td>{item.inventory_operation_name}</td>
                      <td>{item.verify_status === '01' ? '未审核' : '已审核'}</td>
                      <td style={{flex: 2}} className={'operTd'}>
                        {item.verify_status === '01' ? <div>
                          <div onClick={() => {
                            this.setState({
                              showType: 2,
                              drug_inventory_record_id: item.drug_inventory_record_id,
                              showWay: 4
                            })
                          }}>修改</div>
                          <div className={'divideLine'}>|</div>
                          <div onClick={() => {
                            this.setState({
                              showType: 2,
                              drug_inventory_record_id: item.drug_inventory_record_id,
                              showWay: 2
                            })
                          }}>审核</div>
                          <div className={'divideLine'}>|</div>
                          <div onClick={() => {
                            this.DrugInventoryRecordDelete(item.drug_inventory_record_id)
                          }}>删除</div>
                        </div> : <div>
                          <div onClick={() => {
                            this.setState({
                              showType: 2,
                              drug_inventory_record_id: item.drug_inventory_record_id,
                              showWay: 3
                            })
                          }}>查看详情</div>
                        </div>
                        }
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
        <style jsx>{`
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
    let { showType, drug_inventory_record_id, showWay } = this.state
    let map = {
      // 1: <AddDrugScreen />,
      2: <AddDrugInventoryScreen showWay={showWay} drug_inventory_record_id={drug_inventory_record_id} drugType={1} backToList={() => {
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
          <div className={'dateDiv'}>
            <DatePicker
              placeholder={'开始日期'}
              onChange={(date, str) => {
                if (date) {
                  this.setState({ start_date: moment(date).format('YYYY-MM-DD') })
                }
              }}
            />
          </div>
          <div className={'dateDiv'}>
            <DatePicker
              placeholder={'结束日期'}
              onChange={(date, str) => {
                if (date) {
                  this.setState({ end_date: moment(date).format('YYYY-MM-DD') })
                }
              }}
            />
          </div>
          <button onClick={() => {
            this.getDataList({offset: 0, limit: 10})
          }}>查询</button>
        </div>
        <div className={'boxRight'}>
          <button
            onClick={() => {
              this.setState({showType: 2, showWay: 1, drug_inventory_record_id: ''})
            }}
          >
            新增盘点
          </button>
        </div>
        <style jsx>{`
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
          <span>药房管理-盘点</span>
        </div>
        <div className='back2List' onClick={() => this.setState({showType: 1})}>
          {'<返回'}
        </div>
        <style jsx>{`
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
        <style jsx>{`
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
    drugInventorys: state.drugInventorys.data,
    pageInfo: state.drugInventorys.page_info
  }
}

export default connect(mapStateToProps, {
  DrugInventoryList,
  DrugInventoryRecordDelete
})(InventoryScreen)
