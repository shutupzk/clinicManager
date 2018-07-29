import React, { Component } from 'react'
// import Link from 'next/link'
import { theme } from '../../../components'
import Router from 'next/router'
import { getLastMenu } from '../../../utils'

export default class Navigation extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  renderLongMenu(children) {
    const { url } = this.props
    return (
      <div className={'childDiv'}>
        {children.map((item, index) => {
          let menu = getLastMenu(item)
          let navigateName = menu.menu_url
          return (
            // <Link key={item.menu_url} href={item.menu_url}>
            // </Link>
            <div key={index} onClick={() => Router.push(navigateName)} className={'childItem ' + (navigateName === url ? 'sel' : '')}>
              {item.menu_name}
            </div>
          )
        })}
        <style jsx='true'>{`
          .childItem {
            text-indent: 112px;
            font-family: MicrosoftYaHei;
          }
          .childItem.sel,
          .childItem:hover {
            color: rgba(42, 205, 200, 1);
          }
        `}</style>
      </div>
    )
  }
  render() {
    const { data, url } = this.props
    let parentUrl = url.split('/')[2]
    return (
      <ul className='footNavUl'>
        {data &&
          data.map((item, itemKey) => {
            let itemUrl = item.menu_url.split('/')[2]
            let children = []
            if (item.children) {
              children = item.children
            }
            let menu = getLastMenu(item)
            let navigateName = menu.menu_url
            // console.log('navigateName===', navigateName)
            // onClick={() => Router.push(navigateName)}
            return (
              <div key={itemKey} className={parentUrl === itemUrl ? 'selLeftMenu' : ''}>
                <div onClick={() => Router.push(navigateName)}>
                  <i />
                  <img src={item.icon} />
                  <a>{item.menu_name}</a>
                </div>
                {children.length > 0 ? this.renderLongMenu(children) : ''}
              </div>
            )
          })}
        <style jsx global>{`
          .footNavUl {
            position: relative;
            z-index: 10;
            width: 100%;
            // overflow: auto;
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
          .footNavUl > div {
            width: 256px;
            height: 50px;
            line-height: 50px;
            cursor: pointer;
            text-align: left;
            text-indent: 40px;
            font-size: 14px;
            font-family: MicrosoftYaHei;
            color: rgba(102, 102, 102, 1);
            display: flex;
            flex-direction: column;
            height: auto;
            min-height: 50px;
          }
          .footNavUl > div a {
            color: rgba(102, 102, 102, 1);
          }
          .footNavUl div i {
            display: none;
            float: left;
            margin: 15px 0 0 20px;
            width: 6px;
            height: 20px;
            background: rgba(42, 205, 200, 1);
            border-radius: 5px;
            position: absolute;
          }
          .footNavUl div img {
            width: 20px;
            height: 20px;
            float: left;
            margin: 15px 0 0 56px;
          }
          .footNavUl div a {
            float: left;
            margin-left: 36px;
            text-indent: 0;
          }
          .footNavUl > div > div.childDiv {
            display: none;
          }
          .footNavUl > div.selLeftMenu > div.childDiv {
            display: block;
          }
          .footNavUl > div > div:first-child:hover,
          .footNavUl > div.selLeftMenu > div:first-child {
            background: rgba(42, 205, 200, 0.23309999999999997);
            // opacity:0.23309999999999997;
            color: rgba(52, 52, 52, 1);
          }
          .footNavUl > div:hover i,
          .footNavUl > div.selLeftMenu i {
            display: block;
          }
        `}</style>
      </ul>
    )
  }
}
