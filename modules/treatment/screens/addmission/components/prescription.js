import React, { Component } from 'react'
import { connect } from 'react-redux'
// 处方
class MedicalRecordScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      c_presc_btn: 0,
      cPrescItemArray: [],
      selItem: 'wPresc'
    }
  }
  // 添加中药处方项
  addChineseMedicinePres() {
    const {c_presc_btn, cPrescItemArray, selItem} = this.state
    // let array = []
    return (
      <div>
        {cPrescItemArray.map((item, index) => <div
          onClick={() => {
            this.setState({selItem: item.id})
          }}
          className={'prescItem ' + (selItem === item.id ? 'sel' : '')}
          ref={item.id}>{item.name}</div>)}
        <style jsx>{`
          .prescItem{
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
          }
          .sel{
            background: rgba(42,205,200,1);
            color: rgba(255,255,255,1);
            border: none;
          }
        `}</style>
      </div>
    )
  }
  // 显示处方详情
  renderPrescriptionDetail() {
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
            <div>操作</div>
          </li>
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
            <div>操作</div>
          </li>
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
            <div>操作</div>
          </li>
        </ul>
        <style jsx>{`
          .feeScheduleBox{
            margin-left: 0;
            width: 1000px;
          }
          .feeScheduleBox ul li>div:first-child{
            flex:2;
          }
        `}</style>
      </div>
    )
  }
  render() {
    let {c_presc_btn, selItem, cPrescItemArray} = this.state
    return (
      <div className='filterBox'>
        <div className='boxLeft'>
          <div className={'prescriptionLank'}>
            <div className={'prescItem ' + (selItem === 'wPresc' ? 'sel' : '')}
              onClick={() => {
                this.setState({selItem: 'wPresc'})
              }}
            >西/成药处方</div>
            {this.addChineseMedicinePres()}
            <button onClick={e => {
              c_presc_btn++
              cPrescItemArray = []
              for (let i = 0; i < c_presc_btn; i++) {
                let item = {
                  name: '中药处方' + (i + 1),
                  id: 'cPresc' + (i + 1)
                }
                cPrescItemArray.push(item)
              }
              this.setState({c_presc_btn})
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
          {this.renderPrescriptionDetail()}
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
          }
          .prescriptionLank .sel{
            background: rgba(42,205,200,1);
            color: rgba(255,255,255,1);
            border: none;
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
