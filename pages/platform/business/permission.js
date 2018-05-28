import withData from '../../../config/withData'
import { Layout } from '../../../modules/common'
import {TITLE} from '../../../config'
import { BusinessClinicPermissionScreen } from '../../../modules/platform'

export default withData((props) => {
  return (
    <Layout title={`${TITLE}`} {...props}>
      <BusinessClinicPermissionScreen {...props} />
    </Layout>
  )
})
