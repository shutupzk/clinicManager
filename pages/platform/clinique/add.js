// import { HomeScreen } from '../../modules/home'
import withData from '../../../config/withData'
import { Layout } from '../../../modules/common'
import { TITLE } from '../../../config'
import { ClinicAddScreen } from '../../../modules/platform'

export default withData(props => {
  return (
    <Layout title={`${TITLE}`} {...props}>
      <ClinicAddScreen {...props} />
    </Layout>
  )
})
