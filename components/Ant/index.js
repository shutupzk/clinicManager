import React, { Component } from 'react'
import DatePicker from 'antd/lib/date-picker'
import Upload from 'antd/lib/upload'
import locale from 'antd/lib/date-picker/locale/zh_CN'
import moment from 'moment'
import thiscss from '../../static/css/date/antd.scss'
import Button from 'antd/lib/button'
import Icon from 'antd/lib/icon'
import { API_SERVER } from '../../config'

moment.locale('zh-cn')

const { MonthPicker } = DatePicker

export class MyDatePicker extends Component {
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

export class MyMonthPicker extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        <MonthPicker locale={locale} style={{ width: '120px', marginTop: '17px' }} {...this.props} />
        <style dangerouslySetInnerHTML={{ __html: thiscss }} />
      </div>
    )
  }
}

export class MyUpload extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  style() {
    return (
      <style jsx='true'>{`
        .upload-list-inline .ant-upload-list-item {
          float: left;
          width: 200px;
          margin-right: 8px;
        }
        .upload-list-inline .ant-upload-animate-enter {
          animation-name: uploadAnimateInlineIn;
        }
        .upload-list-inline .ant-upload-animate-leave {
          animation-name: uploadAnimateInlineOut;
        }
      `}</style>
    )
  }
  // event(e) {
  //   if (e !== undefined) {
  //     console.log('event====', e, e.loaded)
  //   }
  // }
  render() {
    // const props = this.props
    const props2 = {
      action: API_SERVER + '/file/upload',
      listType: 'picture',
      showUploadList: false,
      // defaultFileList: [...fileList],
      className: 'upload-list-inline'
    }
    const {onChange, accept} = this.props
    return (
      <div>
        <Upload {...props2} accept={accept} onChange={onChange}>
          <Button>
            <Icon type='upload' /> 添加文件
          </Button>
        </Upload>
        {/* <DatePicker locale={locale} style={{ width: '120px', marginTop: '17px' }} {...this.props} /> */}
        <style dangerouslySetInnerHTML={{ __html: thiscss }} />
        {this.style()}
      </div>
    )
  }
}
