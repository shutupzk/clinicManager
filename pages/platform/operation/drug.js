// import { HomeScreen } from '../../modules/home'
import withData from '../../../config/withData'
import { Layout } from '../../../modules/common'
import {TITLE} from '../../../config'
import { DrugScreen } from '../../../modules/platform'

export default withData((props) => {
  return (
    <Layout title={`${TITLE}`} {...props}>
      <DrugScreen {...props} />
    </Layout>
  )
})
