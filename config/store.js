import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer, persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import { user, doctors, triagePatients, patients, departments, triageDoctors, schedules } from '../ducks'
import thunk from 'redux-thunk'
// import rootReducer from './reducers'

const persistConfig = {
  key: 'root',
  storage
}

const appReducer = persistCombineReducers(persistConfig, {
  user,
  doctors,
  triagePatients,
  patients,
  departments,
  triageDoctors,
  schedules
})

const rootReducer = (state, action) => {
  if (action.type === 'PROFILE_USER_SINGOUT') {
    state = {}
  }
  return appReducer(state, action)
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

// export default () => {
//   // let store = createStore(persistedReducer)

//   return { store, persistor }
// }
const store = createStore(persistedReducer, {}, compose(applyMiddleware(thunk)))
// let persistor = persistStore(store)
const persistor = persistStore(store, null, () => store.getState())

export { store, persistor }
