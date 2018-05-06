import React, { Component } from 'react'
import { connect } from 'react-redux'
// 病历
class TreatmentScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return <div className='itemCenter'>诊疗页面</div>
  }
}

const mapStateToProps = state => {
  return {}
}

export default connect(mapStateToProps, {})(TreatmentScreen)
