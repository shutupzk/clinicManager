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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy9zdG9yZS5qcyJdLCJuYW1lcyI6WyJtaWRkbGV3YXJlIiwicGVyc2lzdENvbmZpZyIsImtleSIsInN0b3JhZ2UiLCJhcHBSZWR1Y2VyIiwidXNlciIsImRvY3RvcnMiLCJ0cmlhZ2VQYXRpZW50cyIsInBhdGllbnRzIiwiZGVwYXJ0bWVudHMiLCJ0cmlhZ2VEb2N0b3JzIiwic2NoZWR1bGVzIiwibWVkaWNhbFJlY29yZHMiLCJkcnVncyIsImV4YW1pbmF0aW9ucyIsImxhYm9yYXRvcmllcyIsIm1hdGVyaWFscyIsIm90aGVyQ29zdFMiLCJ0cmVhdG1lbnRzIiwiZG9zZVVuaXRzIiwiZXhhbWluYXRpb25PcmdhbnMiLCJ0cmVhdG1lbnRQYXRpZW50cyIsImxhYm9yYXRvcnlQYXRpZW50cyIsImV4YW1pbmF0aW9uUGF0aWVudHMiLCJjaGFyZ2UiLCJtYXRlcmlhbFBhdGllbnRzIiwib3RoZXJQYXRpZW50cyIsInByZXNjcmlwdGlvbldlc3Rlcm5QYXRpZW50cyIsImZyZXF1ZW5jaWVzIiwicm91dGVBZG1pbmlzdHJhdGlvbnNzIiwiZG9zZUZvcm1zIiwicHJlc2NyaXB0aW9uQ2hpbmVzZVBhdGllbnRzIiwibGFib3JhdG9yeVNhbXBsZXMiLCJjdXZldHRlQ29sb3JzIiwicm9vdFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJwZXJzaXN0ZWRSZWR1Y2VyIiwic3RvcmUiLCJwZXJzaXN0b3IiLCJnZXRTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7O0FBQ0E7O0FBK0JBOzs7Ozs7OztBQWhDZ0Q7QUFrQ2hELElBQU0sYUFBYSxjQUFuQjs7QUFFQSxJQUFNO09BQWdCLEFBQ2YsQUFDTDtxQkFGRixBQUFzQjtBQUFBLEFBQ3BCOztBQUlGLElBQU0sdURBQWEsQUFBdUI7ZUFBZSxBQUV2RDtrQkFGdUQsQUFHdkQ7eUJBSHVELEFBSXZEO21CQUp1RCxBQUt2RDtzQkFMdUQsQUFNdkQ7d0JBTnVELEFBT3ZEO29CQVB1RCxBQVF2RDt5QkFSdUQsQUFTdkQ7Z0JBVHVELEFBVXZEO3VCQVZ1RCxBQVd2RDt1QkFYdUQsQUFZdkQ7b0JBWnVELEFBYXZEO3FCQWJ1RCxBQWN2RDtxQkFkdUQsQUFldkQ7b0JBZnVELEFBZ0J2RDs0QkFoQnVELEFBaUJ2RDs0QkFqQnVELEFBa0J2RDs2QkFsQnVELEFBbUJ2RDs4QkFuQnVELEFBb0J2RDtpQkFwQnVELEFBcUJ2RDsyQkFyQnVELEFBc0J2RDt3QkF0QnVELEFBdUJ2RDtzQ0F2QnVELEFBd0J2RDtzQkF4QnVELEFBeUJ2RDtnQ0F6QnVELEFBMEJ2RDtvQkExQnVELEFBMkJ2RDtzQ0EzQnVELEFBNEJ2RDs0QkE1QnVELEFBNkJ2RDt3QkE3QkYsQUFBbUIsQUFBc0M7QUFBQSxBQUN2RCxDQURpQjs7QUFnQ25CLElBQU0sY0FBYyxTQUFkLEFBQWMsWUFBQSxBQUFDLE9BQUQsQUFBUSxRQUFXLEFBQ3JDO01BQUksT0FBQSxBQUFPLFNBQVgsQUFBb0IsZ0JBQWdCLEFBQ2xDO1lBQUEsQUFBUSxBQUNUO0FBQ0Q7U0FBTyxXQUFBLEFBQVcsT0FBbEIsQUFBTyxBQUFrQixBQUMxQjtBQUxEOztBQU9BLElBQU0sbUJBQW1CLGtDQUFBLEFBQWUsZUFBeEMsQUFBeUIsQUFBOEI7O0FBRXZEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQU0sUUFBUSx3QkFBQSxBQUFZLGtCQUFaLEFBQThCLElBQUksb0JBQVEsd0NBQXhELEFBQWMsQUFBa0MsQUFBUSxBQUFtQjtBQUMzRTtBQUNBLElBQU0sNENBQVksQUFBYSxPQUFiLEFBQW9CLE1BQU0sWUFBQTtTQUFNLE1BQU4sQUFBTSxBQUFNO0FBQXhELEFBQWtCLENBQUE7O1FBRVQsQSxRQUFBLEE7UUFBTyxBLFlBQUEsQSIsImZpbGUiOiJzdG9yZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva2FuZ2NoYS9NeVByb2plY3QvY2xpbmljTWFuYWdlciJ9