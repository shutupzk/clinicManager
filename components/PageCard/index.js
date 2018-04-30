import React, { Component } from 'react'
import { theme } from '../../components'
import { connect } from 'react-redux'
// import { showPrompt } from '../../ducks'

/**
 *
 * @param {*page\clickPage\data} props
 */
class PageCard extends Component {
  getPageArray({ limit = 6, offset = 0, total = 0 }) {
    offset = offset * 1
    limit = limit * 1
    total = total * 1
    let pageTotal = Math.ceil(total / limit)
    let pageIndex = Math.floor(offset / limit) + 1
    let array = []
    let pre = false
    let next = false
    for (let i = 0; i < pageTotal; i++) {
      if (pageTotal > 5) {
        if (i > 2 && i < pageTotal - 2) {
          if (pageIndex === i + 1) {
            array.push({
              offset: i * limit,
              limit,
              omitted: false,
              iscurrent: pageIndex === i + 1,
              page: i + 1
            })
          }
          if (pageIndex < i + 1 && !pre) {
            array.push({
              offset: i * limit,
              limit,
              iscurrent: pageIndex === i + 1,
              omitted: true,
              page: i + 1
            })
            pre = true
          }
          if (pageIndex > i + 1 && !next) {
            array.push({
              offset: i * limit,
              limit,
              iscurrent: pageIndex === i + 1,
              omitted: true,
              page: i + 1
            })
            next = true
          }
          continue
        }
      }
      array.push({
        offset: i * limit,
        limit,
        omitted: false,
        iscurrent: pageIndex === i + 1,
        page: i + 1
      })
    }
    return array
  }

  render() {
    const array = this.getPageArray(this.props)
    let { offset, limit, total } = this.props
    offset = offset * 1
    limit = limit * 1
    total = total * 1
    let pageTotal = Math.ceil(total / limit)
    return (
      <div >
        <footer className={'fenye flex tb-flex lr-flex'}>
          <article className='left'>共 {this.props.total} 条</article>
          <span
            className={'fenyeItem otherPage'}
            onClick={() => {
              if (this.props.onItemClick) {
                this.props.onItemClick({ offset: offset - limit < 0 ? 0 : offset - limit, limit })
              }
            }}
          >{`pre`}</span>
          {array.map(({ offset, limit, omitted, iscurrent, page }, index) => {
            if (omitted) return <span>...</span>
            let className = `fenyeItem otherPage`
            if (iscurrent) {
              className = 'fenyeItem curPageCss'
            }
            return (
              <span
                className={className}
                onClick={() => {
                  if (this.props.onItemClick) {
                    this.props.onItemClick({ offset, limit })
                  }
                }}
              >
                {page}
              </span>
            )
          })}
          <span
            className={'fenyeItem otherPage lastItem'}
            onClick={() => {
              if (this.props.onItemClick) {
                let nextOffset = offset + limit > (pageTotal - 1) * limit ? (pageTotal - 1) * limit : offset + limit
                this.props.onItemClick({ offset: nextOffset, limit })
              }
            }}
          >
            {'next'}
          </span>
        </footer>
        <style jsx>{`
          .fenye {
            margin-top: 10px;
            padding: 10px;
            line-height: 26px;
            position: relative;
            text-align: center;
            font-size: 12px;
          }
          .fenye article {
            padding-left: 0.2rem;
          }
          .fenye article input[type='number'] {
            width: 0.3rem;
            padding: 0;
            margin: 0 ${theme.midmargin};
          }
          .fenyeItem {
            width: 28px;
            height: 28px;
            background: rgba(255, 255, 255, 1);
            border-radius: 4px;
            margin-right: 8px;
            cursor:pointer;
          }
          .fenyeItem.curPageCss {
            color: #fff;
            border: 1px solid #3464ca;
            background: rgba(16, 142, 233, 1);
            background: rgba(42, 205, 200, 1);
            border-radius: 4px;
            border: 0;
          }
          .otherPage {
            border: 1px solid #d9d9d9;
            background: rgba(255, 255, 255, 1);
          }
          .lastItem {
            margin-right: 0px;
          }
        `}</style>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(PageCard)
