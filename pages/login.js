import { SigninScreen } from '../modules/signin'
import withData from '../config/withData'
// import { BlankLayout } from '../modules/common'
// import { TITLE } from '../config'

export default withData(props => {
  return (
    <SigninScreen {...props} />)
})
