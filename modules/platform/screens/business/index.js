import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import Router from 'next/router'
import { queryClinicList, clinicSelect } from '../../../../ducks'
import { Confirm, PageCard } from '../../../../components'

class BusinessClinicListScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      keyword: '',
      start_date: moment()
        .add(-1, 'year')
        .format('YYYY-MM-DD'),
      end_date: moment()
        .add(1, 'd')
        .format('YYYY-MM-DD')
    }
  }

  queryCommonData({ offset, limit }) {
    const { queryClinicList } = this.props
    queryClinicList({ ...this.state, offset, limit })
  }

  componentDidMount() {
    this.queryCommonData({})
  }

  setPermissions(clinic_id) {
    this.props.clinicSelect(clinic_id)
    Router.push('/platform/business/permission')
  }

  showList() {
    const { clinics, clinics_page_info } = this.props
    const { offset, limit, total } = clinics_page_info
    return (
      <div>
        <div className={'bussinessTitle'}>业务管理</div>
        <div className={'filterBox'} style={{ marginBottom: '20px', marginLeft: '21px' }}>
          <div className={'boxLeft'}>
            <input
              type='date'
              placeholder='开始日期'
              value={this.state.start_date}
              onChange={e => {
                this.setState({ start_date: e.target.value })
              }}
            />
            <input
              type='date'
              placeholder='结束日期'
              value={this.state.end_date}
              onChange={e => {
                this.setState({ end_date: e.target.value })
              }}
            />
            <input
              type='text'
              placeholder='搜索诊所名称/诊所编码'
              value={this.state.keyword}
              onChange={e => {
                this.setState({ keyword: e.target.value })
              }}
            />
            <button
              onClick={() => {
                this.queryCommonData({})
              }}
            >
              查询
            </button>
          </div>
        </div>
        <div className={'feeScheduleBox'} style={{ marginLeft: '21px' }}>
          <ul style={{ margin: '25px 30px 30px 30px' }}>
            <li>
              <div>序号</div>
              <div>创建时间</div>
              <div>诊所名称</div>
              <div>诊所编码</div>
              <div>状态</div>
              <div>更新时间</div>
              <div>操作</div>
            </li>
            {clinics.map((item, iKey) => {
              return (
                <li key={iKey}>
                  <div>{iKey + 1}</div>
                  <div>{moment(item.created_time).format('YYYY-MM-DD')}</div>
                  <div>{item.name}</div>
                  <div>{item.code}</div>
                  <div>{item.status ? '已启用' : '已停用'}</div>
                  <div>{moment(item.updated_time).format('YYYY-MM-DD')}</div>
                  <div>
                    <span style={{ color: '#2ACDC8', cursor: 'pointer' }} onClick={() => this.setPermissions(item.clinic_id)}>
                      {'修改'}
                    </span>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
        <PageCard
          offset={offset}
          limit={limit}
          total={total}
          onItemClick={({ offset, limit }) => {
            this.queryCommonData({ offset, limit })
          }}
        />
        <style jsx='true'>{`
          .bussinessTitle {
            margin: 24px 0 26px 33px;
            width: 80px;
            height: 24px;
            font-size: 20px;
            font-family: MicrosoftYaHei;
            color: rgba(102, 102, 102, 1);
            line-height: 24px;
          }
        `}</style>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.showList()}
        <Confirm ref='myAlert' isAlert />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    clinics: state.clinics.data,
    clinics_page_info: state.clinics.page_info
  }
}

export default connect(mapStateToProps, { queryClinicList, clinicSelect })(BusinessClinicListScreen)
