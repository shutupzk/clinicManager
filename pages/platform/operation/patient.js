// import { HomeScreen } from '../../modules/home'
import withData from '../../../config/withData'
import { Layout } from '../../../modules/common'
import {TITLE} from '../../../config'
import { PatientScreen } from '../../../modules/platform'

export default withData((props) => {
  return (
    <Layout title={`${TITLE}`} {...props}>
      <PatientScreen {...props} />
    </Layout>
  )
})
