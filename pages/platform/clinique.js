import withData from '../../config/withData'
import { Layout } from '../../modules/common'
import { TITLE } from '../../config'
import { ClinicListScreen } from '../../modules/platform'

export default withData(props => {
  return (
    <Layout title={`${TITLE}`} {...props}>
      <ClinicListScreen {...props} />
    </Layout>
  )
})
