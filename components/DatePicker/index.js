import React, { Component } from 'react'
import DatePicker from 'antd/lib/date-picker'
import locale from 'antd/lib/date-picker/locale/zh_CN'
import moment from 'moment'
import thiscss from '../../static/css/date/antd.scss'
moment.locale('zh-cn')

export default class MyDatePicker extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        <DatePicker locale={locale} style={{ width: '120px', marginTop: '17px' }} {...this.props} />
        <style dangerouslySetInnerHTML={{ __html: thiscss }} />
      </div>
    )
  }
}
