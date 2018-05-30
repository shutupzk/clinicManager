import { Upload, message, Button, Icon } from 'antd'
import React, { Component } from 'react'
import { API_SERVER } from '../../config'

export default class FileUpload extends Component {
  constructor(props) {
    super(props)
    this.state = {
      defaultFileList: []
    }
  }

  setDefaultFileList(defaultFileList) {
    if (Array.isArray(defaultFileList)) {
      this.setState({ defaultFileList })
    }
  }

  render() {
    let { defaultFileList } = this.state
    const uploadProps = {
      name: 'file',
      action: `${API_SERVER}/file/upload`,
      onChange(info) {
        if (info.file.status !== 'uploading') {
          console.log(info.file, info.fileList)
        }
        if (info.file.status === 'done') {
          message.success(`${info.file.name} file uploaded successfully`)
        } else if (info.file.status === 'error') {
          message.error(`${info.file.name} file upload failed.`)
        }
      },

      // 移除文件
      onRemove(info) {
        if (info.file.status === 'done') {
          console.log(info.file.response)
          message.error(`${info.file.name} file delete failed.`)
          return false
        }
        return true
      },
      defaultFileList: defaultFileList
    }

    return (
      <Upload {...uploadProps}>
        <Button>
          <Icon type="upload" /> Click to Upload
        </Button>
      </Upload>
    )
  }
}
