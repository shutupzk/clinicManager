import React, { Component } from 'react'
import Link from 'next/link'
import { theme } from '../../../components'

export default class Navigation extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    const { data, url } = this.props
    return (
      <ul className='footNavUl'>
        {data &&
          data.map((item, itemKey) => {
            return (
              <Link href={item.navigateName}>
                <div className={url === item.navigateName ? 'selLeftMenu' : ''}>{item.title}</div>
              </Link>
            )
          })}
        <style jsx global>{`
          .footNavUl {
            position: relative;
            z-index: 10;
            width: 100%;
            overflow: auto;
          }
          .footNavLI {
            line-height: 0.46rem;
            font-size: 0.16rem;
            cursor: pointer;
          }
          .footNavLI.leftLiCur {
            background: #1a3979;
          }
          .footNavLI.leftLiCur .footNavLIA {
            color: #fff !important;
          }
          .footNavChild {
            padding-bottom: 6px;
            background: #2a3788;
          }
          .footNavChildItem {
            line-height: 0.4rem;
            border-top: 1px solid ${theme.bordercolor};
          }
          .footNavUl div {
            width: 171px;
            height: 45px;
            line-height: 45px;
            cursor: pointer;
            text-align: left;
            text-indent: 40px;
          }
          .footNavUl div:hover,
          .footNavUl div.selLeftMenu {
            color: #fff;
            background: inherit;
            box-sizing: border-box;
            border-width: 1px;
            border-style: solid;
            border-color: rgba(204, 204, 204, 1);
            border-radius: 0px;
            -moz-box-shadow: none;
            -webkit-box-shadow: none;
            box-shadow: none;
            background-color: rgba(0, 204, 102, 1);
          }
        `}</style>
      </ul>
    )
  }
}
