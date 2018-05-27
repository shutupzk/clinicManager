import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PageCard } from '../../../../../components'
// import moment from 'moment'
import {
} from '../../../../../ducks'
// 病历
class StorageMgtScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  async componentWillMount() {
  }
  getDataList({ offset, limit }) {

  }
  renderTable() {
    // const { examinationModels, pageInfo } = this.props
    let examinationModels = []
    let pageInfo = {
      offset: 0,
      limit: 10,
      total: 0
    }
    console.log('examinationModels=====', examinationModels)
    return (
      <div className={'tableContent'}>
        <table>
          <thead>
            <tr>
              <td style={{flex: 2}}>入库日期</td>
              <td style={{flex: 2}}>入库单号</td>
              <td>入库方式</td>
              <td style={{flex: 2}}>供应商</td>
              <td>操作员</td>
              <td>状态</td>
              <td style={{flex: 2}}>操作</td>
            </tr>
          </thead>
          <tbody>
            {examinationModels.map((item, index) => {
              return (
                <tr key={index}>
                  <td style={{flex: 2}}>{item.model_name}</td>
                  <td style={{flex: 2}}>{item.items.length > 0 ? this.itemsDetail(item.items) : ''}</td>
                  <td>{item.is_common ? '通用' : '个人'}</td>
                  <td style={{flex: 2}}>{moment(item.created_time).format('YYYY-MM-DD HH:mm:ss')}</td>
                  <td>{item.operation_name}</td>
                  <td>{item.operation_name}</td>
                  <td style={{flex: 2}} className={'operTd'}>
                    <div>
                      <div>修改</div>
                      <div className={'divideLine'}>|</div>
                      <div>停用</div>
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
        <style jsx>{`
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
  render() {
    return (
      <div className={'boxContent'}>
        <div className={'filterBox'}>
          <div className={'boxLeft'}>
            <input
              placeholder={`入库日期`}
              type='date'
            />
            <input
              type='text'
              placeholder={`入库单号`}
              onChange={(e) => {
              }}
            />
            <button onClick={() => {
            }}>查询</button>
          </div>
          <div className={'boxRight'}>
            <button
              onClick={() => {
              }}
            >
              新增入库
            </button>
          </div>
        </div>
        <div className={'contentCenterRight'} style={{marginLeft: '0'}}>
          <div className={'contentTable'}>
            {this.renderTable()}
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
          .boxContent{
            // background:#909090;
            display: flex;
            flex-direction: column;
            margin:0 20px;
            min-width:1165px;
          }
          .contentCenter{
            // background:#a0a0a0;
            display: flex;
          }
          .contentTable{
            margin:18px 32px;
            // background:#b0b0b0;
          }
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
}

const mapStateToProps = state => {
  return {
  }
}

export default connect(mapStateToProps, {
})(StorageMgtScreen)
