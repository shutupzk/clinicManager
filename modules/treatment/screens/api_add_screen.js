import React, { Component } from 'react'
import { connect } from 'react-redux'
import Router from 'next/router'
import { createBaseApi } from '../../../ducks'
import { theme, SelectFilterCard } from '../../../components'
import { formatArrayToJson } from '../../../utils'

class APIAddScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      input: [{ key: 'input', type: 'Object', remark: '入参', childs: [] }],
      output: [{ key: 'output', type: 'Object', remark: '出参', childs: [] }]
    }
  }

  addAttr (key, indexs) {
    let array = this.state[key]
    let len = indexs.length
    let t = array
    for (let i = 0; i < len - 1; i++) {
      if (i === len - 2) {
        t = t[indexs[i]]
        break
      }
      t = t[indexs[i]].childs
    }
    t.childs = [...t.childs, { type: 'String' }]
    this.setState({ [key]: array })
  }

  deleteAttr (pkey, indexs) {
    let array = this.state[pkey]
    let len = indexs.length
    let t = array
    let index
    for (let i = 0; i < len; i++) {
      if (i === len - 2) {
        index = i + 1
        t = t[indexs[i]]
        break
      }
      t = t[indexs[i]].childs
    }
    let childs = []
    for (let i = 0; i < [...t.childs].length; i++) {
      if (i === index) continue
      childs.push([...t.childs][i])
    }
    t.childs = childs
    this.setState({ [pkey]: array })
  }

  setValue ({ key, value, pkey, indexs }) {
    let array = this.state[pkey]
    let len = indexs.length
    let t = array
    for (let i = 0; i < len; i++) {
      if (i === len - 1) {
        t = t[indexs[i]]
        break
      }
      t = t[indexs[i]].childs
    }
    t[key] = value
    if (key === 'type') {
      if (value === 'String') {
        delete t.childs
      } else {
        t.childs = []
      }
    }
    this.setState({ [pkey]: array })
  }

  async submit () {
    const { createBaseApi } = this.props
    const { apiName, description, input, output } = this.state
    let api = { apiName, description }
    api.input = formatArrayToJson(input).input
    api.output = formatArrayToJson(output).output
    console.log(api)
    let error = await createBaseApi(api)
    if (error) {
      return alert(error)
    }
    return Router.back()
  }

  renderItem ({ childs, marginLeft = '40px', index, indexs = [], pkey, hide }) {
    if (!childs) return null
    const { orderTitle, liPadding, titleText, ulStyle, liStyle, fenyeItem, buttonMiddle } = styles
    return (
      <div style={{ marginLeft }}>
        <ul className='flex tb-flex' style={{ ...ulStyle, ...orderTitle, ...liPadding }}>
          <li style={{ ...liStyle, ...titleText, flex: 2 }}>key</li>
          <li style={{ ...liStyle, ...titleText, flex: 2 }}>类型</li>
          <li style={{ ...liStyle, ...titleText, flex: 2 }}>说明</li>
          <li style={{ ...liStyle, ...titleText, flex: 4 }}>
            {hide ? null : (
              <button style={{ ...fenyeItem, ...buttonMiddle, width: '80px', background: '#7329F0', border: '1px solid #7329F0' }} onClick={() => this.addAttr(pkey, [...indexs, index])}>
                添加属性
              </button>
            )}
          </li>
        </ul>
        {childs.map((item, index) => {
          return this.renderRow(item, index, indexs, pkey, hide)
        })}
      </div>
    )
  }

  renderRow ({ key, type, remark, childs }, index, indexs, pkey, hide) {
    indexs = [...indexs, index]
    return (
      <div key={index}>
        {this.renderLiItem({ key, type, remark }, indexs, pkey, hide)}
        {this.renderItem({ childs, index, indexs, pkey })}
      </div>
    )
  }

  renderLiItem ({ key, type, remark }, indexs, pkey, hide) {
    const { inputText, liStyle, ulStyle, liPadding, fenyeItem, buttonMiddle } = styles
    return (
      <ul style={{ ...ulStyle, ...liPadding }} className='flex tb-flex listItem'>
        <li style={{ ...liStyle, flex: 2 }}>
          <input
            style={{ ...inputText, marginLeft: '0px' }}
            onChange={e => {
              this.setValue({ key: 'key', value: e.target.value, pkey, indexs })
            }}
            // defaultValue={key}
            value={key}
            className='left'
            type='text'
          />
        </li>
        <li style={{ ...liStyle, flex: 2 }}>
          <SelectFilterCard
            data={[{ title: 'String', value: 'String' }, { title: 'Object', value: 'Object' }, { title: 'Array', value: 'Array' }]}
            status={type}
            config={{ valueKey: 'value', titleKey: 'title' }}
            changeStatus={value => {
              this.setValue({ key: 'type', value: value, pkey, indexs })
            }}
          />
        </li>
        <li style={{ ...liStyle, flex: 2 }}>
          <input
            style={{ ...inputText, marginLeft: '0px' }}
            onChange={e => {
              this.setValue({ key: 'remark', value: e.target.value, pkey, indexs })
            }}
            // defaultValue={remark}
            value={remark}
            className='left'
            type='text'
          />
        </li>
        <li style={{ ...liStyle, flex: 4 }}>
          {hide ? null : (
            <button style={{ ...fenyeItem, ...buttonMiddle, width: '80px', background: '#0BC019', border: '1px solid #0BC019' }} onClick={() => this.deleteAttr(pkey, indexs)}>
              删除
            </button>
          )}
        </li>
      </ul>
    )
  }

  render () {
    const { titleSpan, titleP, ulStyle, liStyle, moduleDiv, inputText, fenyeItem, buttonLarge } = styles
    const inputArray = this.state.input
    const outputArray = this.state.output
    const { apiName, description } = this.state
    return (
      <div className={'orderRecordsPage'}>
        <div style={moduleDiv}>
          <p style={titleP}>基本信息</p>
          <div style={{ margin: '20px' }}>
            <ul style={ulStyle}>
              <li
                style={{
                  ...liStyle,
                  margin: '10px'
                }}
              >
                <span className='left' style={titleSpan}>
                  名称：
                </span>
                <input
                  style={{ ...inputText, width: '50%' }}
                  onChange={e => {
                    this.setState({ apiName: e.target.value })
                  }}
                  defaultValue={apiName}
                  className='left'
                  type='text'
                />
                <span className='clearfix' />
              </li>
              <li
                style={{
                  ...liStyle,
                  margin: '10px'
                }}
              >
                <span className='left' style={titleSpan}>
                  说明：
                </span>
                <input
                  style={{ ...inputText, width: '50%' }}
                  onChange={e => {
                    this.setState({ description: e.target.value })
                  }}
                  defaultValue={description}
                  className='left'
                  type='text'
                />
                <span className='clearfix' />
              </li>
            </ul>
          </div>
        </div>
        <div style={moduleDiv}>
          <p style={titleP}>输入</p>
          {<div style={{ margin: '10px' }}>{this.renderItem({ childs: inputArray, index: 0, marginLeft: '0', pkey: 'input', hide: true })}</div>}
        </div>
        <div style={moduleDiv}>
          <p style={titleP}>输出</p>
          {<div style={{ margin: '10px' }}>{this.renderItem({ childs: outputArray, index: 0, marginLeft: '0', pkey: 'output', hide: true })}</div>}
        </div>
        <div style={{ margin: '40px', textAlign: 'center' }}>
          <button style={{ ...fenyeItem, ...buttonLarge, marginLeft: '5px', background: '#0BC019', border: '1px solid #0BC019' }} onClick={() => this.submit()}>
            提交
          </button>
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
  },
  inputText: {
    marginLeft: `${theme.midmargin}`,
    background: `#f2f2f2`,
    lineHeight: `25px`,
    border: `1px solid ${theme.nbordercolor}`,
    textIndent: `6px`,
    borderRadius: `4px`,
    height: '30px'
  },
  buttonMiddle: {
    height: '30px',
    width: '50px'
  },
  buttonLarge: {
    height: '40px',
    width: '100px',
    fontSize: '20px'
  },
  fenyeItem: {
    background: '#3ca0ff',
    borderRadius: '4px',
    display: 'inline-block',
    cursor: 'pointer',
    border: '1px solid #3ca0ff',
    color: '#fff'
  }
}

const mapStateToProps = state => {
  return {
    baseApis: state.baseApis.data,
    selectId: state.baseApis.selectId
  }
}

export default connect(mapStateToProps, { createBaseApi })(APIAddScreen)
