import React, { Component } from 'react'
import Router from 'next/router'
import { connect } from 'react-redux'
import { styles } from '../../../components/styles'
import { theme } from '../../../components'
// import { queryBaseApis, selectBaseApi, removeBaseApi } from '../../../ducks'

class AddReservation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pageType: 1
    }
  }
  async submit() {}
  back() {
    Router.push('/treatment')
  }
  componentWillMount() {
    // const { queryBaseApis } = this.props
    // queryBaseApis()
  }
  showBaseInfo() {
    return (
      <div className={'formList'}>
        <div className={'bgDiv'}>
          <ul>
            <li style={{ width: '48%' }}>
              <label style={thisStyles.label}>
                就诊人名称：<b style={{ color: 'red' }}> *</b>
              </label>
              <input style={thisStyles.input} type='text' value={''} />
            </li>
            <li style={{ width: '48%' }}>
              <label style={thisStyles.label}>身份证号码：</label>
              <input style={thisStyles.input} type='text' value={''} />
            </li>
            <li style={{ width: '24%' }}>
              <label style={thisStyles.label}>
                年龄：<b style={{ color: 'red' }}> *</b>
              </label>
              <input style={thisStyles.input} type='text' value={''} />
            </li>
            <li style={{ width: '24%' }}>
              <label style={thisStyles.label}>
                性别：<b style={{ color: 'red' }}> *</b>
              </label>
              <div style={thisStyles.input}>
                <input id='man' type='radio' name='sex' />
                <label htmlFor='man'>男</label>
                <input id='woman' type='radio' name='sex' style={{ marginLeft: '15px' }} />
                <label htmlFor='woman'>女</label>
              </div>
            </li>
            <li style={{ width: '48%' }}>
              <label style={thisStyles.label}>
                手机号码：<b style={{ color: 'red' }}> *</b>
              </label>
              <input style={thisStyles.input} type='text' value={''} />
            </li>
            <li style={{ width: '100%' }}>
              <label style={thisStyles.label}>住址：</label>
              <div className={'innerDiv'} style={{ width: '100%', float: 'left' }}>
                <select>
                  <option>省</option>
                </select>
                <select>
                  <option>市</option>
                </select>
                <select>
                  <option>区</option>
                </select>
                <input type='text' value={''} />
              </div>
            </li>
            <li style={{ width: '24%', marginRight: '1%' }}>
              <label style={thisStyles.label}>预约科室</label>
              <input style={thisStyles.input} type='text' value={''} />
            </li>
            <li style={{ width: '24%', marginRight: '1%' }}>
              <label style={thisStyles.label}>预约医生</label>
              <input style={thisStyles.input} type='text' value={''} />
            </li>
            <li style={{ width: '24%', marginRight: '1%' }}>
              <label style={thisStyles.label}>
                预约类型：<b style={{ color: 'red' }}> *</b>
              </label>
              <div style={thisStyles.input} type='text' value={''}>
                <input id='first' type='radio' name='type' />
                <label htmlFor='first'>首诊</label>
                <input id='referral' type='radio' name='type' style={{ marginLeft: '15px' }} />
                <label htmlFor='referral'>复诊</label>
                <input id='operate' type='radio' name='type' style={{ marginLeft: '15px' }} />
                <label htmlFor='operate'>术后复诊</label>
              </div>
            </li>
            <li style={{ width: '24%', marginRight: '1%' }}>
              <label style={thisStyles.label}>职业：</label>
              <input style={thisStyles.input} type='text' value={''} />
            </li>
          </ul>
          <div style={{ float: 'left', width: '1000px', height: '60px' }}>
            <button className='commonBtn' style={{ margin: '10px 0 0 300px' }} onClick={() => this.back(this.props)}>
              返回
            </button>
            <button className='saveBtn' style={{ margin: '10px 0 0 30px', float: 'left' }} onClick={() => this.submit(this.props)}>
              保存
            </button>
          </div>
        </div>
        <style>
          {`
            .bgDiv{
              margin: 31px 0 0 66px;
              width:1098px;
              height:637px; 
              background:rgba(255,255,255,1);
              box-shadow: 0px 2px 8px 0px rgba(0,0,0,0.2) 
              border-radius: 4px ; 
            }
            .innerDiv{
              width: '100%'; float: 'left';
            }
            .innerDiv input{
              width: 600px;
              height: 30px;
              background: rgba(245, 248, 249, 1);
              border-radius: 4px;
              border: 1px solid #d9d9d9;
            }
            .innerDiv select{
              width: 96px;
              height: 34px;
              background: rgba(255, 255, 255, 1);
              border-radius: 4px;
              float: left;
              margin-right: 8px;
              border: 1px solid #d9d9d9;
            }
          `}
        </style>
      </div>
    )
  }

  render() {
    return (
      <div style={{width: '100%'}}>
        {this.showBaseInfo()}
      </div>
    )
  }
}

const thisStyles = {
  label: {
    float: 'left',
    width: '50%'
  },
  input: {
    float: 'left',
    width: '90%',
    marginTop: '17px'
  }
}

export default connect(null)(AddReservation)
