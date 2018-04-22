import React, { Component } from 'react'
import Router from 'next/router'
import { connect } from 'react-redux'
import { doctorList } from '../../../../ducks'

class DoctorListScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      personnel_type: 2,
      doctorKeyword: '',
      employeeKeyword: ''
    }
  }

  componentWillMount() {
    this.queryList()
  }

  queryList(keyword = '', personnel_type = 2) {
    const { doctorList, clinic_id } = this.props
    doctorList({ clinic_id, personnel_type, keyword })
  }

  getListData(personnel_type) {
    const { doctors } = this.props
    const { doctorKeyword, employeeKeyword } = this.state
    const keyword = personnel_type === 2 ? doctorKeyword : employeeKeyword
    let array = []
    for (let key in doctors) {
      if (doctors[key].personnel_type !== personnel_type) continue
      if (keyword) {
        let pattern = new RegExp(keyword)
        const { code, name } = doctors[key]
        if (!pattern.test(code) && !pattern.test(name)) continue
      }
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
      <ul className='flex tb-flex'>
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
      <ul className='flex tb-flex'>
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
    const { fenyeItem, buttonMiddle } = styles
    return (
      <ul className='flex tb-flex' key={index}>
        <li style={{ flex: 1 }}>{`${index + 1}`}</li>
        <li style={{ flex: 3 }}>{code}</li>
        <li style={{ flex: 3 }}>{name}</li>
        <li style={{ flex: 3 }}>{department_name}</li>
        <li style={{ flex: 3 }}>{clinic_name}</li>
        <li style={{ flex: 5 }}>{is_appointment ? '是' : '否'}</li>
        <li style={{ flex: 3, textAlign: 'center' }}>
          <button style={{ ...fenyeItem, ...buttonMiddle, marginLeft: '5px' }} onClick={() => this.goToEdit({ })}>
            编辑
          </button>
          <button style={{ ...fenyeItem, ...buttonMiddle, marginLeft: '5px', background: '#F26C55', border: '1px solid #F26C55' }} onClick={() => this.toRemove({ })}>
            删除
          </button>
        </li>
      </ul>
    )
  }

  renderRow1({ code, name, department_name, clinic_name, is_appointment }, index) {
    const { fenyeItem, buttonMiddle } = styles
    return (
      <ul className='flex tb-flex' key={index}>
        <li style={{ flex: 1 }}>{`${index + 1}`}</li>
        <li style={{ flex: 3 }}>{code}</li>
        <li style={{ flex: 3 }}>{name}</li>
        <li style={{ flex: 3 }}>{department_name}</li>
        <li style={{ flex: 3 }}>{clinic_name}</li>
        <li style={{ flex: 3 }}>{is_appointment ? '是' : '否'}</li>
        <li style={{ flex: 3, textAlign: 'center' }}>
          <button style={{ ...fenyeItem, ...buttonMiddle, marginLeft: '5px' }} onClick={() => this.goToEdit({ })}>
            编辑
          </button>
          <button style={{ ...fenyeItem, ...buttonMiddle, marginLeft: '5px', background: '#F26C55', border: '1px solid #F26C55' }} onClick={() => this.toRemove({ })}>
            删除
          </button>
        </li>
      </ul>
    )
  }
  changeContent({ personnel_type }) {
    this.setState({ personnel_type })
  }
  showDoctor() {
    let exercises = this.getListData(2)
    return (
      <div>
        <div className={'regisListTop'}>
          <input type='text' placeholder='搜索医生名称/医生编号' ref='doctorKeywordInput' defaultValue={this.state.doctorKeyword} />
          <button
            className={'searchBtn'}
            onClick={() => {
              const doctorKeyword = this.refs.doctorKeywordInput.value
              this.setState({ doctorKeyword })
              this.queryList(doctorKeyword, 2)
            }}
          >
            查询
          </button>
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
    let exercises = this.getListData(1)
    return (
      <div>
        <div className={'regisListTop'}>
          <input type='text' placeholder='搜索职员名称/职员编号' ref='employeeKeywordInput' defaultValue={this.state.employeeKeyword} />
          <button
            className={'searchBtn'}
            onClick={() => {
              const employeeKeyword = this.refs.employeeKeywordInput.value
              this.setState({ employeeKeyword })
              this.queryList(employeeKeyword, 1)
            }}
          >
            查询
          </button>
        </div>
        <div className={'listBox'}>
          <button className={'addBtn'}>新增职员</button>
          {this.renderTitle1()}
          {exercises.map((item, index) => {
            return this.renderRow1(item, index)
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
          <span className={this.state.personnel_type === 2 ? 'sel' : ''} onClick={() => this.changeContent({ personnel_type: 2 })}>
            医生
          </span>
          <span className={this.state.personnel_type === 1 ? 'sel' : ''} onClick={() => this.changeContent({ personnel_type: 1 })}>
            职员
          </span>
        </div>
        {this.state.personnel_type === 2 ? this.showDoctor() : ''}
        {this.state.personnel_type === 1 ? this.showEmployee() : ''}
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
