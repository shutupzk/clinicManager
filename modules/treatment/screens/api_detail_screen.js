import React, { Component } from 'react'
import { connect } from 'react-redux'
import Router from 'next/router'
import { queryBaseApis } from '../../../ducks'
import { theme } from '../../../components'
import { readJsonKey } from '../../../utils'

class APIDetailScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    const { baseApis, selectId } = this.props
    if (!baseApis || !selectId || !baseApis[selectId]) {
      Router.back()
    }
  }

  getData () {
    const { baseApis, selectId } = this.props
    return baseApis[selectId]
  }

  renderItem (array, marginLeft = '40px') {
    if (!array || !array.length) return null
    const { orderTitle, liPadding, titleText, ulStyle, liStyle } = styles
    return (
      <div style={{ marginLeft }}>
        <ul className='flex tb-flex' style={{ ...ulStyle, ...orderTitle, ...liPadding }}>
          <li style={{ ...liStyle, ...titleText, flex: 2 }}>key</li>
          <li style={{ ...liStyle, ...titleText, flex: 2 }}>类型</li>
          <li style={{ ...liStyle, ...titleText, flex: 2 }}>说明</li>
          <li style={{ ...liStyle, ...titleText, flex: 4 }} />
        </ul>
        {array.map((item, index) => {
          return this.renderRow(item, index)
        })}
      </div>
    )
  }

  renderRow ({ key, type, remark, childs }, index) {
    const { liPadding, ulStyle, liStyle } = styles
    return (
      <div key={index}>
        <ul style={{ ...ulStyle, ...liPadding }} className='flex tb-flex listItem' >
          <li style={{ ...liStyle, flex: 2 }}>{key}</li>
          <li style={{ ...liStyle, flex: 2 }}>{type}</li>
          <li style={{ ...liStyle, flex: 2 }}>{remark}</li>
          <li style={{ ...liStyle, flex: 4 }} />
        </ul>
        {this.renderItem(childs)}
      </div>
    )
  }

  render () {
    const api = this.getData()
    if (!api) return <div />
    let { apiName, description, input, output } = this.getData()
    const { titleSpan, itemSpan, titleP, ulStyle, liStyle, moduleDiv } = styles
    let inputArray = [readJsonKey('input', input)]
    let outputArray = [readJsonKey('output', output)]
    return (
      <div className={'orderRecordsPage'}>
        <div style={moduleDiv}>
          <p style={titleP}>基本信息</p>
          <div style={{ margin: '20px' }}>
            <ul style={ulStyle}>
              <li style={liStyle}>
                <span className='left' style={titleSpan}>
                  名称：
                </span>
                <span className='left' style={itemSpan}>
                  {apiName}
                </span>
                <span className='clearfix' />
              </li>
              <li style={liStyle}>
                <span className='left' style={titleSpan}>
                  说明：
                </span>
                <span className='left' style={itemSpan}>
                  {description}
                </span>
                <span className='clearfix' />
              </li>
            </ul>
          </div>
        </div>
        <div style={moduleDiv}>
          <p style={titleP}>输入</p>
          <div style={{ margin: '10px' }}>{this.renderItem(inputArray, '0')}</div>
        </div>
        <div style={moduleDiv}>
          <p style={titleP}>输出</p>
          <div style={{ margin: '10px' }}>{this.renderItem(outputArray, '0')}</div>
        </div>
      </div>
    )
  }
}

const styles = {
  moduleDiv: {
    border: '1px solid #3ca0ff',
    marginTop: '20px',
    borderRadius: '6px'
  },
  liStyle: {
    color: theme.mainfontcolor,
    fontSize: '12px',
    lineHeight: '22px'
  },
  ulStyle: {
    padding: '0 0.1rem'
  },
  titleP: {
    backgroundColor: '#3ca0ff',
    padding: '10px',
    fontSize: '20px',
    color: '#FFFFFF',
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px'
  },
  titleSpan: {
    fontSize: '18px'
  },
  itemSpan: {
    fontSize: '18px',
    marginLeft: '10px'
  },
  titleText: {
    fontSize: '16px'
  },
  liPadding: {
    padding: '10px 15px'
  },
  orderTitle: {
    color: '#797979',
    background: '#f2f2f2',
    borderRadius: '3px'
  }
}

const mapStateToProps = state => {
  return {
    baseApis: state.baseApis.data,
    selectId: state.baseApis.selectId
  }
}

export default connect(mapStateToProps, { queryBaseApis })(APIDetailScreen)
