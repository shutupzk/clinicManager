import { createStore, compose, applyMiddleware } from 'redux'
import { persistCombineReducers, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import thunk from 'redux-thunk'
import { user, doctors, triagePatients, patients } from '../ducks'

const reduxConfig = {
  key: 'root',
  storage
}

const appReducer = persistCombineReducers(reduxConfig, {
  user,
  doctors,
  triagePatients,
  patients
})

const rootReducer = (state, action) => {
  if (action.type === 'USER_SIGNOUT') {
    state = {}
  }
  return appReducer(state, action)
}

// middleware
function createMiddleware() {
  if (process.browser && window.devToolsExtension) {
    return compose(
      applyMiddleware(thunk),
      // If you are using the devToolsExtension, you can add it here also
      typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
  }
  return compose(applyMiddleware(thunk))
}

const store = createStore(rootReducer, {}, createMiddleware())

const persistor = persistStore(store, null, () => store.getState())
export { store, persistor }
