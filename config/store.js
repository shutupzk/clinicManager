import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { autoRehydrate } from 'redux-persist'
import thunk from 'redux-thunk'

import { user, doctors, triagePatients } from '../ducks'

// middleware
function createMiddleware() {
  if (process.browser && window.devToolsExtension) {
    return compose(
      applyMiddleware(thunk),
      autoRehydrate(),
      // If you are using the devToolsExtension, you can add it here also
      typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
  }
  return compose(applyMiddleware(thunk), autoRehydrate())
}

// reducer
function getReducer() {
  return combineReducers({ user, doctors, triagePatients })
}

// store
let reduxStore = null

export const initStore = initialState => {
  let store
  if (!process.browser || !reduxStore) {
    const middleware = createMiddleware()
    store = createStore(getReducer(), initialState, middleware)
    if (!process.browser) {
      return store
    }
    reduxStore = store
  }
  return reduxStore
}
