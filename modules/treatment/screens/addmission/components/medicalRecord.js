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
        <div>
          <input
            type='date'
            placeholder='就诊日期'
            value={morbidity_date}
            onChange={e => {
              this.setState({ morbidity_date: e.target.value })
            }}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

export default connect(mapStateToProps, {})(PrescriptionScreen)
