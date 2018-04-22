import React, { Component } from 'react'
import Router from 'next/router'
import { connect } from 'react-redux'
import { doctorList } from '../../../../ducks'

class DoctorListScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      personnelType: 1,
      pageType: 1
    }
  }

  componentWillMount() {
    const { doctorList, clinic_id } = this.props
    console.log('clinic_id ======', clinic_id)
    doctorList({ clinic_id, personnel_type: 2 })
  }

  getListData() {
    const { doctors } = this.props
    let array = []
    for (let key in doctors) {
      array.push(doctors[key])
    }
    return array
  }

  goToDetail({ apiName }) {
    const { selectBaseApi } = this.props
    selectBaseApi({ apiName })
    Router.push('/apis/detail')
  }

  goToEdit({ apiName }) {
    const { selectBaseApi } = this.props
    selectBaseApi({ apiName })
    Router.push('/apis/edit')
  }

  async toRemove({ apiName }) {
    const confirmed = confirm('确定要删除  ' + apiName + '?')
    if (confirmed) {
      const { removeBaseApi } = this.props
      const error = await removeBaseApi({ apiName })
      if (error) {
        alert(error)
      }
    }
  }

  renderTitle() {
    return (
      <ul className="flex tb-flex">
        <li style={{ flex: 1, height: '40px', lineHeight: '40px' }}>序号</li>
        <li style={{ flex: 3, height: '40px', lineHeight: '40px' }}>医生编码 </li>
        <li style={{ flex: 3, height: '40px', lineHeight: '40px' }}>医生名称</li>
        <li style={{ flex: 3, height: '40px', lineHeight: '40px' }}>所属科室</li>
        <li style={{ flex: 3, height: '40px', lineHeight: '40px' }}>所属诊所</li>
        <li style={{ flex: 5, height: '40px', lineHeight: '40px' }}>是否开放预约挂号</li>
        <li style={{ flex: 3, height: '40px', lineHeight: '40px' }}>操作</li>
      </ul>
    )
  }

  renderTitle1() {
    return (
      <ul className="flex tb-flex">
        <li style={{ flex: 1, height: '40px', lineHeight: '40px' }}>序号</li>
        <li style={{ flex: 3, height: '40px', lineHeight: '40px' }}>职员编码 </li>
        <li style={{ flex: 3, height: '40px', lineHeight: '40px' }}>职员名称</li>
        <li style={{ flex: 3, height: '40px', lineHeight: '40px' }}>所属科室(部门)</li>
        <li style={{ flex: 3, height: '40px', lineHeight: '40px' }}>所属诊所</li>
        <li style={{ flex: 3, height: '40px', lineHeight: '40px' }}>职位</li>
        <li style={{ flex: 3, height: '40px', lineHeight: '40px' }}>操作</li>
      </ul>
    )
  }

  renderRow({ code, name, department_name, clinic_name, is_appointment }, index) {
    const { liPadding, fenyeItem, buttonMiddle } = styles
    return (
      <ul style={{ ...liPadding }} className="flex tb-flex listItem" key={index}>
        <li style={{ flex: 1 }}>{`${index}`}</li>
        <li style={{ flex: 2 }}>{code}</li>
        <li style={{ flex: 2 }}>{name}</li>
        <li style={{ flex: 2 }}>{department_name}</li>
        <li style={{ flex: 2 }}>{clinic_name}</li>
        <li style={{ flex: 2, textAlign: 'center' }}>
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
  changeContent({ type }) {
    this.setState({ pageType: type })
  }
  showDoctor() {
    let exercises = this.getListData()
    return (
      <div>
        <div className={'regisListTop'}>
          <input type="text" placeholder="搜索医生名称/医生编号" />
          <button className={'searchBtn'}>查询</button>
        </div>
        <div className={'listBox'}>
          <button className={'addBtn'}>新增医生</button>
          {this.renderTitle()}
          {exercises.map((item, index) => {
            return this.renderRow(item, index)
          })}
        </div>
      </div>
    )
  }
  showEmployee() {
    let exercises = this.getListData()
    return (
      <div>
        <div className={'regisListTop'}>
          <input type="text" placeholder="搜索职员名称/职员编号" />
          <button className={'searchBtn'}>查询</button>
        </div>
        <div className={'listBox'}>
          <button className={'addBtn'}>新增职员</button>
          {this.renderTitle1()}
          {exercises.map((item, index) => {
            return this.renderRow(item, index)
          })}
        </div>
      </div>
    )
  }
  render() {
    // const { fenyeItem, buttonLarge } = styles
    return (
      <div className={'orderRecordsPage'}>
        <div className={'childTopBar'}>
          <span className={this.state.pageType === 1 ? 'sel' : ''} onClick={() => this.changeContent({ type: 1 })}>
            医生
          </span>
          <span className={this.state.pageType === 2 ? 'sel' : ''} onClick={() => this.changeContent({ type: 2 })}>
            职员
          </span>
        </div>
        {this.state.pageType === 1 ? this.showDoctor() : ''}
        {this.state.pageType === 2 ? this.showEmployee() : ''}
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
  console.log(state)
  return {
    doctors: state.doctors.data,
    clinic_id: state.user.data.clinic_id
  }
}

export default connect(mapStateToProps, { doctorList })(DoctorListScreen)
