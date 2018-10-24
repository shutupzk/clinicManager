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
    const { value, onChange, padding } = this.props
    return (
      <div>
        <input type={'date'} style={{ marginTop: '17px', padding }}
          {...this.props} value={moment(value).format('YYYY-MM-DD')}
          onChange={e => {
            onChange(moment(e.target.value))
          }}
        />
        <style jsx={true}>{`
          input[type='date']{
            float: left;
            /* text-indent: 10px; */
            background: rgb(255,255,255);
            border-radius: 4px;
            border-width: 1px;
            border-style: solid;
            border-color: rgb(217,217,217);
            border-image: initial;
            padding: 5px 0px;
            height: 100%;
          }
        `}</style>
        {/* <style dangerouslySetInnerHTML={{ __html: thiscss }} /> */}
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
