
import React, { Component } from 'react'
import { connect } from 'react-redux'
// import Router from 'next/router'
// import { triagePatientsList, triageDoctorsList, triagePatient, queryDepartmentList, queryDoctorList, completeBodySign, completePreMedicalRecord, completePreDiagnosis } from '../../../../ducks'
// import { PageCard } from '../../../../components'
// import { CompleteHealth, PatientCard, ChooseDoctor } from '../../components'

class WMPrescriptionScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>西药处方</div>
    )
  }
}

const mapStateToProps = state => {
  return {
    clinic_id: state.user.data.clinic_id
  }
}

export default connect(mapStateToProps, {})(WMPrescriptionScreen)
