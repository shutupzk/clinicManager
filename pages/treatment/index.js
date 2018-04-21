import { AddNewRegistrationScreen } from '../../modules/treatment'
import withData from '../../config/withData'
import { Layout } from '../../modules/common'
import {TITLE} from '../../config'

export default withData((props) => {
  return (
    <Layout title={`${TITLE}`} {...props}>
      {/* <div> teatment </div> */}
      <AddNewRegistrationScreen {...props} />
    </Layout>
  )
})
