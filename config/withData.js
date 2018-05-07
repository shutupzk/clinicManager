import React from 'react'
import localforage from 'localforage'
import { Provider } from 'react-redux'
import { store, persistor } from './store'
// import initStore from './store'
import { PersistGate } from 'redux-persist/integration/react'
export default function(Component) {
  class Auth extends React.Component {
    constructor(props) {
      super(props)
      this.state = { token: undefined }
    }

    async componentWillMount() {
      try {
        let token = await localforage.getItem('token')
        this.setState({ token })
      } catch (e) {
        // console.log('get Token Error', e)
      }
    }

    render() {
      // const { store, persistor } = initStore()
      return (
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Component url={this.props.url} />
          </PersistGate>
        </Provider>
      )
    }
  }
  return Auth
}
