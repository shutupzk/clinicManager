import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Select } from '../../../../../components'
// 处方
class MedicalRecordScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      c_presc_btn: 0,
      cPrescItemArray: [],
      wPrescItemArray: [],
      selItem: 'wPresc',
      selIndex: 0
    }
  }
  getCNameOptions() {
    return [{ value: 1, label: '黄芪' }, { value: 2, label: '静脉输液' }]
  }
  getWNameOptions() {
    return [{ value: 1, label: '5%葡萄糖注射液1111' }, { value: 2, label: '静脉输液' }]
  }
  getUnitoptions() {
    return [{ value: 1, label: '次' }, { value: 2, label: '个' }, { value: 3, label: '颗' }]
  }
  getSelectValue(value, array) {
    for (let obj of array) {
      if (obj.value === value) {
        return obj
      }
    }
    return null
  }
  // 设置中药药品信息
  setCItemValue(e, index, key, type = 1) {
    const { selIndex, cPrescItemArray } = this.state
    let value = e
    if (type === 1) {
      value = e.target.value
    }
    let array = cPrescItemArray[selIndex].data // [...treatments]
    array[index][key] = value
    cPrescItemArray[selIndex].data = array
    this.setState({ cPrescItemArray })
  }
  // 设置中药药品总信息
  setCInfoValue(e, key, type = 1) {
    const { selIndex, cPrescItemArray } = this.state
    let value = e
    if (type === 1) {
      value = e.target.value
    }
    let info = cPrescItemArray[selIndex].info // [...treatments]
    info[key] = value
    cPrescItemArray[selIndex].info = info
    this.setState({ cPrescItemArray })
  }
  // 添加中药处方项
  addChineseMedicinePres() {
    const { cPrescItemArray } = this.state
    this.setState({ cPrescItemArray: [...cPrescItemArray, {info: {}, data: []}] })
  }
  // 删除中药处方项
  removecPrescItem(index) {
    const { cPrescItemArray } = this.state
    let array = [...cPrescItemArray]
    array.splice(index, 1)
    this.setState({ cPrescItemArray: array })
  }
  // 添加西药处方药品
  addWestMedicinePres() {
    const { wPrescItemArray } = this.state
    this.setState({ wPrescItemArray: [...wPrescItemArray, {}] })
  }
  // 删除西药处方药品
  removeWestMedicinePres(index) {
    const { wPrescItemArray } = this.state
    let array = [...wPrescItemArray]
    array.splice(index, 1)
    this.setState({ wPrescItemArray: array })
  }
  // 显示处方详情
  renderPrescriptionDetail() {
    const { wPrescItemArray } = this.state
    return (
      <div className={'feeScheduleBox'}>
        <ul>
          <li>
            <div>药品名称</div>
            <div>规格</div>
            <div>库存</div>
            <div>单次剂量</div>
            <div>用法</div>
            <div>用药频次</div>
            <div>天数</div>
            <div>总量</div>
            <div>药房</div>
            <div>用药说明</div>
            <div className={'addItem'} onClick={() => {
              this.addWestMedicinePres()
            }}>新增</div>
          </li>
          {wPrescItemArray.map((item, index) => {
            return (
              <li key={index}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div className={'removeItem'} onClick={() => {
                  this.removeWestMedicinePres(index)
                }}>删除</div>
              </li>
            )
          })}
        </ul>
        <style jsx>{`
          .feeScheduleBox{
            margin-left: 0;
            width: 1000px;
          }
          .feeScheduleBox ul li>div:first-child{
            flex:2;
          }
          .addItem{
            color: rgb(42, 205, 200);
            cursor: pointer;
          }
          .removeItem{
            color: red;
            cursor: pointer;
          }
        `}</style>
      </div>
    )
  }
  // 添加中药处方药品
  addCPresc() {
    const {selIndex, cPrescItemArray} = this.state
    cPrescItemArray[selIndex].data.push({})
    this.setState({ cPrescItemArray })
  }
  // 删除中药处方药品
  removecPresc(index) {
    const { selIndex, cPrescItemArray } = this.state
    let array = cPrescItemArray[selIndex].data
    array.splice(index, 1)
    cPrescItemArray[selIndex].data = array
    this.setState({ cPrescItemArray })
  }
  // 中药处方详情
  renderCPrescDetail() {
    const {selIndex, cPrescItemArray} = this.state
    console.log('selIndex=====', selIndex, cPrescItemArray)
    let array = cPrescItemArray[selIndex].data || []
    let info = cPrescItemArray[selIndex].info || {}
    return (
      <div>
        <div className={'tableDIV'}>
          <ul>
            <li>
              <div>药品名称</div>
              <div>库存</div>
              <div>单次剂量</div>
              <div>单位</div>
              <div>特殊要求</div>
              <div>总量</div>
              <div className={'addItem'} onClick={() => {
                this.addCPresc()
              }}>新增</div>
            </li>
            {array.map((item, index) => {
              return (
                <li>
                  <div>
                    <div>
                      <Select
                        value={this.getSelectValue(array[index].drug_id, this.getCNameOptions())}
                        onChange={e => this.setCItemValue(e.value, index, 'drug_id', 2)}
                        placeholder='名称'
                        height={38}
                        options={this.getCNameOptions()}
                      />
                    </div>
                  </div>
                  <div>
                    100000瓶
                  </div>
                  <div>
                    <input
                      value={array[index].dose}
                      type='number'
                      onChange={e => this.setCItemValue(e, index, 'dose')}
                    />
                  </div>
                  <div>
                    <div>
                      <Select
                        value={this.getSelectValue(array[index].unit_id, this.getUnitoptions())}
                        onChange={({ value }) => this.setCItemValue(value, index, 'unit_id', 2)}
                        placeholder='搜索单位'
                        height={38}
                        options={this.getUnitoptions()}
                      />
                    </div>
                  </div>
                  <div>
                    <input
                      value={array[index].special_requirements}
                      type='text'
                      onChange={e => this.setCItemValue(e, index, 'special_requirements')}
                    />
                  </div>
                  <div>
                    <input
                      value={array[index].total_amount}
                      type='number'
                      onChange={e => this.setCItemValue(e, index, 'total_amount')}
                    />
                  </div>
                  <div className={'removeItem'} onClick={() => {
                    this.removecPresc(index)
                  }}>删除</div>
                </li>
              )
            })}
          </ul>
        </div>
        <div className={'tableDIV'}>
          <ul>
            <li>
              <div>用法</div>
              <div>每日剂量</div>
              <div>天数</div>
              <div>单位</div>
              <div>总剂量</div>
              <div>频次</div>
              <div>取药地点</div>
              <div>服药要求</div>
            </li>
            <li>
              <div>
                <input
                  value={info.default_remark}
                  type='text'
                  onChange={e => this.setCInfoValue(e, 'default_remark')}
                />
              </div>
              <div>
                <input
                  value={info.once_dose}
                  type='number'
                  onChange={e => this.setCInfoValue(e, 'once_dose')}
                />
              </div>
              <div>
                <input
                  value={info.days}
                  type='number'
                  onChange={e => this.setCInfoValue(e, 'days')}
                />
              </div>
              <div>
                <div>
                  <Select
                    value={this.getSelectValue(info.unit_id, this.getUnitoptions())}
                    onChange={({ value }) => this.setCInfoValue(value, 'unit_id', 2)}
                    placeholder='搜索单位'
                    height={38}
                    options={this.getUnitoptions()}
                  />
                </div>
              </div>
              <div>
                <input
                  value={info.total_dose}
                  type='number'
                  onChange={e => this.setCInfoValue(e, 'total_dose')}
                />
              </div>
              <div>
                <input
                  value={info.frequency_id}
                  type='number'
                  onChange={e => this.setCInfoValue(e, 'frequency_id')}
                />
              </div>
              <div>
                <input
                  value={info.get_address}
                  type='text'
                  onChange={e => this.setCInfoValue(e, 'get_address')}
                />
              </div>
              <div>
                <input
                  value={info.requirements}
                  type='text'
                  onChange={e => this.setCInfoValue(e, 'requirements')}
                />
              </div>
            </li>
          </ul>
        </div>
        <style jsx>{`
          .tableDIV {
            display: flex;
            width: 987px;
            background: rgba(255, 255, 255, 1);
            border-radius: 4px;
            margin: 30px 0;
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
          .tableDIV ul li > div > div{
            width:100%;
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
          .addItem{
            color: rgb(42, 205, 200);
            cursor: pointer;
          }
          .removeItem{
            color: red;
            cursor: pointer;
          }
        `}</style>
      </div>
    )
  }
  render() {
    const {selItem, cPrescItemArray} = this.state
    return (
      <div className='filterBox'>
        <div className='boxLeft'>
          <div className={'prescriptionLank'}>
            <div className={'prescItem ' + (selItem === 'wPresc' ? 'sel' : '')}
              onClick={() => {
                this.setState({selItem: 'wPresc'})
              }}
            >西/成药处方</div>
            {cPrescItemArray.map((item, index) => {
              return (
                <div className={'prescItem ' + (selItem === 'cPresc' + index ? 'sel' : '')}
                  onClick={() => {
                    this.setState({selItem: 'cPresc' + index, selIndex: index})
                  }}
                >
                  中药处方{index + 1}
                  <i onClick={() => this.removecPrescItem(index)}>×</i>
                </div>
              )
            })}
            <button onClick={e => {
              this.addChineseMedicinePres()
            }}> + 中药处方</button>
          </div>
          <div className={'boxRight'}>
            <button>选择模板</button>
            <button>复制处方</button>
          </div>
        </div>
        <div className={'formListCenter'}>
          <div className={'alergyBlank'}>
            <div>
              <label>过敏史</label>
              <input type='text' />
            </div>
            <div>
              <label>过敏反应</label>
              <input type='text' />
            </div>
          </div>
          {selItem === 'wPresc' ? this.renderPrescriptionDetail() : this.renderCPrescDetail()}
        </div>
        <div className={'formListBottom'}>
          <div className={'bottomCenter'}>
            <button className={'cancel'}>取消</button>
            <button className={'save'}>保存</button>
          </div>
          <div className={'bottomRight'}>
            <button>存为模板</button>
            <button>打印病历</button>
          </div>
        </div>
        <style jsx>{`
          .prescriptionLank{

          }
          .prescriptionLank button,
          .prescriptionLank .prescItem{
            float: left;
            height: 28px;
            border-radius: 4px;
            border: 1px solid #2acdc8;
            color: rgba(42,205,200,1);
            font-size: 12px;
            margin: 16px 0;
            background: none;
            cursor: pointer;
            width:100px;
            margin-left:10px;
            display:flex;
            align-items: center;
            justify-content: center;
            position:relative;
          }
          .prescriptionLank .sel{
            background: rgba(42,205,200,1);
            color: rgba(255,255,255,1);
            border: none;
          }
          .prescItem i{
            position:absolute;
            top: 0;
            right: 2px;
            font-size: 18px;
            line-height: 15px;
          }
          .filterBox {
            flex-direction: column;
            // margin-top: -10px;
            margin-bottom:50px;
          }
          .filterBox .boxLeft {
            border-bottom: 1px solid #dbdbdb;
          }
          .filterBox .boxLeft label{
            float: left;
            margin: 21px 0 21px 15px;
          }
          .filterBox .boxRight button {
            width: auto;
            margin: 16px 15px 16px 0;
            height: 28px;
            border-radius: 4px;
            border: 1px solid #2acdc8;
            color: rgba(42,205,200,1);
            font-size: 12px;
            background: none;
          }
          .formListCenter{
            display:flex;
            width: 1000px;
            margin: 25px auto;
            // background: #ababab;
            flex-direction: column;
          }
          .alergyBlank{
            display:flex;
          }
          .alergyBlank div{
            flex:1;
            width:50%;
            display:flex;
            flex-direction: column;
          }
          .alergyBlank div label{
            width:100%;
          }
          .alergyBlank div input{
            width:479px;
            height:30px; 
            background:rgba(245,248,249,1);
            border-radius: 4px ; 
            border:1px solid #d8d8d8;
            margin-top: 15px;
          }
          .formListBottom {
            width: 1000px;
            margin: 30px auto;
          }
          .formListBottom .bottomCenter {
            margin: 0 auto;
            display: block;
            width: 150px;
          }
          .formListBottom .bottomCenter button.cancel {
            width: 70px;
            height: 26px;
            background: rgba(167, 167, 167, 1);
            color: rgba(255, 255, 255, 1);
            border-radius: 15px;
            border: none;
            float: left;
            cursor: pointer;
          }
          .formListBottom .bottomCenter button.save {
            width: 70px;
            height: 26px;
            background: rgba(49, 176, 179, 1);
            color: rgba(255, 255, 255, 1);
            border-radius: 15px;
            border: none;
            float: right;
            cursor: pointer;
          }
          .formListBottom .bottomRight {
            float: right;
            margin-top: -23px;
          }
          .formListBottom .bottomRight button {
            width: 70px;
            height: 26px;
            border-radius: 15px;
            border: 1px solid #2acdc8;
            font-size: 12px;
            font-family: MicrosoftYaHei;
            color: rgba(49, 176, 179, 1);
            background: transparent;
            margin-right: 10px;
            cursor: pointer;
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

export default connect(mapStateToProps, {})(MedicalRecordScreen)
