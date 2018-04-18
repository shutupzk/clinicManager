import Head from './head'
import ConLayout from './con_layout'
import { styles } from '../../../components/styles'
import {RightContent, HeaderBar, FooterBar } from '../../../components'

const Layout = props => {
  return (
    <main>
      {/* <div className={'mask'}></div> */}
      <Head title={props.title} />
      <div>
        <ConLayout {...props} />
        <RightContent {...props} />
        {/* <Prompt /> */}
        {/* <div style={{ overflow: 'auto' }}>
          <ConLayout {...props} />
        </div> */}
        {/* <FooterBar notLoginPage /> */}
      </div>
      {styles()}
    </main>
  )
}

export default Layout
