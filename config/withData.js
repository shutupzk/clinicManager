import React from 'react'
import localforage from 'localforage'
import { Provider } from 'react-redux'
// import { store } from './store'
import { initStore } from './store'
export default function(Component) {
  class Auth extends React.Component {
    constructor(props) {
      super(props)
      this.state = { token: undefined }
    }

    async componentWillMount() {
      let token = await localforage.getItem('token')
      this.setState({ token })
    }

    render() {
      const store = initStore()
      return (
        <Provider store={store}>
          <Component url={this.props.url} />
        </Provider>
      )
    }
  }
  return Auth
}
