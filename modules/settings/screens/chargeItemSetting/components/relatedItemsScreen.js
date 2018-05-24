import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { Select } from '../../../../../components'
// import Router from 'next/router'
// import { Select } from '../../../../../components'
// import {} from '../../../../../ducks'
// import {
//   // queryLaboratoryItemList,
//   // queryAssociationList,
//   // LaboratoryAssociationCreate
// } from '../../../../../ducks'

// 病历
export default class RelatedItemsScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      relateInfo: {
        items: []
      },
      relateItems: []
    }
  }

  async componentWillMount() {
    // this.queryAssociationList()
  }
  async componentDidMount() {
  }
  async submit() {
    const {LaboratoryAssociationCreate, relateItem} = this.props
    let {relateInfo} = this.state
    relateInfo.clinic_laboratory_id = relateItem.clinic_laboratory_id
    let requestData = {items: []}
    requestData.clinic_laboratory_id = relateInfo.clinic_laboratory_id
    for (let i = 0; i < relateInfo.items.length; i++) {
      let items = {}
      items.name = relateInfo.items[i].name
      items.clinic_laboratory_item_id = relateInfo.items[i].clinic_laboratory_item_id
      items.default_result = relateInfo.items[i].default_result
      requestData.items.push(items)
    }
    let err = await LaboratoryAssociationCreate(requestData)
    if (err) {
      alert(err)
      // this.setState({relateInfo})
    } else {
      alert('添加关联项目成功！')
      this.props.closeMask()
    }
  }
  style() {
    return (
      <style jsx>{`
        .formContent{
          display: flex;
          flex-direction: column;
          width: 90%;
          // background: #909090;
          margin: 20px auto;
        }
        .formContent>span{
          font-size: 18px;
        }
        .formContent>ul{
          // display: flex;
          width: 850px;
          border-top: 1px solid #d8d8d8;
          margin-top:20px;
          // flex-direction: column;
          height: 420px;
          overflow: hidden;
          overflow-y: auto;
        }
        .formContent>ul>li{
          display: flex;
          float:left;
          width: 848px;
          // flex: 1;
          height: 40px;
          align-items: center;
          justify-content: center;
          border-right: 1px solid #d8d8d8;
          border-bottom: 1px solid #d8d8d8;
        }
        .formContent>ul>li:first-child{
          background: rgba(250,250,250,1);
          box-shadow: 1px 1px 0px 0px rgba(232,232,232,1);
        }
        .formContent>ul>li>div{
          flex:1;
          height: 40px;
          border-left: 1px solid #d8d8d8;
          float:left;
          line-height: 40px;
          text-align: center;
        }
        .formContent>ul>li>div>input{
          width: 100%;
          height: 32px;
          border: none;
          padding: 0;
          outline-style: none;
          text-align:center;
        }
        .formContent>ul>li>div>div{
          margin-top: 5px;
        }
        .formBottom{
          display: flex;
          flex-direction: column;
          width: 90%;
          // background: #808080;
          margin: 0 auto;
          justify-content: center;
          align-items: center;
        }
        .formBottom>div{
          width:150px;
        }
        .formBottom>div>button{
          background: rgba(255,255,255,1);
          border-radius: 4px;
          border: 1px solid #d9d9d9;
          height: 32px;
          cursor: pointer;
          font-size: 14px;
          font-family: MicrosoftYaHei;
          color: rgba(0,0,0,0.65);
          padding: 0 15px;
        }
        .formBottom>div>button:first-child{
          float:left;
        }
        .formBottom>div>button:last-child{
          float:right;
        }
      `}</style>
    )
  }
  // 添加行
  addColumn() {
    const { relateInfo } = this.state
    relateInfo.items.push({})
    this.setState({ relateInfo })
  }
  // 删除行
  removeColumn(index) {
    const { relateInfo } = this.state
    let array = relateInfo.items
    array.splice(index, 1)
    relateInfo.items = array
    this.setState({ relateInfo })
  }
  queryLaboratoryItemList(name) {
    const {queryLaboratoryItemList, clinic_id} = this.props
    queryLaboratoryItemList({name, clinic_id})
  }
  // 检验项目筛选
  getLaboratoryItemOptions() {
    const { laboratoryItems } = this.props
    // console.log('laboratoryItems=====', laboratoryItems)
    let array = []
    for (let key in laboratoryItems) {
      const { name, clinic_laboratory_item_id, default_result, en_name, unit_name } = laboratoryItems[key]
      // console.log(doseForms[key])
      array.push({
        value: clinic_laboratory_item_id,
        label: name,
        default_result,
        en_name,
        unit_name
      })
    }
    return array
  }
  setChildrenItemValue(e, index, key, type = 1) {
    let { relateInfo } = this.state
    let value = e
    if (type === 1) {
      value = e.target.value
    }
    let array = relateInfo.items // [...references]
    array[index][key] = value
    relateInfo.items = array
    this.setState({ relateInfo })
  }
  setChildrenItemValue1(e, index, key, type = 1) {
    let { relateItems } = this.state
    let value = e
    if (type === 1) {
      value = e.target.value
    }
    let array = relateItems // [...references]
    array[index][key] = value
    relateItems = array
    this.setState({ relateItems })
  }
  // 设置选中显示
  getSelectValue(value, array, type) {
    for (let obj of array) {
      // console.log('obj.value======', obj.value, value)
      if (type) {
        if (obj.label === value) {
          return obj
        }
      } else {
        if (obj.value === value) {
          return obj
        }
      }
    }
    return null
  }
  renderItems(associations) {
    const {relateInfo} = this.state
    relateInfo.items = associations
    this.setState({
      relateItems: associations,
      relateInfo
    })
  }
  render() {
    const {relateItem} = this.props
    let {relateInfo} = this.state
    console.log('render ==== associations===', relateInfo)
    return (
      <div className={'doctorList'}>
        <div className={'doctorList_top'}>
          <span>关联项目</span>
          <div />
          <span onClick={() => {
            this.props.closeMask()
            // relateItems = []
            // relateInfo.items = []
            // this.setState({relateItems, relateInfo})
          }}>×</span>
        </div>
        <div className={'formContent'}>
          <span>{relateItem.laboratory_name}</span>
          <ul>
            <li>
              <div>排序号</div>
              <div style={{flex: 2}}>项目名称</div>
              <div>英文缩写</div>
              <div>单位</div>
              {/* <div>参考值</div> */}
              <div>默认结果</div>
              <div onClick={() => { this.addColumn() }}>增加</div>
            </li>
            {relateInfo.items.map((item, index) => {
              return (
                <li key={index}>
                  <div>
                    <input
                      readOnly
                      type='number'
                      placeholder={'序号可修改'}
                      value={index + 1}
                    />
                  </div>
                  <div style={{flex: 2}}>
                    <div>
                      <Select
                        placeholder={'请选择'}
                        height={32}
                        value={this.getSelectValue(item.clinic_laboratory_item_id, this.getLaboratoryItemOptions())}
                        options={this.getLaboratoryItemOptions()}
                        onChange={({value, label, default_result, en_name, unit_name}) => {
                          this.setChildrenItemValue(label, index, 'name', 2)
                          this.setChildrenItemValue(value, index, 'clinic_laboratory_item_id', 2)
                          this.setChildrenItemValue(default_result, index, 'default_result', 2)
                          this.setChildrenItemValue(en_name, index, 'en_name', 2)
                          this.setChildrenItemValue(unit_name, index, 'unit_name', 2)
                        }}
                        onInputChange={keyword => { this.queryLaboratoryItemList(keyword) }}
                      />
                    </div>
                  </div>
                  <div>{item.en_name}</div>
                  <div>{item.unit_name}</div>
                  {/* <div>参考值</div> */}
                  <div>
                    <input
                      type='text'
                      placeholder={'默认结果'}
                      value={item.default_result}
                      onChange={e => {
                        this.setChildrenItemValue(e, index, 'default_result')
                      }}
                    />
                  </div>
                  <div onClick={() => { this.removeColumn(index) }}>删除</div>
                </li>
              )
            })}
          </ul>
        </div>
        <div className={'formBottom'}>
          <div>
            <button>取消</button>
            <button onClick={() => { this.submit() }}>保存</button>
          </div>
        </div>
        {this.style()}
      </div>
    )
  }
}
