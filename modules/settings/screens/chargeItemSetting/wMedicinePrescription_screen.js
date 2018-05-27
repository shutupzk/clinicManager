
import React, { Component } from 'react'
import { connect } from 'react-redux'
// import Router from 'next/router'
import { ClinicDrugList } from '../../../../ducks'
import { PageCard, Select } from '../../../../components'
import AddDrugScreen from './components/addDrugScreen'
// import { CompleteHealth, PatientCard, ChooseDoctor } from '../../components'

class WMPrescriptionScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      drugClassification: [],
      selDrugType: 0,
      pageType: 1,
      keyword: '',
      status: '',
      type: 0,
      drug_class_id: -1
    }
  }

  componentWillMount() {
    this.getDrugsList({ offset: 0, limit: 10 })
    this.getDrugClassification()
  }
  showView() {
    let { pageType } = this.state
    let map = {
      // 1: <AddDrugScreen />,
      2: <AddDrugScreen drugType={0} back2List={() => {
        this.setState({pageType: 1})
        this.getDrugsList({offset: 0, limit: 10})
      }} />
    }
    return map[pageType] || null
  }
  // 获取药品列表
  getDrugsList({ offset = 0, limit = 10 }) {
    const {clinic_id, ClinicDrugList} = this.props
    const {type, status, keyword, drug_class_id} = this.state
    // console.log('{type, status, keyword}======', {type, status, keyword})
    let requestData = {
      clinic_id,
      type,
      keyword,
      offset,
      limit
    }
    if (drug_class_id !== -1) {
      requestData.drug_class_id = drug_class_id
    }
    if (status !== '' && status !== -1) {
      requestData.status = status
    }
    console.log('requestData======', requestData)
    ClinicDrugList(requestData)
  }
  // 获取药品分类列表
  getDrugClassification() {
    let drugClassification = []
    for (let i = 0; i < 10; i++) {
      let item = {
        name: '药品分类' + i,
        quantity: 300,
        children: [
          {
            name: '药品分类1' + i,
            quantity: 20 + i
          },
          {
            name: '药品分类2' + i,
            quantity: 20 + i
          }
        ]
      }
      drugClassification.push(item)
    }
    this.setState({drugClassification})
  }
  // 加载左侧药品分类
  renderLeftTree() {
    const {drugClassification, selDrugType} = this.state
    return (
      <div className={'contentCenterLeft'}>
        <ul>
          <span>药品分类</span>
          {drugClassification.map((item, index) => {
            let children = item.children || []
            return (
              <li key={index}
                className={selDrugType === index ? 'sel' : ''}
                onClick={() => {
                  this.setState({selDrugType: index})
                }}
              >
                <div>
                  <i />
                  <span>{item.name}</span>
                  <a>{item.quantity}</a>
                </div>
                <ul>
                  {children.map((child, i) => {
                    return (
                      <li key={i}>
                        <span>{child.name}</span>
                        <a>{child.quantity}</a>
                      </li>
                    )
                  })}
                </ul>
              </li>
            )
          })}
        </ul>
        <style jsx>{`
          .contentCenterLeft{
            width:300px;
            height:768px; 
            background:rgba(255,255,255,1);
            box-shadow: 0px 2px 8px 0px rgba(0,0,0,0.2) ;
            border-radius: 4px ; 
          }
          .contentCenterLeft>ul{
            margin: 30px 0 0 30px;
            max-height: 710px;
            overflow: auto;
            width:90%;
          }
          .contentCenterLeft>ul>span{
            font-size:14px;
            font-family:MicrosoftYaHei;
            color:rgba(102,102,102,1);
            display: flex;
            flex-direction: column;
          }
          .contentCenterLeft>ul>li{
            margin-top:20px;
            display: flex;
            flex-direction: column;
          }
          .contentCenterLeft>ul>li>div{
            display: flex;
            align-items: center;
            cursor:pointer;
          }
          .contentCenterLeft>ul>li>div>i{
            width:14px;
            height:12px; 
            background:rgba(102,102,102,1);
            // flex:1;
          }
          .contentCenterLeft>ul>li>div>span{
            flex:10;
            margin-left:17px;
          }
          .contentCenterLeft>ul>li>div>a{
            flex:2;
          }
          .contentCenterLeft>ul>li.sel>ul{
            display: flex;
          }
          .contentCenterLeft>ul>li>ul{
            display: none;
            flex-direction: column;
            margin-left: 31px;
          }
          .contentCenterLeft>ul>li>ul>li{
            display: flex;
            align-items: center;
            margin-top:20px;
            cursor:pointer;
          }
          .contentCenterLeft>ul>li>ul>li.sel span,
          .contentCenterLeft>ul>li>ul>li:hover span{
            color:rgba(42,205,200,1);
          }
          .contentCenterLeft>ul>li>ul>li>span{
            flex:10;
          }
          .contentCenterLeft>ul>li>ul>li>a{
            flex:2;
          }
        `}</style>
      </div>
    )
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
      <div className={'contentCenterRight'}>
        <div className={'rightTopFilter'}>
          <div className={'rightTopFilterLeft'}>
            <input
              placeholder={'处方医嘱名称或条形码'}
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
            <button onClick={() => { this.getDrugsList({offset: 0, limit: 10}) }}>查询</button>
          </div>
          <div className={'rightTopFilterRight'}>
            <button>批量导入</button>
            <button>导出</button>
            <button
              onClick={() => { this.setState({pageType: 2}) }}
            >新建</button>
          </div>
        </div>
        <div className={'rightTopFilter'}>
          <div className={'rightTopFilterLeft'}>
            <button onClick={() => {}}>批量设置折扣</button>
            <button onClick={() => {}}>批量设置有效期限</button>
          </div>
        </div>
        <div className={'contentTable'}>
          {this.renderTable()}
        </div>
        <style jsx>{`
          .contentCenterRight{
            width:822px;
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
    const { drugs, pageInfo } = this.props
    console.log('drugs=====', drugs)
    return (
      <div className={'tableContent'}>
        <table>
          <thead>
            <tr>
              <td style={{flex: 2}}>处方医嘱名称</td>
              <td>规格</td>
              <td>包装单位</td>
              <td>零售价</td>
              <td>拼音缩写</td>
              <td>允许折扣</td>
              <td>备注</td>
              <td>状态</td>
              <td style={{flex: 1.5}}>操作</td>
            </tr>
          </thead>
          <tbody>
            {drugs.map((item, index) => {
              return (
                <tr key={index}>
                  <td style={{flex: 2}}>{item.drug_name}</td>
                  <td>{item.specification}</td>
                  <td>{item.packing_unit_name}</td>
                  <td>{item.ret_price}元</td>
                  <td>{item.py_code}</td>
                  <td>{item.is_discount ? '是' : '否'}</td>
                  <td title={item.default_remark}>{item.default_remark}</td>
                  <td>{item.status ? '正常' : '停用'}</td>
                  <td style={{flex: 1.5}} className={'operTd'}>
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
          style={{margin: '20px 0', width: '758px'}}
          onItemClick={({ offset, limit }) => {
            // const keyword = this.state.keyword
            this.getDrugsList({ offset, limit })
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
  // 显示列表信息
  renderList() {
    return (
      <div className={'contentCenter'}>
        {this.renderLeftTree()}
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
    const {pageType} = this.state
    return (
      <div className={'boxContent'}>
        <div className={'topTitle'}>
          <span>西/成药处方医嘱</span>
          {pageType === 1 ? '' : <div className='back2List' onClick={() => this.setState({pageType: 1})}>{'<返回'}</div>}
        </div>
        {pageType === 1 ? this.renderList() : this.showView()}
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
  console.log('state======', state)
  return {
    clinic_id: state.user.data.clinic_id,
    drugs: state.drugs.data,
    pageInfo: state.drugs.page_info
  }
}

export default connect(mapStateToProps, {ClinicDrugList})(WMPrescriptionScreen)
