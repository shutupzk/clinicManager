import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Select } from '../../../../../components'
// import Router from 'next/router'
// import { Select } from '../../../../../components'
// import {} from '../../../../../ducks'

// 病历
class RelatedItemsScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      relateItemList: []
    }
  }

  async componentDidMount() {
  }
  style() {
    return (
      <style jsx>{`
        .formContent{
          display: flex;
          flex-direction: column;
          width: 90%;
          // background: #909090;
          margin: 20px auto;
        }
        .formContent>span{
          font-size: 18px;
        }
        .formContent>ul{
          // display: flex;
          width: 850px;
          border-top: 1px solid #d8d8d8;
          margin-top:20px;
          // flex-direction: column;
          height: 420px;
          overflow: hidden;
          overflow-y: auto;
        }
        .formContent>ul>li{
          display: flex;
          float:left;
          width: 848px;
          // flex: 1;
          height: 40px;
          align-items: center;
          justify-content: center;
          border-right: 1px solid #d8d8d8;
          border-bottom: 1px solid #d8d8d8;
        }
        .formContent>ul>li:first-child{
          background: rgba(250,250,250,1);
          box-shadow: 1px 1px 0px 0px rgba(232,232,232,1);
        }
        .formContent>ul>li>div{
          flex:1;
          height: 40px;
          border-left: 1px solid #d8d8d8;
          float:left;
          line-height: 40px;
          text-align: center;
        }
        .formContent>ul>li>div>input{
          width: 100%;
          height: 32px;
          border: none;
          padding: 0;
          outline-style: none;
          text-align:center;
        }
        .formContent>ul>li>div>div{
          margin-top: 5px;
        }
        .formBottom{
          display: flex;
          flex-direction: column;
          width: 90%;
          // background: #808080;
          margin: 0 auto;
          justify-content: center;
          align-items: center;
        }
        .formBottom>div{
          width:150px;
        }
        .formBottom>div>button{
          background: rgba(255,255,255,1);
          border-radius: 4px;
          border: 1px solid #d9d9d9;
          height: 32px;
          cursor: pointer;
          font-size: 14px;
          font-family: MicrosoftYaHei;
          color: rgba(0,0,0,0.65);
          padding: 0 15px;
        }
        .formBottom>div>button:first-child{
          float:left;
        }
        .formBottom>div>button:last-child{
          float:right;
        }
      `}</style>
    )
  }
  // 添加行
  addColumn() {
    const { relateItemList } = this.state
    this.setState({ relateItemList: [...relateItemList, {}] })
  }
  // 删除行
  removeColumn(index) {
    const { relateItemList } = this.state
    let array = [...relateItemList]
    array.splice(index, 1)
    this.setState({ relateItemList: array })
  }
  render() {
    const {relateItem} = this.props
    const {relateItemList} = this.state
    return (
      <div className={'doctorList'}>
        <div className={'doctorList_top'}>
          <span>关联项目</span>
          <div />
          <span onClick={() => { this.props.closeMask() }}>×</span>
        </div>
        <div className={'formContent'}>
          <span>{relateItem.name}</span>
          <ul>
            <li>
              <div>排序号</div>
              <div style={{flex: 2}}>项目名称</div>
              <div>英文缩写</div>
              <div>单位</div>
              <div>参考值</div>
              <div>默认结果</div>
              <div onClick={() => { this.addColumn() }}>增加</div>
            </li>
            {relateItemList.map((item, index) => {
              return (
                <li>
                  <div>
                    <input
                      type='number'
                      placeholder={'序号可修改'}
                      value={item.No}
                    />
                  </div>
                  <div style={{flex: 2}}>
                    <div>
                      <Select
                        placeholder={'请选择'}
                        height={32}
                        options={[{value: 1, label: '1'}]}
                        onChange={() => {}}
                        onInputChange={keyword => {}}
                      />
                    </div>
                  </div>
                  <div>英文缩写</div>
                  <div>单位</div>
                  <div>参考值</div>
                  <div>默认结果</div>
                  <div onClick={() => { this.removeColumn(index) }}>删除</div>
                </li>
              )
            })}
          </ul>
        </div>
        <div className={'formBottom'}>
          <div>
            <button>取消</button>
            <button>保存</button>
          </div>
        </div>
        {this.style()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    clinic_id: state.user.data.clinic_id
  }
}

export default connect(mapStateToProps, {
})(RelatedItemsScreen)
