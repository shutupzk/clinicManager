import React, { Component } from 'react'
import { PageCard, Select, Confirm } from '../../../components'
import { cutdownStr } from '../../../utils'

export default class ChooseDoctor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      department_id: null
    }
  }

  getDepartmentOptions() {
    const { departments } = this.props
    let options = [{ value: '-1', label: '全部科室' }]
    for (let { id, name } of departments) {
      options.push({
        value: id,
        label: name
      })
    }
    return options
  }

  queryDcotors({ department_id, keyword, offset = 0, limit = 6 }) {
    const { triageDoctorsList, clinic_id } = this.props
    if (department_id === '-1') {
      department_id = null
    } else {
      department_id = department_id || this.state.department_id
    }
    keyword = keyword || this.state.keyword
    triageDoctorsList({ clinic_id, department_id, offset, limit, keyword })
  }

  show(clinic_triage_patient_id) {
    if (!clinic_triage_patient_id) return
    this.setState({ show: true, clinic_triage_patient_id, department_id: null, keyword: null })
    const { triageDoctorsList, clinic_id } = this.props
    triageDoctorsList({ clinic_id })
  }

  close() {
    this.setState({ show: false })
  }

  triagePatient(doctor_visit_schedule_id) {
    const { clinic_triage_patient_id } = this.state
    const { triage_personnel_id, triagePatient, refreshPatients } = this.props
    this.refs.myAlert.confirm('确认提示', '确定选择该医生？', 'Success', async () => {
      let error = await triagePatient({ doctor_visit_schedule_id, clinic_triage_patient_id, triage_personnel_id })
      if (error) {
        return this.refs.myAlert.alert('分诊失败: ' + error)
      } else {
        this.close()
        refreshPatients({})
      }
    })
  }

  render() {
    const { show } = this.state
    const { triageDoctors, doctor_page_info } = this.props
    if (!show) return null
    return (
      <div className={'mask'}>
        <div className={'doctorList'}>
          <div className={'doctorList_top'}>
            <span>选择医生</span>
            <div className={'topFilter'}>
              <div style={{ width: '200px', float: 'left', margin: '30px 0 0 15px' }}>
                <Select
                  placeholder='请选择科室'
                  options={this.getDepartmentOptions()}
                  onChange={e => {
                    let id = e.value
                    this.setState({ department_id: id })
                    this.queryDcotors({ department_id: id })
                  }}
                  height={38}
                />
              </div>
              <input type='text' placeholder={'医生名称'} />
              <button>查询</button>
            </div>
            <span onClick={() => this.close()}>×</span>
          </div>
          <div className={'doctorList_content'}>
            <ul>
              {triageDoctors.map((doctor, index) => {
                return (
                  <li key={index} onClick={async () => this.triagePatient(doctor.doctor_visit_schedule_id)}>
                    <div>
                      <img src={'/static/login/u49.png'} />
                      <span>医生</span>
                      <span>{doctor.doctor_name}</span>
                    </div>
                    <div>
                      <span title={doctor.department_name}>科室名称：{cutdownStr(doctor.department_name, 5)}</span>
                      <span>今日待接诊：{doctor.wait_total}人</span>
                      <span>今日已接诊：{doctor.triaged_total}人</span>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className={'pagination'} />
          <PageCard
            offset={doctor_page_info.offset}
            limit={doctor_page_info.limit}
            total={doctor_page_info.total}
            style={{ width: '910px', float: 'none', display: 'table', margin: '40px auto' }}
            onItemClick={({ offset, limit }) => {
              this.queryDcotors({ offset, limit })
            }}
          />
        </div>
        <Confirm ref='myAlert' />
      </div>
    )
  }
}
