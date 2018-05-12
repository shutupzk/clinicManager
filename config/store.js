import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer, persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import {
  user,
  doctors,
  triagePatients,
  patients,
  departments,
  triageDoctors,
  schedules,
  medicalRecords,
  drugs,
  examinations,
  laboratories,
  materials,
  otherCostS,
  treatments,
  doseUnits,
  examinationOrgans,
  treatmentPatients,
  laboratoryPatients
} from '../ducks'
import thunk from 'redux-thunk'

const middleware = [thunk]

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
  schedules,
  medicalRecords,
  drugs,
  examinations,
  laboratories,
  materials,
  otherCostS,
  treatments,
  doseUnits,
  examinationOrgans,
  treatmentPatients,
  laboratoryPatients
})

const rootReducer = (state, action) => {
  if (action.type === 'USER_SIGNOUT') {
    state = {}
  }
  return appReducer(state, action)
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

// export default () => {
//   // let store = createStore(persistedReducer)

//   return { store, persistor }
// }
const store = createStore(persistedReducer, {}, compose(applyMiddleware(...middleware)))
// let persistor = persistStore(store)
const persistor = persistStore(store, null, () => store.getState())

export { store, persistor }
