
import React, { Component } from 'react'
import { connect } from 'react-redux'
// import Router from 'next/router'
import { queryLaboratoryItemList } from '../../../../ducks'
import { PageCard, Select } from '../../../../components'
import AddLaboratoryItemScreen from './components/addLaboratoryItemScreen'
import RelatedItemsScreen from './components/relatedItemsScreen'

class TestItemsScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      drugClassification: [],
      selDrugType: 0,
      pageType: 1,
      keyword: '',
      status: '',
      type: 1,
      relateItem: {},
      alertType: 0
    }
  }

  componentWillMount() {
    this.getDataList({ offset: 0, limit: 10 })
  }
  showView() {
    let { pageType } = this.state
    let map = {
      // 1: <AddDrugScreen />,
      2: <AddLaboratoryItemScreen drugType={1} back2List={() => {
        this.setState({pageType: 1})
        this.getDataList({offset: 0, limit: 10})
      }} />
    }
    return map[pageType] || null
  }
  // 获取药品列表
  getDataList({ offset = 0, limit = 10 }) {
    const {clinic_id, queryLaboratoryItemList} = this.props
    const {status, keyword} = this.state
    let requestData = {
      clinic_id,
      name: keyword,
      offset,
      limit
    }
    if (status !== '' && status !== -1) {
      requestData.status = status
    }
    // console.log('requestData======', requestData)
    queryLaboratoryItemList(requestData, true)
  }
  // 状态筛选
  getStatusOptions() {
    return [
      {value: -1, label: '全部'},
      {value: true, label: '正常'},
      {value: false, label: '停用'}
    ]
  }
  // 加载右侧表格
  renderRightTable() {
    // const {keyword, status} = this.state
    return (
      <div className={'contentCenterRight'} style={{marginLeft: '0'}}>
        <div className={'rightTopFilter'}>
          <div className={'rightTopFilterLeft'}>
            <input
              placeholder={'检验项目名称'}
              onChange={e => {
                this.setState({keyword: e.target.value})
              }}
            />
            <div style={{width: '100px', marginLeft: '10px'}}>
              <Select
                placeholder={'状态'}
                height={32}
                options={this.getStatusOptions()}
                onChange={({value}) => {
                  this.setState({status: value})
                }}
              />
            </div>
            <button onClick={() => { this.getDataList({offset: 0, limit: 10}) }}>查询</button>
          </div>
          <div className={'rightTopFilterRight'}>
            <button>批量导入</button>
            <button>导出</button>
            <button
              onClick={() => { this.setState({pageType: 2}) }}
            >新建</button>
          </div>
        </div>
        {/* <div className={'rightTopFilter'}>
          <div className={'rightTopFilterLeft'}>
            <button onClick={() => {}}>批量设置折扣</button>
            <button onClick={() => {}}>批量设置有效期限</button>
          </div>
        </div> */}
        <div className={'contentTable'}>
          {this.renderTable()}
        </div>
        <style jsx>{`
          .contentCenterRight{
            // width:822px;
            width:100%;
            height:768px; 
            background:rgba(255,255,255,1);
            box-shadow: 0px 2px 8px 0px rgba(0,0,0,0.2) ;
            border-radius: 4px ;
            margin-left:20px;
            display: flex;
            flex-direction: column;
          }
          .rightTopFilter{
            height:32px;
            margin:24px 32px 0 32px;
            display: flex;
            // background:#a0a0a0;
          }
          .rightTopFilter button{
            background:rgba(255,255,255,1);
            border-radius: 4px ; 
            border:1px solid #d9d9d9;
            height:32px; 
            cursor:pointer;
            margin-left:10px;
            font-size:14px;
            font-family:MicrosoftYaHei;
            color:rgba(0,0,0,0.65);
            padding: 0 15px;
          }
          .rightTopFilter button:first-child{
            margin-left:0;
          }
          .rightTopFilter button:hover{
            background:rgba(42,205,200,1);
            color:rgba(255,255,255,1);
            border:1px solid rgba(42,205,200,1);
          }
          .rightTopFilterLeft{
            flex:8;
            display:flex;
          }
          .rightTopFilterLeft>input{
            width: 200px;
            height: 30px;
            background: rgba(255,255,255,1);
            border-radius: 4px;
            padding: 0;
            border: 1px solid #d9d9d9;
          }
          .rightTopFilterLeft>button{

          }
          .rightTopFilterRight{
            display:flex;
          }
          .rightTopFilterRight button{
            
          }
          .contentTable{
            margin:18px 32px;
            // background:#b0b0b0;
          }
        `}</style>
      </div>
    )
  }
  // 加载表格
  renderTable() {
    const { laboratoryItems, pageInfo } = this.props
    console.log('laboratoryItems=====', laboratoryItems)
    return (
      <div className={'tableContent'}>
        <table>
          <thead>
            <tr>
              <td style={{flex: 2}}>检验项目名称</td>
              <td>英文缩写</td>
              <td>单位</td>
              <td>参考值</td>
              <td>状态</td>
              <td style={{flex: 2.5}}>操作</td>
            </tr>
          </thead>
          <tbody>
            {laboratoryItems.map((item, index) => {
              return (
                <tr key={index}>
                  <td style={{flex: 2}}>{item.name}</td>
                  <td title={item.en_name}>{item.en_name}</td>
                  <td>{item.unit_name}</td>
                  <td>{item.references[0].reference_max || item.references[0].reference_value}</td>
                  <td>{item.status ? '正常' : '停用'}</td>
                  <td style={{flex: 2.5}} className={'operTd'}>
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
  // 关联项目
  relatedItems() {
    return (
      <div className={'mask'}>
        <RelatedItemsScreen
          relateItem={this.state.relateItem}
          closeMask={() => this.setState({alertType: 0})}
        />
      </div>
    )
  }
  // 显示列表信息
  renderList() {
    return (
      <div className={'contentCenter'}>
        {/* {this.renderLeftTree()} */}
        {this.renderRightTable()}
        <style jsx>{`
          .contentCenter{
            // background:#a0a0a0;
            display: flex;
          }
        `}</style>
      </div>
    )
  }
  render() {
    const {pageType, alertType} = this.state
    return (
      <div className={'boxContent'}>
        <div className={'topTitle'}>
          <span>检验项目</span>
          {pageType === 1 ? '' : <div className='back2List' onClick={() => this.setState({pageType: 1})}>{'<返回'}</div>}
        </div>
        {pageType === 1 ? this.renderList() : this.showView()}
        {alertType === 1 ? this.relatedItems() : ''}
        <style jsx>{`
          .boxContent{
            // background:#909090;
            display: flex;
            flex-direction: column;
            margin:0 20px;
            min-width:1165px;
          }
          .topTitle{
            font-size:20px;
            font-family:MicrosoftYaHei;
            color:rgba(102,102,102,1);
            margin: 26px 5px;
            height: 20px;
            line-height: 20px;
            display: flex;
          }
          .topTitle span{
            flex:9;
          }
          .back2List{
            flex:1;
            cursor:pointer;
          }
        `}</style>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    clinic_id: state.user.data.clinic_id,
    laboratoryItems: state.laboratoryItems.array_data,
    pageInfo: state.laboratoryItems.page_info
  }
}

export default connect(mapStateToProps, {queryLaboratoryItemList})(TestItemsScreen)
