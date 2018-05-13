'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.persistor = exports.store = undefined;

var _redux = require('redux');

var _reduxPersist = require('redux-persist');

var _storage = require('redux-persist/lib/storage');

var _storage2 = _interopRequireDefault(_storage);

var _ducks = require('../ducks');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// defaults to localStorage for web and AsyncStorage for react-native
var middleware = [_reduxThunk2.default];

var persistConfig = {
  key: 'root',
  storage: _storage2.default
};

var appReducer = (0, _reduxPersist.persistCombineReducers)(persistConfig, {
  user: _ducks.user,
  doctors: _ducks.doctors,
  triagePatients: _ducks.triagePatients,
  patients: _ducks.patients,
  departments: _ducks.departments,
  triageDoctors: _ducks.triageDoctors,
  schedules: _ducks.schedules,
  medicalRecords: _ducks.medicalRecords,
  drugs: _ducks.drugs,
  examinations: _ducks.examinations,
  laboratories: _ducks.laboratories,
  materials: _ducks.materials,
  otherCostS: _ducks.otherCostS,
  treatments: _ducks.treatments,
  doseUnits: _ducks.doseUnits,
  examinationOrgans: _ducks.examinationOrgans,
  treatmentPatients: _ducks.treatmentPatients,
  laboratoryPatients: _ducks.laboratoryPatients,
  examinationPatients: _ducks.examinationPatients,
  charge: _ducks.charge,
  materialPatients: _ducks.materialPatients,
  otherPatients: _ducks.otherPatients,
  prescriptionWesternPatients: _ducks.prescriptionWesternPatients,
  frequencies: _ducks.frequencies,
  routeAdministrationss: _ducks.routeAdministrationss,
  doseForms: _ducks.doseForms,
  prescriptionChinesePatients: _ducks.prescriptionChinesePatients,
  laboratorySamples: _ducks.laboratorySamples,
  cuvetteColors: _ducks.cuvetteColors
});

var rootReducer = function rootReducer(state, action) {
  if (action.type === 'USER_SIGNOUT') {
    state = {};
  }
  return appReducer(state, action);
};

var persistedReducer = (0, _reduxPersist.persistReducer)(persistConfig, rootReducer);

// export default () => {
//   // let store = createStore(persistedReducer)

//   return { store, persistor }
// }
var store = (0, _redux.createStore)(persistedReducer, {}, (0, _redux.compose)(_redux.applyMiddleware.apply(undefined, middleware)));
// let persistor = persistStore(store)
var persistor = (0, _reduxPersist.persistStore)(store, null, function () {
  return store.getState();
});

exports.store = store;
exports.persistor = persistor;