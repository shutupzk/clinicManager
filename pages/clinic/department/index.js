import withData from '../../../config/withData'
import { Layout } from '../../../modules/common'
import { DepartmentListScreen } from '../../../modules/clinic/screen'
import { TITLE } from '../../../config'

export default withData(props => {
  return (
    <Layout title={`${TITLE}`} {...props}>
      <DepartmentListScreen {...props} />
    </Layout>
  )
})
