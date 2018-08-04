import { ReportScreen } from '../../../modules/treatment'
import withData from '../../../config/withData'
import { Layout } from '../../../modules/common'
import { TITLE } from '../../../config'

export default withData(props => {
  return (
    <Layout title={`${TITLE}`} {...props}>
      <ReportScreen {...props} />
    </Layout>
  )
})
