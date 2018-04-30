import React, { Component } from 'react'
import Router from 'next/router'
import { connect } from 'react-redux'
import { queryDoctorList } from '../../../../ducks'

class PharmacyListScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      personnelType: 1,
      pageType: 1
    }
  }

  componentWillMount () {
    const { queryDoctorList, clinic_code } = this.props
    queryDoctorList({ clinic_code })
  }

  getListData () {
    const { doctors } = this.props
    let array = []
    for (let key in doctors) {
      array.push(doctors[key])
    }
    return array
  }

  goToDetail ({ apiName }) {
    const { selectBaseApi } = this.props
    selectBaseApi({ apiName })
    Router.push('/apis/detail')
  }

  goToEdit ({ apiName }) {
    const { selectBaseApi } = this.props
    selectBaseApi({ apiName })
    Router.push('/apis/edit')
  }

  async toRemove ({ apiName }) {
    const confirmed = confirm('确定要删除  ' + apiName + '?')
    if (confirmed) {
      const { removeBaseApi } = this.props
      const error = await removeBaseApi({ apiName })
      if (error) {
        alert(error)
      }
    }
  }

  renderTitle () {
    // const { titleText, orderTitle, liPadding } = styles
    return (
      <ul className='flex tb-flex'>
        <li style={{ flex: 3, height: '40px', lineHeight: '40px' }}>入库日期</li>
        <li style={{ flex: 3, height: '40px', lineHeight: '40px' }}>入库单号 </li>
        <li style={{ flex: 3, height: '40px', lineHeight: '40px' }}>入库方式</li>
        <li style={{ flex: 5, height: '40px', lineHeight: '40px' }}>供应商</li>
        <li style={{ flex: 3, height: '40px', lineHeight: '40px' }}>操作员</li>
        <li style={{ flex: 3, height: '40px', lineHeight: '40px' }}>状态</li>
        <li style={{ flex: 5, height: '40px', lineHeight: '40px' }}>操作</li>
      </ul>
    )
  }
  renderTitle1 () {
    // const { titleText, orderTitle, liPadding } = styles
    return (
      <ul className='flex tb-flex'>
        <li style={{ flex: 3, height: '40px', lineHeight: '40px' }}>出库日期</li>
        <li style={{ flex: 3, height: '40px', lineHeight: '40px' }}>出库单号 </li>
        <li style={{ flex: 3, height: '40px', lineHeight: '40px' }}>出库方式</li>
        <li style={{ flex: 3, height: '40px', lineHeight: '40px' }}>领用科室</li>
        <li style={{ flex: 3, height: '40px', lineHeight: '40px' }}>领用人</li>
        <li style={{ flex: 3, height: '40px', lineHeight: '40px' }}>审核人</li>
        <li style={{ flex: 3, height: '40px', lineHeight: '40px' }}>状态</li>
        <li style={{ flex: 5, height: '40px', lineHeight: '40px' }}>操作</li>
      </ul>
    )
  }

  renderRow ({ apiName, description }, index) {
    const { liPadding, fenyeItem, buttonMiddle } = styles
    return (
      <ul style={{ ...liPadding }} className='flex tb-flex listItem' key={index}>
        <li style={{ flex: 1 }}>{`${index}`}</li>
        <li style={{ flex: 2 }}>{apiName}</li>
        <li style={{ flex: 5 }}>{description}</li>
        <li style={{ flex: 2, textAlign: 'center' }}>
          <button style={{ ...fenyeItem, ...buttonMiddle, background: '#0BC019', border: '1px solid #0BC019' }} onClick={() => this.goToDetail({ apiName })}>
						查看
					</button>
          <button style={{ ...fenyeItem, ...buttonMiddle, marginLeft: '5px' }} onClick={() => this.goToEdit({ apiName })}>
						编辑
					</button>
          <button style={{ ...fenyeItem, ...buttonMiddle, marginLeft: '5px', background: '#F26C55', border: '1px solid #F26C55' }} onClick={() => this.toRemove({ apiName })}>
						删除
					</button>
        </li>
      </ul>
    )
  }
  changeContent ({ type }) {
    this.setState({ pageType: type })
  }
  showStorage () {
    let exercises = this.getListData()
    return (
      <div>
        <div className={'regisListTop'}>
          <input type='text' className={'datebox'} placeholder='入库日期' />
          <input type='text' placeholder='入库单号' />
          <button className={'searchBtn'}>查询</button>
        </div>
        <div className={'listBox'}>
          <button className={'addBtn'}>新增入库</button>
          {this.renderTitle()}
          {exercises.map((item, index) => {
            return this.renderRow(item, index)
          })}
        </div>
      </div>
    )
  }
  showOutbound () {
    let exercises = this.getListData()
    return (
      <div>
        <div className={'regisListTop'}>
          <input type='text' className={'datebox'} placeholder='出库日期' />
          <input type='text' placeholder='出库单号' />
          <button className={'searchBtn'}>查询</button>
        </div>
        <div className={'listBox'}>
          <button className={'addBtn'}>新增出库</button>
          {this.renderTitle1()}
          {exercises.map((item, index) => {
            return this.renderRow1(item, index)
          })}
        </div>
      </div>
    )
  }
  render () {
    // const { fenyeItem, buttonLarge } = styles
    return (
      <div className={'orderRecordsPage'}>
        <div className={'childTopBar'}>
          <span className={this.state.pageType === 1 ? 'sel' : ''} onClick={() => this.changeContent({ type: 1 })}>
            入库管理
          </span>
          <span className={this.state.pageType === 2 ? 'sel' : ''} onClick={() => this.changeContent({ type: 2 })}>
            出库管理
          </span>
          <span className={this.state.pageType === 3 ? 'sel' : ''} onClick={() => this.changeContent({ type: 3 })}>
            当前库存
          </span>
        </div>
        {this.state.pageType === 1 ? this.showStorage() : ''}
        {this.state.pageType === 2 ? this.showOutbound() : ''}
        {/* {this.state.pageType==2?this.showEmployee():''} */}
      </div>
    )
  }
}

const styles = {
  titleText: {
    fontSize: '16px'
  },
  liPadding: {
    padding: '10px 15px'
  },
  orderTitle: {
    color: '#797979',
    background: '#f2f2f2',
    borderRadius: '3px'
  },
  buttonMiddle: {
    height: '30px',
    width: '50px'
  },
  buttonLarge: {
    height: '40px',
    width: '80px',
    fontSize: '20px'
  },
  fenyeItem: {
    background: '#3ca0ff',
    borderRadius: '2px',
    display: 'inline-block',
    cursor: 'pointer',
    border: '1px solid #3ca0ff',
    color: '#fff'
  }
}

const mapStateToProps = state => {
  return {
    doctors: state.doctors.data,
    clinic_code: '00000001'
  }
}

export default connect(mapStateToProps, { queryDoctorList })(PharmacyListScreen)
