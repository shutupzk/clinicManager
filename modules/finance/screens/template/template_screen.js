import React, { Component } from 'react'
import { connect } from 'react-redux'

import Outpatientlogscreen from './components/out_patient_log_screen'
import Departmentscreen from './components/department_screen'
import Consultationtypescreen from './components/consultation_type_screen'
import Doctorconsultationscreen from './components/doctor_consultation_screen'
import Efficiencyscreen from './components/efficiency_screen'
import Examinationscreen from './components/examination_screen'
import Laboratoryscreen from './components/laboratory_screen'
import Registrationscreen from './components/registration_screen'
import Reservationscreen from './components/reservation_screen'
import Treatmentscreen from './components/treatment_screen'

class FinanceTemplateScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pageType: 1
    }
  }

  changeContent({ type }) {
    this.setState({ pageType: type })
  }

  showDataList() {
    let { pageType } = this.state
    let map = {
      1: <Outpatientlogscreen />,
      2: <Departmentscreen />,
      3: <Consultationtypescreen />,
      4: <Doctorconsultationscreen />,
      5: <Examinationscreen />,
      6: <Laboratoryscreen />,
      7: <Treatmentscreen />,
      8: <Reservationscreen />,
      9: <Registrationscreen />,
      10: <Efficiencyscreen />
    }
    return map[pageType] || null
  }

  render() {
    return (
      <div style={{ width: '1200px' }}>
        <div className={'childTopBar'}>
          <span className={this.state.pageType === 1 ? 'sel' : ''} onClick={() => this.changeContent({ type: 1 })}>
            门诊日志
          </span>
          <span className={this.state.pageType === 2 ? 'sel' : ''} onClick={() => this.changeContent({ type: 2 })}>
            科室统计
          </span>
          <span className={this.state.pageType === 3 ? 'sel' : ''} onClick={() => this.changeContent({ type: 3 })}>
            接诊类型统计
          </span>
          <span className={this.state.pageType === 4 ? 'sel' : ''} onClick={() => this.changeContent({ type: 4 })}>
            医生接诊
          </span>
          <span className={this.state.pageType === 5 ? 'sel' : ''} onClick={() => this.changeContent({ type: 5 })}>
            检查统计
          </span>
          <span className={this.state.pageType === 6 ? 'sel' : ''} onClick={() => this.changeContent({ type: 6 })}>
            检验统计
          </span>
          <span className={this.state.pageType === 7 ? 'sel' : ''} onClick={() => this.changeContent({ type: 7 })}>
            治疗统计
          </span>
          <span className={this.state.pageType === 9 ? 'sel' : ''} onClick={() => this.changeContent({ type: 9 })}>
            登记分类
          </span>
          <span className={this.state.pageType === 10 ? 'sel' : ''} onClick={() => this.changeContent({ type: 10 })}>
            门诊效率
          </span>
        </div>
        {this.showDataList()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

export default connect(
  mapStateToProps,
  {}
)(FinanceTemplateScreen)
