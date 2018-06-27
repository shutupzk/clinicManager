import React, { Component } from 'react'
import { connect } from 'react-redux'
// import Router from 'next/router'
// import { Select } from '../../../../../components'
import {
  queryLaboratoryList,
  LaboratoryPatientModelCreate,
  LaboratoryPatientModelUpdate,
  LaboratoryPatientModelDetail
} from '../../../../../ducks'
import { Select, Confirm } from '../../../../../components'

// 病历
class AddLaboratoryModelScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      is_common: false,
      status: true,
      laboratories: []
    }
  }
  async componentDidMount() {
    const {showWay, laboratory_patient_model_id, LaboratoryPatientModelDetail} = this.props
    if (showWay === 2) {
      let data = await LaboratoryPatientModelDetail({laboratory_patient_model_id})
      if (data) {
        console.log('LaboratoryPatientModelDetail=====', data)
        this.setState({
          is_common: data.is_common,
          laboratories: data.items,
          laboratory_patient_model_id: data.laboratory_patient_model_id,
          model_name: data.model_name,
          status: data.status
        })
      }
    }
  }
  // 验证字段
  validateData(data) {
    if (!data.model_name || data.model_name === '') {
      this.setState({ model_nameFailed: true })
      return false
    }
    return true
  }

  queryLaboratoryList(keyword) {
    const { queryLaboratoryList, clinic_id } = this.props
    if (keyword) {
      queryLaboratoryList({ clinic_id, status: true, keyword })
    }
  }

  getNameOptions(defaultOption) {
    const { laboratories } = this.props
    let array = []
    for (let key in laboratories) {
      const { clinic_laboratory_id, laboratory_name } = laboratories[key]
      array.push({
        value: clinic_laboratory_id,
        label: laboratory_name,
        ...laboratories[key]
      })
    }
    return array
  }

  getSelectValue(value, array) {
    for (let obj of array) {
      if (obj.value === value) {
        return obj
      }
    }
    return null
  }

  addColumn() {
    const { laboratories } = this.state
    this.setState({ laboratories: [...laboratories, {}] })
  }

  removeColumn(index) {
    const { laboratories } = this.state
    let array = [...laboratories]
    array.splice(index, 1)
    this.setState({ laboratories: array })
  }

  setItemValue(e, index, key, type = 1) {
    const { laboratories } = this.state
    let value = e
    if (type === 1) {
      value = e.target.value
    }
    let array = [...laboratories]
    array[index][key] = value
    this.setState({ laboratories: array })
  }

  async LaboratoryPatientModelCreate() {
    const { LaboratoryPatientModelCreate, personnel_id, backToList } = this.props
    const { laboratories, model_name, is_common } = this.state
    let items = []
    for (let { clinic_laboratory_id, times, illustration } of laboratories) {
      items.push({
        clinic_laboratory_id: clinic_laboratory_id + '',
        times: times + '',
        illustration: illustration + ''
      })
    }
    let error = await LaboratoryPatientModelCreate({ model_name, is_common, operation_id: personnel_id, items })
    if (error) {
      return this.refs.myAlert.alert('保存失败', error)
    } else {
      this.setState({ showSaveModel: false })
      this.refs.myAlert.alert('保存成功')
      backToList()
    }
  }
  async LaboratoryPatientModelUpdate() {
    const { LaboratoryPatientModelUpdate, personnel_id, backToList } = this.props
    const { laboratories, model_name, is_common, laboratory_patient_model_id } = this.state
    let items = []
    for (let { clinic_laboratory_id, times, illustration } of laboratories) {
      items.push({
        clinic_laboratory_id: clinic_laboratory_id + '',
        times: times + '',
        illustration: illustration + ''
      })
    }
    items = JSON.stringify(items)
    let error = await LaboratoryPatientModelUpdate({ laboratory_patient_model_id, model_name, is_common, operation_id: personnel_id, items })
    if (error) {
      return this.refs.myAlert.alert('保存失败', error)
    } else {
      this.setState({ showSaveModel: false })
      this.refs.myAlert.alert('保存成功')
      backToList()
    }
  }

  // 检验项目基本信息
  renderBaseInfoBlank() {
    const { status, is_common, model_name } = this.state
    return (
      <div>
        <ul>
          <li style={{ width: '48%' }}>
            <label>
              模板名称<b style={{ color: 'red' }}>*</b>
            </label>
            <input
              type='text'
              placeholder={'model_name'}
              value={model_name || ''}
              onChange={e => {
                let model_name = e.target.value
                this.setState({ model_name })
              }}
            />
            {this.state.model_nameFailed || model_name === '' || !model_name ? <div style={{ color: 'red', fontSize: '12px' }}>此为必填项</div> : ''}
          </li>
          <li style={{ width: '24%' }}>
            <label>模板类型</label>
            <div>
              <label>
                <input
                  type='radio'
                  name={'is_common'}
                  checked={is_common}
                  onChange={e => {
                    this.setState({ is_common: true })
                  }}
                />
                通用
              </label>
              <label>
                <input
                  type='radio'
                  name={'is_common'}
                  checked={!is_common}
                  onChange={e => {
                    this.setState({ is_common: false })
                  }}
                />
                个人
              </label>
            </div>
          </li>
          <li style={{ width: '24%' }}>
            <label>状态</label>
            <div>
              <label>
                <input
                  type='radio'
                  name={'status'}
                  checked={status}
                  onChange={e => {
                    this.setState({ status: true })
                  }}
                />
                正常
              </label>
              <label>
                <input
                  type='radio'
                  name={'status'}
                  checked={!status}
                  onChange={e => {
                    this.setState({ status: false })
                  }}
                />
                停用
              </label>
            </div>
          </li>
        </ul>
      </div>
    )
  }

  renderItems() {
    const { laboratories } = this.state
    return (
      <div style={{ width: '100%' }}>
        <div className='tableDIV'>
          <ul>
            <li>
              <div>名称</div>
              <div>次数</div>
              <div>说明</div>
              <div>
                <div onClick={() => this.addColumn()} style={{ width: '80px', height: '20px', lineHeight: '20px', border: 'none', color: 'rgba(42,205,200,1)', cursor: 'pointer' }}>
                  新增
                </div>
              </div>
            </li>
            {laboratories.map((item, index) => {
              let nameOptions = this.getNameOptions(item)
              return (
                <li key={index}>
                  <div>
                    <div style={{ width: '100%' }}>
                      <Select
                        value={this.getSelectValue(item.clinic_laboratory_id, nameOptions)}
                        onChange={({ value, label }) => {
                          this.setItemValue(value, index, 'clinic_laboratory_id', 2)
                          this.setItemValue(label, index, 'name', 2)
                        }}
                        placeholder='搜索名称'
                        height={38}
                        onInputChange={keyword => this.queryLaboratoryList(keyword)}
                        options={nameOptions}
                      />
                    </div>
                  </div>
                  <div>
                    <input value={item.times} type='number' min={0} max={100} onChange={e => this.setItemValue(e, index, 'times')} />
                  </div>
                  <div>
                    <input value={item.illustration} type='text' onChange={e => this.setItemValue(e, index, 'illustration')} />
                  </div>
                  <div>
                    <div onClick={() => this.removeColumn(index)} style={{ width: '80px', height: '20px', lineHeight: '20px', border: 'none', color: 'red', cursor: 'pointer', textAlign: 'center' }}>
                      删除
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
        {this.style()}
      </div>
    )
  }

  render() {
    const {showWay} = this.props
    return (
      <div className={'contentCenter'}>
        <div className={'commonBlank baseInfoBlank'}>
          <span />
          {this.renderBaseInfoBlank()}
          {this.renderItems()}
        </div>
        <div className={'bottomBtn'}>
          <div>
            <button>取消</button>
            <button
              onClick={() => {
                if (showWay === 2) {
                  this.LaboratoryPatientModelUpdate()
                } else {
                  this.LaboratoryPatientModelCreate()
                }
              }}
            >
              保存
            </button>
          </div>
        </div>
        {this.style()}
        <Confirm ref='myAlert' />
      </div>
    )
  }

  style() {
    return (
      <style jsx={'1'}>{`
        .contentCenter {
          // background:#a0a0a0;
          display: flex;
          flex-direction: column;
        }
        .contentCenter button {
          background: rgba(255, 255, 255, 1);
          border-radius: 4px;
          border: 1px solid #d9d9d9;
          height: 32px;
          cursor: pointer;
          margin-left: 10px;
          font-size: 14px;
          font-family: MicrosoftYaHei;
          color: rgba(0, 0, 0, 0.65);
          padding: 0 15px;
        }
        .contentCenter button:hover {
          background: rgba(42, 205, 200, 1);
          color: rgba(255, 255, 255, 1);
          border: 1px solid rgba(42, 205, 200, 1);
        }
        .bottomBtn {
          // background:#909090;
          width: 987px;
          margin: 0 0 30px 0;
          display: flex;
          align-items: center;
        }
        .bottomBtn > div {
          margin: 0 auto;
        }
        .bottomBtn button {
        }
        .commonBlank {
          background: rgba(255, 255, 255, 1);
          box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.2);
          border-radius: 4px;
          margin-bottom: 20px;
          // width:1038px;
          min-width: 1038px;
          display: flex;
          flex-direction: column;
          padding: 5px 30px;
        }
        .commonBlank > span {
          font-size: 18px;
          height: 40px;
          border-bottom: 1px solid #d9d9d9;
          align-items: center;
          display: flex;
        }
        .commonBlank > div {
          display: flex;
          margin: 10px 0;
        }
        .commonBlank > div > input {
          background: rgba(245, 248, 249, 1);
          border-radius: 4px;
          border: 1px solid #d9d9d9;
          height: 30px;
          padding: 0;
        }
        .commonBlank > div > button {
          background: rgba(255, 255, 255, 1);
          border-radius: 4px;
          border: 1px solid #d9d9d9;
          height: 32px;
          cursor: pointer;
          margin-left: 10px;
          font-size: 14px;
          font-family: MicrosoftYaHei;
          color: rgba(0, 0, 0, 0.65);
          padding: 0 15px;
        }
        .commonBlank > div > ul {
          // background:#a0a0a0;
          margin: 0 auto;
          width: 100%;
        }
        .commonBlank > div > ul > li {
          float: left;
          width: 100%;
          display: flex;
          flex-direction: column;
          min-height: 70px;
          margin-right: 1%;
          margin-top: 5px;
        }
        .commonBlank > div > ul > li > label {
          height: 25px;
        }
        .commonBlank > div > ul > li > textarea {
          background: rgba(245, 248, 249, 1);
          border-radius: 4px;
          border: 1px solid #d9d9d9;
          height: 60px;
          padding: 0;
          resize: none;
        }
        .commonBlank > div > ul > li > div > input,
        .commonBlank > div > ul > li > input {
          background: rgba(245, 248, 249, 1);
          border-radius: 4px;
          border: 1px solid #d9d9d9;
          height: 30px;
          padding: 0;
        }
        .commonBlank > div > ul > li > div {
        }
        .commonBlank > div > ul > li > div > label {
          margin-left: 15px;
          display: flex;
          align-items: center;
          float: left;
          height: 30px;
        }
        .commonBlank > div > ul > li > div > label:first-child {
          margin-left: 0;
        }
        .commonBlank > div > ul > li > div.douInput {
          display: flex;
          align-items: center;
        }
        .commonBlank > div > ul > li > div.douInput > input {
          width: 100px;
        }
        .commonBlank > div > ul > li > div.douInput > span {
          margin: 0 5px;
        }
        .commonBlank > div > ul > li.tableLi {
          width: 100%;
          margin: 20px 0;
          height: auto;
        }
        .commonBlank > div > ul > li.tableLi > div {
          // background: #909090;
          float: left;
          width: 1000px;
        }
        .commonBlank > div > ul > li.tableLi > div > ul {
          width: 100%;
          border-top: 1px solid #d8d8d8;
        }
        .commonBlank > div > ul > li.tableLi > div > ul > li {
          display: flex;
          float: left;
          width: 100%;
          // flex: 1;
          height: 40px;
          align-items: center;
          justify-content: center;
          border-right: 1px solid #d8d8d8;
          border-bottom: 1px solid #d8d8d8;
        }
        .commonBlank > div > ul > li > ul > li:first-child,
        .commonBlank > div > ul > li.tableLi > div > ul > li:first-child {
          background: rgba(250, 250, 250, 1);
          box-shadow: 1px 1px 0px 0px rgba(232, 232, 232, 1);
        }
        .commonBlank > div > ul > li > ul {
          width: 100%;
          // background: #eeeeee;
          border-top: 1px solid #d8d8d8;
        }
        .commonBlank > div > ul > li > ul > li {
          display: flex;
          height: 40px;
          align-items: center;
          justify-content: center;
          border-right: 1px solid #d8d8d8;
          border-bottom: 1px solid #d8d8d8;
        }
        .commonBlank > div > ul > li > ul > li > div {
          flex: 1;
          align-items: center;
          display: flex;
          justify-content: center;
          border-left: 1px solid #d8d8d8;
          height: 40px;
        }
        .commonBlank > div > ul > li > ul > li > div > div {
          width: 100%;
        }
        .commonBlank > div > ul > li > ul > li > div > input {
          background: transparent;
          border-radius: 4px;
          border: 1px solid #d9d9d9;
          height: 36px;
          padding: 0;
          // width:100%;
          flex: 1;
        }

        .commonBlank > div > ul > li.tableLi > div > ul > li > div {
          flex: 2;
          height: 40px;
          border-left: 1px solid #d8d8d8;
          float: left;
          line-height: 40px;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .commonBlank > div > ul > li.tableLi > div > ul > li > div:last-child {
          flex: 1;
        }
        .commonBlank > div > ul > li.tableLi > div > ul > li > div > div {
          flex: 1;
        }
        .commonBlank > div > ul > li.tableLi > div > ul > li > div > div {
        }
        .commonBlank > div > ul > li.tableLi > div > ul > li > div > div > input {
          background: rgba(245, 248, 249, 1);
          border-radius: 4px;
          border: 1px solid #d9d9d9;
          height: 30px;
          padding: 0;
          width: 100%;
        }
        .commonBlank > div > ul > li.tableLi > div > ul > li > div > div > span {
          margin: 0 5px;
        }
        .commonBlank > div > ul > li.tableLi > div > ul > li > div > div.douInput {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .tableDIV {
          display: flex;
          width: 100%;
          background: rgba(255, 255, 255, 1);
          border-radius: 4px;
        }
        .tableDIV ul {
          width: 100%;
          display: flex;
          flex-direction: column;
          border: 1px solid #e9e9e9;
          border-bottom: none;
        }
        .tableDIV ul li {
          display: flex;
          height: 50px;
          border-bottom: 1px solid #e9e9e9;
          line-height: 40px;
          text-align: center;
        }
        .tableDIV ul li:nth-child(1) {
          background: rgba(247, 247, 247, 1);
        }
        .tableDIV ul li > div {
          flex: 2;
          border-left: 1px #e9e9e9 dashed;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
        }
        .tableDIV ul li > div > input {
          width: 90%;
          height: 30px;
          border-radius: 4px;
          outline-style: none;
          border: none;
        }
        .tableDIV ul li > div:nth-child(1) {
          flex: 3;
        }
      `}</style>
    )
  }
}

const mapStateToProps = state => {
  console.log('state=====', state.laboratories)
  return {
    clinic_id: state.user.data.clinic_id,
    laboratories: state.laboratories.data,
    personnel_id: state.user.data.id
  }
}

export default connect(mapStateToProps, {
  queryLaboratoryList,
  LaboratoryPatientModelCreate,
  LaboratoryPatientModelUpdate,
  LaboratoryPatientModelDetail
})(AddLaboratoryModelScreen)
