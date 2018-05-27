import withData from '../../../config/withData'
import { Layout } from '../../../modules/common'
import {TITLE} from '../../../config'
// import { BusinessClinicListScreen } from '../../../modules/platform'

export default withData((props) => {
  return (
    <Layout title={`${TITLE}`} {...props}>
      设置权限
    </Layout>
  )
})
