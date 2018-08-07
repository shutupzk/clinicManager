// import { HomeScreen } from '../../modules/home'
import withData from '../../config/withData'
import { Layout } from '../../modules/common'
import {TITLE} from '../../config'
import {FinanceTemplateScreen} from '../../modules/finance'

export default withData((props) => {
  return (
    <Layout title={`${TITLE}`} {...props}>
      <FinanceTemplateScreen {...props} />
    </Layout>
  )
})
