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
  laboratoryPatients,
  examinationPatients,
  materialPatients,
  otherPatients,
  prescriptionWesternPatients,
  frequencies,
  routeAdministrationss,
  doseForms,
  prescriptionChinesePatients,
  charge,
  laboratorySamples,
  cuvetteColors,
  laboratoryItems,
  prescriptionWesternPatientModels,
  prescriptionChinesePatientModels,
  diagnosisTreatments,
  receiveRecords,
  treatmentPatientModels,
  examinationModels,
  laboratoryPatientModels,
  onCredit,
  associations,
  clinics,
  roles,
  menus,
  drugStocks,
  drugClasses,
  drugOutStocks,
  materailStocks,
  materialOutStocks,
  clinicPermissions
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
  laboratoryPatients,
  examinationPatients,
  charge,
  materialPatients,
  otherPatients,
  prescriptionWesternPatients,
  frequencies,
  routeAdministrationss,
  doseForms,
  prescriptionChinesePatients,
  laboratorySamples,
  cuvetteColors,
  laboratoryItems,
  prescriptionWesternPatientModels,
  prescriptionChinesePatientModels,
  diagnosisTreatments,
  receiveRecords,
  treatmentPatientModels,
  examinationModels,
  laboratoryPatientModels,
  onCredit,
  associations,
  clinics,
  roles,
  menus,
  drugStocks,
  drugClasses,
  drugOutStocks,
  materailStocks,
  materialOutStocks,
  clinicPermissions
})

const rootReducer = (state, action) => {
  if (action.type === 'USER_SIGNOUT') {
    state = {}
  }
  return appReducer(state, action)
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

// export default () => {
//   const store = createStore(persistedReducer, {}, compose(applyMiddleware(...middleware)))
//   const persistor = persistStore(store, null, () => store.getState())
//   return { store, persistor }
// }

const store = createStore(persistedReducer, {}, compose(applyMiddleware(...middleware)))
const persistor = persistStore(store, null, () => store.getState())

export { store, persistor }
