import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Select } from '../../../../../components'
import { queryMaterialList } from '../../../../../ducks'

// 材料费
class MaterialScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      eaterials: []
    }
  }

  queryMaterialList(keyword) {
    const { queryMaterialList, clinic_id } = this.props
    if (keyword) {
      queryMaterialList({ clinic_id, keyword })
    }
  }

  getNameOptions() {
    const { materials } = this.props
    let array = []
    for (let key in materials) {
      const { material_stock_id, name, specification, unit_id, unit_name, stock_amount } = materials[key]
      array.push({
        value: material_stock_id,
        label: name,
        specification,
        unit_id,
        unit_name,
        stock_amount
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
    const { eaterials } = this.state
    this.setState({ eaterials: [...eaterials, {}] })
  }

  removeColumn(index) {
    const { eaterials } = this.state
    let array = [...eaterials]
    array.splice(index, 1)
    this.setState({ eaterials: array })
  }

  setItemValue(e, index, key, type = 1) {
    const { eaterials } = this.state
    let value = e
    if (type === 1) {
      value = e.target.value
    }
    let array = [...eaterials]
    array[index][key] = value
    this.setState({ eaterials: array })
  }

  render() {
    const { eaterials } = this.state
    const { medicalRecord } = this.props
    return (
      <div className='filterBox'>
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
          <div style={{ height: '65px', width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
            <button style={{ width: '100px', height: '28px', border: '1px solid rgba(42,205,200,1)', borderRadius: '4px', color: 'rgba(42,205,200,1)', marginRight: '64px' }}>选择模板</button>
          </div>
          <div className={'alergyBlank'}>
            <div>
              <label>过敏史</label>
              <input readOnly type='text' value={medicalRecord.allergic_history} />
            </div>
            <div style={{marginLeft: '40px'}}>
              <label>过敏反应</label>
              <input readOnly type='text' value={medicalRecord.allergic_reaction} />
            </div>
          </div>
          <div className='tableDIV'>
            <ul>
              <li>
                <div>名称</div>
                <div>规格</div>
                <div>单位</div>
                <div>库存</div>
                <div>次数</div>
                <div>说明</div>
                <div>
                  <div onClick={() => this.addColumn()} style={{ width: '80px', height: '20px', lineHeight: '20px', border: 'none', color: 'rgba(42,205,200,1)', cursor: 'pointer' }}>
                    新增
                  </div>
                </div>
              </li>
              {eaterials.map((item, index) => {
                let nameOptions = this.getNameOptions()
                return (
                  <li key={index}>
                    <div>
                      <div style={{ width: '100%' }}>
                        <Select
                          value={this.getSelectValue(eaterials[index].material_stock_id, nameOptions)}
                          onChange={({ value, label, specification, unit_id, unit_name, stock_amount }) => {
                            this.setItemValue(value, index, 'material_stock_id', 2)
                            this.setItemValue(label, index, 'name', 2)
                            this.setItemValue(specification, index, 'specification', 2)
                            this.setItemValue(unit_id, index, 'unit_id', 2)
                            this.setItemValue(unit_name, index, 'unit_name', 2)
                            this.setItemValue(stock_amount, index, 'stock_amount', 2)
                          }}
                          placeholder='搜索名称'
                          height={38}
                          onInputChange={keyword => this.queryMaterialList(keyword)}
                          options={nameOptions}
                        />
                      </div>
                    </div>
                    <div>
                      <input readOnly value={eaterials[index].specification} type='text' min={0} max={100} onChange={e => this.setItemValue(e, index, 'specification')} />
                    </div>
                    <div>
                      <input readOnly value={eaterials[index].unit_name} type='text' min={0} max={100} onChange={e => this.setItemValue(e, index, 'unit_name')} />
                    </div>
                    <div>
                      <input readOnly value={eaterials[index].stock_amount} type='text' min={0} max={100} onChange={e => this.setItemValue(e, index, 'stock_amount')} />
                    </div>
                    <div>
                      <input value={eaterials[index].times} type='number' min={0} max={100} onChange={e => this.setItemValue(e, index, 'times')} />
                    </div>
                    <div>
                      <input value={eaterials[index].instruction} type='text' onChange={e => this.setItemValue(e, index, 'instruction')} />
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
          <div className='formListBottom'>
            <div className={'bottomCenter'}>
              <button className={'cancel'}>取消</button>
              <button className={'save'}>保存</button>
            </div>
            <div className={'bottomRight'}>
              <button>存为模板</button>
              <button>打印清单</button>
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
            .alergyBlank {
              display: flex;
              flex-direction: row;
              margin: 0 65px 20px 47px;
            }
            .alergyBlank div {
              flex: 1;
              display: flex;
              flex-direction: column;
            }
            .alergyBlank div label {
              width: 98%;
            }
            .alergyBlank div input {
              width: 100%;
              height: 30px;
              background: rgba(245, 248, 249, 1);
              border-radius: 4px;
              border: 1px solid #d8d8d8;
              margin-top: 15px;
            }
          `}
        </style>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    clinic_id: state.user.data.clinic_id,
    materials: state.materials.data,
    medicalRecord: state.medicalRecords.data
  }
}

export default connect(mapStateToProps, { queryMaterialList })(MaterialScreen)
