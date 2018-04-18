import withData from '../../../config/withData'
import { Layout } from '../../../modules/common'
import { DoctorListScreen } from '../../../modules/clinic/screen'
import { TITLE } from '../../../config'

export default withData(props => {
  return (
    <Layout title={`${TITLE}`} {...props}>
      <DoctorListScreen {...props} />
    </Layout>
  )
})
