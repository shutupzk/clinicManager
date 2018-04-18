import React, { Component } from 'react'
import Router from 'next/router'
import { connect } from 'react-redux'
import { styles } from '../../../components/styles'
import { theme } from '../../../components'
// import { queryBaseApis, selectBaseApi, removeBaseApi } from '../../../ducks'

class AddReservation extends Component {
  constructor (props) {
    super(props)
    this.state = {
      pageType:1
    }
  }
  async submit () {

  }
  back () {
    Router.push('/treatment')
  }
  componentWillMount () {
    // const { queryBaseApis } = this.props
    // queryBaseApis()
  }
  showBaseInfo(){
    return(
      <div className={'formList'}>
          <ul>
            <li>
              <label for='patientName'>就诊人名称：<b style={{color:'red'}}> *</b></label>
              <input type='text' id='patientName' value={'王俊凯'} />
              <i>图标</i>
            </li>
            <li style={{width:'25%'}}>
              <label>身份证号码：</label>
              <a>110108199909211234</a>
            </li>
            <li style={{width:'25%'}}>
              <label>门诊ID：</label>
              <a>000989123654</a>
            </li>
            <li style={{width:'20%'}}>
              <label>年龄：<b style={{color:'red'}}> *</b></label>
              <input type='text' style={{width:'120px'}} />
            </li>
            <li style={{width:'30%'}}>
              <label>性别：<b style={{color:'red'}}> *</b></label>
              <div>
                <input id='man' type='radio' name='sex' />
                <label for='man'>男</label>
                <input id='woman' type='radio' name='sex' style={{marginLeft:'15px'}} />
                <label for='woman'>女</label>
              </div>
            </li>
            <li>
              <label>手机号码：<b style={{color:'red'}}> *</b></label>
              <input type='text' />
            </li>
            <li style={{width:'100%'}}>
              <label>住址：</label>
              <input style={{width:'142px'}} type='text' value={'省'} />
              <input style={{width:'142px',marginLeft:'20px'}} type='text' value={'市'} />
              <input style={{width:'142px',marginLeft:'20px'}} type='text' value={'区'} />
              <input style={{marginLeft:'20px'}} type='text' />
            </li>
            {/* <li>
              <label>接诊科室：</label>
              <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </li> */}
            <li style={{width:'100%'}}>
              <label>就诊类型：<b style={{color:'red'}}> *</b></label>
              <div>
                <input id='first' type='radio' name='type' />
                <label for='first'>首诊</label>
                <input id='referral' type='radio' name='type' style={{marginLeft:'15px'}} />
                <label for='referral'>复诊</label>
                <input id='operate' type='radio' name='type' style={{marginLeft:'15px'}} />
                <label for='operate'>术后复诊</label>
              </div>
            </li>
            {/* <li style={{width:'100%',cursor:'pointer'}}>
              更多：完善健康档案（收起、展开）
            </li> */}
            <li>
              <label>会员卡号：</label>
              <input type='text' />
            </li>
            <li>
              <label>就诊人来源：</label>
              <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </li>
            <li>
              <label>职业：</label>
              <input type='text' />
            </li>
            <li>
              <label>备注：</label>
              <input type='text' />
            </li>
          </ul>
          <div style={{float:'left',width:'1000px',height: '60px'}}>
            <button className='commonBtn' style={{margin:'10px 0 0 300px'}} onClick={() => this.back(this.props)}>返回</button> 
            <button className='saveBtn' style={{margin:'10px 0 0 30px',float:'left'}} onClick={() => this.submit(this.props)}>保存</button>  
          </div>
        </div>
    )
  }
 
  render () {
    return(
      <div>
       <div className={'childTopBar'}>
          <a style={{float:'left',lineHeight:'40px'}}>就诊人信息：</a>
        </div>
        {this.showBaseInfo()}
      </div>
    )
  }
}
export default connect(null)(AddReservation)
