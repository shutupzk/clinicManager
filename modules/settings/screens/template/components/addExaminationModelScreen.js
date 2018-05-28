import React, { Component } from 'react'
import { connect } from 'react-redux'
import { queryExaminationList, examinationModelCreate, queryExaminationOrganList } from '../../../../../ducks'
import { Select, Confirm } from '../../../../../components'

// 病历
class AddExaminationModelScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showChooseOrgan: false,
      is_common: false,
      status: true,
      examines: [],
      selOrgans: []
    }
  }

  componentDidMount() {
    const { queryExaminationOrganList } = this.props
    queryExaminationOrganList({ limit: 1000 }, true)
  }

  // 验证字段
  validateData(data) {
    if (!data.model_name || data.model_name === '') {
      this.setState({ model_nameFailed: true })
      return false
    }
    return true
  }

  queryExaminationList(keyword) {
    const { queryExaminationList, clinic_id } = this.props
    if (keyword) {
      queryExaminationList({ clinic_id, status: true, keyword })
    }
  }

  getNameOptions() {
    const { examinations } = this.props
    let array = []
    for (let key in examinations) {
      const { clinic_examination_id, name, organ } = examinations[key]
      array.push({
        value: clinic_examination_id,
        label: name,
        organ
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
    const { examines } = this.state
    this.setState({ examines: [...examines, {}] })
  }

  removeColumn(index) {
    const { examines } = this.state
    let array = [...examines]
    array.splice(index, 1)
    this.setState({ examines: array })
  }

  setItemValue(e, index, key, type = 1) {
    const { examines } = this.state
    let value = e
    if (type === 1) {
      value = e.target.value
    }
    let array = [...examines]
    array[index][key] = value
    this.setState({ examines: array })
  }

  async examinationModelCreate() {
    const { examinationModelCreate, personnel_id, backToList } = this.props
    const { examines, model_name, is_common } = this.state
    let items = []
    for (let { clinic_examination_id, times, organ, illustration } of examines) {
      items.push({
        clinic_examination_id: clinic_examination_id + '',
        times: times ? times + '' : '',
        organ: organ ? organ + '' : '',
        illustration: illustration ? illustration + '' : ''
      })
    }
    let error = await examinationModelCreate({ model_name, is_common, operation_id: personnel_id, items })
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
              value={model_name}
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

  // 选择部位
  chooseOrgan() {
    const { showChooseOrgan, index } = this.state
    if (!showChooseOrgan) return null
    const { examinationOrgans } = this.props
    const organs = examinationOrgans || []
    let { selOrgans } = this.state
    console.log('selOrgans====', selOrgans)
    return (
      <div className={'mask'}>
        <div className={'doctorList'}>
          <div className={'doctorList_top'}>
            <span>检查部位</span>
            <div />
            <span onClick={() => this.setState({ showChooseOrgan: false })}>×</span>
          </div>
          <div className={'contentList'}>
            <ul>
              {organs.map(({ name }, index) => {
                return (
                  <li key={index}>
                    <label>
                      <input
                        type='checkbox'
                        checked={selOrgans.indexOf(name) > -1}
                        onChange={e => {
                          if (e.target.checked) {
                            selOrgans.push(name)
                            this.setState({ selOrgans })
                          } else {
                            // let array = selOrgans
                            for (let i = 0; i < selOrgans.length; i++) {
                              if (selOrgans[i] === name) {
                                selOrgans.splice(i, 1)
                              }
                            }
                            this.setState({ selOrgans })
                          }
                        }}
                      />
                      {name}
                    </label>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className={'buttonBtn'}>
            <button onClick={() => this.setState({ showChooseOrgan: false })}>取消</button>
            <button
              onClick={() => {
                let organ = ''
                for (let i = 0; i < selOrgans.length; i++) {
                  if (i < selOrgans.length - 1) {
                    organ += selOrgans[i] + '，'
                  } else {
                    organ += selOrgans[i]
                  }
                }
                this.setItemValue(organ, index, 'organ', 2)
                this.setState({ showChooseOrgan: false })
              }}
            >
              确定
            </button>
          </div>
        </div>
        <style jsx>{`
          .contentList {
            width: 100%;
            height: 500px;
            // background: #a0a0a0;
            display: flex;
          }
          .contentList ul {
            width: 90%;
            margin: 10px auto;
          }
          .contentList ul li {
            float: left;
            width: 50%;
            font-size: 16px;
            // cursor: pointer;
            margin: 10px 0 0 0;
          }
          .contentList ul li label {
            cursor: pointer;
          }
          .contentList ul li input {
          }
          .buttonBtn {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 10px auto;
          }
        `}</style>
      </div>
    )
  }

  renderItems() {
    const { examines } = this.state
    return (
      <div style={{ width: '100%' }}>
        <div className='tableDIV'>
          <ul>
            <li>
              <div>名称</div>
              <div>次数</div>
              <div>部位</div>
              <div>说明</div>
              <div>
                <div onClick={() => this.addColumn()} style={{ width: '80px', height: '20px', lineHeight: '20px', border: 'none', color: 'rgba(42,205,200,1)', cursor: 'pointer' }}>
                  新增
                </div>
              </div>
            </li>
            {examines.map((item, index) => {
              let nameOptions = this.getNameOptions(examines[index])
              return (
                <li key={index}>
                  <div>
                    <div style={{ width: '100%' }}>
                      <Select
                        value={this.getSelectValue(examines[index].clinic_examination_id, nameOptions)}
                        onChange={({ value, label, organ }) => {
                          this.setItemValue(value, index, 'clinic_examination_id', 2)
                          this.setItemValue(label, index, 'name', 2)
                          if (organ) {
                            this.setItemValue(organ, index, 'organ', 2)
                            let selOrgans = organ.split(',')
                            this.setState({ selOrgans })
                          }
                        }}
                        placeholder='搜索名称'
                        height={38}
                        onInputChange={keyword => this.queryExaminationList(keyword)}
                        options={nameOptions}
                      />
                    </div>
                  </div>
                  <div>
                    <input value={examines[index].times} type='number' min={0} max={100} onChange={e => this.setItemValue(e, index, 'times')} />
                  </div>
                  <div>
                    <input value={examines[index].organ} type='text' readOnly />
                    <button onClick={() => this.setState({ showChooseOrgan: true, index })}>选择</button>
                  </div>
                  <div>
                    <input value={examines[index].illustration} type='text' onChange={e => this.setItemValue(e, index, 'illustration')} />
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
                this.examinationModelCreate()
              }}
            >
              保存
            </button>
          </div>
        </div>
        {this.style()}
        {this.chooseOrgan()}
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
  console.log('state=====', state)
  return {
    clinic_id: state.user.data.clinic_id,
    examinations: state.examinations.data,
    examinationOrgans: state.examinationOrgans.array_data,
    personnel_id: state.user.data.id
  }
}

export default connect(mapStateToProps, {
  queryExaminationList,
  examinationModelCreate,
  queryExaminationOrganList
})(AddExaminationModelScreen)
