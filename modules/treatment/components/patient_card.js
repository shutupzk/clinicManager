import React, { Component } from 'react'
import moment from 'moment'
import { getAgeByBirthday } from '../../../utils'

const status = {
  '10': '待分诊',
  '20': '待接诊',
  '30': '接诊中',
  '40': '已接诊',
  '100': '已取消'
}

export default class PatientCard extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    let { patient, buttons, onNameClick } = this.props
    buttons = buttons || []
    return (
      <div>
        <div className={'itemTop'}>
          <span style={{ cursor: 'pointer' }} onClick={() => {
            if (onNameClick) {
              onNameClick()
            }
          }}>{patient.patient_name}</span>
          <span>{patient.sex === 0 ? '女' : '男'}</span>
          <span>{getAgeByBirthday(patient.birthday)}</span>
          <span style={{ color: '#31B0B3', border: '1px solid #31B0B3' }}>{status[patient.status]}</span>
        </div>
        <div className={'itemCenter'}>
          <span>
            <a>接诊科室：</a>
            <a>{patient.department_name}</a>
          </span>
          <span>
            <a>接诊医生：</a>
            <a>{patient.doctor_name}</a>
          </span>
          <span>
            <a>登记人员：</a>
            <a>{patient.register_personnel_name}</a>
          </span>
          <span>
            <a>{patient.register_type === 1 ? '预约时间：' : '登记时间：'}</a>
            <a>{moment(patient.register_time).format('YYYY-MM-DD HH:mm:ss')}</a>
          </span>
          <span style={{ color: 'rgba(153,153,153,1)' }}>
            <a style={{ color: 'rgba(153,153,153,1)' }}>更新时间：</a>
            <a style={{ color: 'rgba(153,153,153,1)' }}>{moment(patient.updated_time).format('YYYY-MM-DD HH:mm:ss')}</a>
          </span>
        </div>
        <div className={'itemBottom'}>
          {buttons.map(({ title, onClick }, index) => {
            return <span key={index} onClick={() => onClick()}>{title}</span>
          })}
        </div>
      </div>
    )
  }
}
