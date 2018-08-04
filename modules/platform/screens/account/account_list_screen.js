import React, { Component } from 'react'
import Router from 'next/router'
import { connect } from 'react-redux'
// import moment from 'moment'
// import { provinces } from '../../../../config/provinces'
import {
  AdminList
} from '../../../../ducks'
import { Confirm, PageCard, Select } from '../../../../components'

class AccountListScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  componentDidMount() {

  }
  AdminList() {
    
  }

  render() {
    return (
      <div>
        <div className={'childTopBar'}>
          <span onClick={() => Router.push('/platform/account/add')}>新增账号</span>
          <span className={'sel'}>账号列表</span>
        </div>
        {this.renderFilter()}
        {this.renderList()}
      </div>
    )
  }
  renderFilter() {
    return (
      <div>
        aa
      </div>
    )
  }
  renderList() {
    const {admins, page_info} = this.props
    return (
      <div>
        <PageCard
          offset={page_info.offset}
          limit={page_info.limit}
          total={page_info.total}
          onItemClick={({ offset, limit }) => {
            let keyword = personnel_type === 2 ? this.state.doctorKeyword : this.state.employeeKeyword
            this.queryDoctorList({ offset, limit, keyword })
          }}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    admins: state.admins.array_data,
    page_info: state.admins.page_info
  }
}
export default connect(mapStateToProps, {
})(AccountListScreen)
