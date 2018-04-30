import Head from './head'
import ConLayout from './con_layout'
import { styles } from '../../../components/styles'
import { RightContent } from '../../../components'

const Layout = props => {
  return (
    <main>
      <Head title={props.title} />
      <div>
        <ConLayout {...props} />
        <RightContent {...props} />
      </div>
      {styles()}
    </main>
  )
}

export default Layout
