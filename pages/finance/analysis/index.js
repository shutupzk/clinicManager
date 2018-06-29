import withData from '../../../config/withData'
import { Layout } from '../../../modules/common'
import { TITLE } from '../../../config'
import { FinanceAnalyslsScreen } from '../../../modules/finance'

export default withData(props => {
  return (
    <Layout title={`${TITLE}`} {...props}>
      <FinanceAnalyslsScreen {...props} />
    </Layout>
  )
})
