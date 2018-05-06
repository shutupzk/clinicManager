import React, { Component } from 'react'
import { connect } from 'react-redux'
// 处方
class MedicalRecordScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return <div className='itemCenter'>处方页面</div>
  }
}

const mapStateToProps = state => {
  return {
  }
}

export default connect(mapStateToProps, {})(MedicalRecordScreen)
