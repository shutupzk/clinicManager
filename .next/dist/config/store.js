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
  cuvetteColors: _ducks.cuvetteColors,
  laboratoryItems: _ducks.laboratoryItems
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZ1xcc3RvcmUuanMiXSwibmFtZXMiOlsibWlkZGxld2FyZSIsInBlcnNpc3RDb25maWciLCJrZXkiLCJzdG9yYWdlIiwiYXBwUmVkdWNlciIsInVzZXIiLCJkb2N0b3JzIiwidHJpYWdlUGF0aWVudHMiLCJwYXRpZW50cyIsImRlcGFydG1lbnRzIiwidHJpYWdlRG9jdG9ycyIsInNjaGVkdWxlcyIsIm1lZGljYWxSZWNvcmRzIiwiZHJ1Z3MiLCJleGFtaW5hdGlvbnMiLCJsYWJvcmF0b3JpZXMiLCJtYXRlcmlhbHMiLCJvdGhlckNvc3RTIiwidHJlYXRtZW50cyIsImRvc2VVbml0cyIsImV4YW1pbmF0aW9uT3JnYW5zIiwidHJlYXRtZW50UGF0aWVudHMiLCJsYWJvcmF0b3J5UGF0aWVudHMiLCJleGFtaW5hdGlvblBhdGllbnRzIiwiY2hhcmdlIiwibWF0ZXJpYWxQYXRpZW50cyIsIm90aGVyUGF0aWVudHMiLCJwcmVzY3JpcHRpb25XZXN0ZXJuUGF0aWVudHMiLCJmcmVxdWVuY2llcyIsInJvdXRlQWRtaW5pc3RyYXRpb25zcyIsImRvc2VGb3JtcyIsInByZXNjcmlwdGlvbkNoaW5lc2VQYXRpZW50cyIsImxhYm9yYXRvcnlTYW1wbGVzIiwiY3V2ZXR0ZUNvbG9ycyIsImxhYm9yYXRvcnlJdGVtcyIsInJvb3RSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicGVyc2lzdGVkUmVkdWNlciIsInN0b3JlIiwicGVyc2lzdG9yIiwiZ2V0U3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7OztBQUNBOztBQWdDQTs7Ozs7Ozs7QUFqQ2dEO0FBbUNoRCxJQUFNLGFBQWEsY0FBbkI7O0FBRUEsSUFBTTtPQUFnQixBQUNmLEFBQ0w7cUJBRkYsQUFBc0I7QUFBQSxBQUNwQjs7QUFJRixJQUFNLHVEQUFhLEFBQXVCO2VBQWUsQUFFdkQ7a0JBRnVELEFBR3ZEO3lCQUh1RCxBQUl2RDttQkFKdUQsQUFLdkQ7c0JBTHVELEFBTXZEO3dCQU51RCxBQU92RDtvQkFQdUQsQUFRdkQ7eUJBUnVELEFBU3ZEO2dCQVR1RCxBQVV2RDt1QkFWdUQsQUFXdkQ7dUJBWHVELEFBWXZEO29CQVp1RCxBQWF2RDtxQkFidUQsQUFjdkQ7cUJBZHVELEFBZXZEO29CQWZ1RCxBQWdCdkQ7NEJBaEJ1RCxBQWlCdkQ7NEJBakJ1RCxBQWtCdkQ7NkJBbEJ1RCxBQW1CdkQ7OEJBbkJ1RCxBQW9CdkQ7aUJBcEJ1RCxBQXFCdkQ7MkJBckJ1RCxBQXNCdkQ7d0JBdEJ1RCxBQXVCdkQ7c0NBdkJ1RCxBQXdCdkQ7c0JBeEJ1RCxBQXlCdkQ7Z0NBekJ1RCxBQTBCdkQ7b0JBMUJ1RCxBQTJCdkQ7c0NBM0J1RCxBQTRCdkQ7NEJBNUJ1RCxBQTZCdkQ7d0JBN0J1RCxBQThCdkQ7MEJBOUJGLEFBQW1CLEFBQXNDO0FBQUEsQUFDdkQsQ0FEaUI7O0FBaUNuQixJQUFNLGNBQWMsU0FBZCxBQUFjLFlBQUEsQUFBQyxPQUFELEFBQVEsUUFBVyxBQUNyQztNQUFJLE9BQUEsQUFBTyxTQUFYLEFBQW9CLGdCQUFnQixBQUNsQztZQUFBLEFBQVEsQUFDVDtBQUNEO1NBQU8sV0FBQSxBQUFXLE9BQWxCLEFBQU8sQUFBa0IsQUFDMUI7QUFMRDs7QUFPQSxJQUFNLG1CQUFtQixrQ0FBQSxBQUFlLGVBQXhDLEFBQXlCLEFBQThCOztBQUV2RDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFNLFFBQVEsd0JBQUEsQUFBWSxrQkFBWixBQUE4QixJQUFJLG9CQUFRLHdDQUF4RCxBQUFjLEFBQWtDLEFBQVEsQUFBbUI7QUFDM0U7QUFDQSxJQUFNLDRDQUFZLEFBQWEsT0FBYixBQUFvQixNQUFNLFlBQUE7U0FBTSxNQUFOLEFBQU0sQUFBTTtBQUF4RCxBQUFrQixDQUFBOztRQUVULEEsUUFBQSxBO1FBQU8sQSxZQUFBLEEiLCJmaWxlIjoic3RvcmUuanMiLCJzb3VyY2VSb290IjoiRjovcHJvZ3JhbXMvY2xpbmljTWFuYWdlciJ9