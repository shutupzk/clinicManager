import React, { Component } from 'react'
import { connect } from 'react-redux'
// 病历
class TreatmentScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
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
                <div>操作</div>
              </li>
              <li>
                <div>静脉输液（门诊/不含输液器</div>
                <div>挂号费</div>
                <div>2.00</div>
                <div>2</div>
                <div>4.00</div>
              </li>
              <li>
                <div>静脉输液（门诊/不含输液器</div>
                <div>挂号费</div>
                <div>2.00</div>
                <div>2</div>
                <div>4.00</div>
              </li>
            </ul>
          </div>
        </div>
        <style jsx>{
          `.tableDIV{
            display: flex;
            width:987px;
            background: rgba(255, 255, 255, 1);
            border-radius: 4px ; 
            margin: 0 65px 65px 47px;
          }
          .tableDIV ul{
            width:100%;
            display: flex;
            flex-direction: column;
            border:1px solid #E9E9E9;
            border-bottom:none;
          }
          .tableDIV ul li{
            display: flex;
            height:40px;
            border-bottom:1px solid #E9E9E9;
            line-height:40px;
            text-align:center;
          }
          .tableDIV ul li:nth-child(1){
            background:rgba(247,247,247,1);
          }
          .tableDIV ul li div{
            flex:2;
            border-left:1px #E9E9E9 dashed;
          }
          .tableDIV ul li div:nth-child(1){
            flex:3;
          }`
        }
        </style>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

export default connect(mapStateToProps, {})(TreatmentScreen)
