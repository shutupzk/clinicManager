import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Select } from '../../../../../components'
import { queryLaboratoryList } from '../../../../../ducks'

// 病历
class LaboratoryScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      laboratories: []
    }
  }

  queryLaboratoryList(keyword) {
    const { queryLaboratoryList, clinic_id } = this.props
    if (keyword) {
      queryLaboratoryList({ clinic_id, status: true, keyword })
    }
  }

  getNameOptions(defaultOption) {
    // return [{ value: 1, label: '肌红蛋白' }, { value: 2, label: '幽门螺杆菌抗原快速检测' }]
    const { laboratories } = this.props
    let array = []
    let has = false
    for (let { clinic_laboratory_id, name } of laboratories) {
      array.push({
        value: clinic_laboratory_id,
        label: name
      })
      if (defaultOption && defaultOption.clinic_laboratory_id === clinic_laboratory_id) has = true
    }
    if (!has && defaultOption && defaultOption.clinic_laboratory_id) {
      const { clinic_laboratory_id, name } = defaultOption
      array = [
        {
          value: clinic_laboratory_id,
          label: name
        },
        array
      ]
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

  getUnitoptions() {
    return [{ value: 1, label: '次' }, { value: 2, label: '个' }]
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

  render() {
    const { laboratories } = this.state
    console.log('laboratories====', laboratories)
    return (
      <div className='filterBox'>
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
          <div style={{ height: '65px', width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
            <button style={{ width: '100px', height: '28px', border: '1px solid rgba(42,205,200,1)', borderRadius: '4px', color: 'rgba(42,205,200,1)', marginRight: '64px' }}>选择模板</button>
          </div>
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
                let nameOptions = this.getNameOptions(laboratories[index])
                return (
                  <li key={index}>
                    <div>
                      <div style={{ width: '100%' }}>
                        <Select
                          value={this.getSelectValue(laboratories[index].clinic_laboratory_id, nameOptions)}
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
                      <input value={laboratories[index].times} type='number' min={0} max={100} onChange={e => this.setItemValue(e, index, 'times')} />
                    </div>
                    <div>
                      <input value={laboratories[index].instruction} type='text' onChange={e => this.setItemValue(e, index, 'instruction')} />
                    </div>
                    <div>
                      <div onClick={() => this.removeColumn(index)} style={{ width: '80px', height: '20px', lineHeight: '20px', border: 'none', color: 'red', cursor: 'pointer', textAlign: 'center' }}>
                        删除
                      </div>
                    </div>
                  </li>
                )
              }
            )}
            </ul>
          </div>
          <div className='formListBottom'>
            <div className={'bottomCenter'}>
              <button className={'cancel'}>取消</button>
              <button className={'save'}>保存</button>
            </div>
            <div className={'bottomRight'}>
              <button>存为模板</button>
              <button>打印申请单</button>
            </div>
          </div>
        </div>
        <style jsx>
          {`
            .tableDIV {
              display: flex;
              width: 987px;
              background: rgba(255, 255, 255, 1);
              border-radius: 4px;
              margin: 0 65px 65px 47px;
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
              width: 80px;
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
          `}
        </style>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    laboratories: state.laboratories.data,
    clinic_id: state.user.data.clinic_id
  }
}

export default connect(mapStateToProps, { queryLaboratoryList })(LaboratoryScreen)
