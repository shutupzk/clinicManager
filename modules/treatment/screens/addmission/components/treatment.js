import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Select } from '../../../../../components'

// 病历
class TreatmentScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      treatments: []
    }
  }

  getNameOptions() {
    return [{ value: 1, label: '静脉输液（门诊/不含输液器)' }, { value: 2, label: '静脉输液' }]
  }

  getUnitoptions() {
    return [{ value: 1, label: '次' }, { value: 2, label: '个' }]
  }

  addColumn() {
    const { treatments } = this.state
    this.setState({ treatments: [...treatments, {}] })
  }

  removeColumn(index) {
    const { treatments } = this.state
    let array = [...treatments]
    array.splice(index, 1)
    this.setState({ treatments: array })
  }

  setItemValue(e, index, key) {
    const { treatments } = this.state
    let value = e.target.value
    let array = [...treatments]
    array[index][key] = value
    this.setState({ treatments: array })
  }

  render() {
    const { treatments } = this.state
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
                <div>单位</div>
                <div>次数</div>
                <div>说明</div>
                <div>
                  <div onClick={() => this.addColumn()} style={{ width: '80px', height: '20px', lineHeight: '20px', border: 'none', color: 'rgba(42,205,200,1)', cursor: 'pointer' }}>
                    新增
                  </div>
                </div>
              </li>
              {treatments.map((item, index) => (
                <li key={index}>
                  <div>
                    <div style={{ width: '100%' }}>
                      <Select placeholder='搜索名称' height={38} options={this.getNameOptions()} />
                    </div>
                  </div>
                  <div>
                    <div style={{ width: '100%' }}>
                      <Select placeholder='搜索单位' height={38} options={this.getUnitoptions()} />
                    </div>
                  </div>
                  <div>
                    <input value={treatments[index].times} type='number' min={0} max={100} onChange={e => this.setItemValue(e, index, 'times')} />
                  </div>
                  <div>
                    <input value={treatments[index].instruction} type='text' onChange={e => this.setItemValue(e, index, 'instruction')} />
                  </div>
                  <div>
                    <div onClick={() => this.removeColumn(index)} style={{ width: '80px', height: '20px', lineHeight: '20px', border: 'none', color: 'red', cursor: 'pointer', textAlign: 'center' }}>
                      删除
                    </div>
                  </div>
                </li>
              ))}
            </ul>
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
          `}
        </style>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

export default connect(mapStateToProps, {})(TreatmentScreen)
