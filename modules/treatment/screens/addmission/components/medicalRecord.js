import React, { Component } from 'react'
import { connect } from 'react-redux'
// 病历
class PrescriptionScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      morbidity_date: '',
      chief_complaint: '',
      history_of_present_illness: '',
      history_of_past_illness: '',
      family_medical_history: '',
      allergic_history: '',
      allergic_reaction: '',
      immunizations: '',
      diagnosis: '',
      cure_suggestion: '',
      remark: '',
      files: ''
    }
  }

  render() {
    let { morbidity_date } = this.state
    return (
      <div className='listContent'>
        <ur>
          <li>diagnosis</li>
          <li>{morbidity_date}</li>
        </ur>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

export default connect(mapStateToProps, {})(PrescriptionScreen)
