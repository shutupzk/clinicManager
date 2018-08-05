import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer, persistCombineReducers } from 'redux-persist'
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native

import { user, signin, signout, FunMenusByPersonnel, saveUserMenu, MenubarList } from './user'
import {
  doctors,
  queryDoctorList,
  doctorSelect,
  doctorCreate,
  PersonnelUpdate,
  PersonnelDelete,
  PersonnelWithUsername,
  UpdatePersonnelStatus,
  PersonnelRoles,
  PersonnelAuthorizationAllocation,
  UpdatePersonnelUsername,
  PersonnelDepartmentList
} from './doctors'
import {
  triagePatients,
  triagePatientsList,
  triagePatientsSelect,
  addTriagePatientsList,
  triagePatient,
  addAppointment,
  triageReception,
  triageFinish,
  queryAppointmentsByDate,
  completeBodySign,
  completePreMedicalRecord,
  completePreDiagnosis,
  GetHealthRecord,
  TriagePatientDetail,
  GetLastBodySign,
  RecptionPatientList,
  TriagePatientVisitDetail,
  QuickReception,
  TriagePatientReport
} from './triage_patients'
import {
  patients,
  getPatientByCertNo,
  patientSelect,
  getPatientByKeyword,
  MemberPateintList,
  PatientGetByID,
  PersonalMedicalRecord,
  PatientUpdate,
  PersonalMedicalRecordUpsert,
  UpsertPatientHeight,
  UpsertPatientWeight,
  UpsertPatientBloodPressure,
  UpsertPatientVision,
  UpsertPatientBloodSugar,
  PatientHeightList,
  PatientWeightList,
  PatientBmiList,
  PatientBloodPressureList,
  PatientVisionList,
  PatientBloodSugarList,
  PatientCountBySex,
  PatientCountByAge,
  PatientCountByChannel
} from './patients'
import { departments, queryDepartmentList, departmentSelect, departmentCreate, DepartmentDelete, DepartmentUpdate } from './departments'
import { triageDoctors, triageDoctorsList, triageDoctorsSelect } from './triage_doctors'
import { schedules, queryScheduleDepartments, queryScheduleDoctors, queryDoctorsWithSchedule, copyScheduleByDate, openScheduleByDate, createOneSchedule, deleteOneUnOpenScheduleByID, stopScheduleByID, querySchedules, RemoveScheduleByID } from './schedules'
import {
  medicalRecords,
  createMedicalRecord,
  createMedicalRecordAsModel,
  MedicalRecordModelUpdate,
  MedicalRecordModelDelete,
  queryMedicalRecord,
  queryMedicalModels,
  queryMedicalsByPatient,
  queryMedicalModelsByDoctor,
  queryChiefComplaints,
  MedicalRecordRenew,
  MedicalRecordRenewUpdate,
  MedicalRecordRenewDelete,
  selectHistoryMedicalRecord
} from './medicRecord'
import { drugs, ClinicDrugCreate, ClinicDrugList, queryDicDrugsList, ClinicDrugUpdate, ClinicDrugDetail, ClinicDrugOnOff, ClinicDrugListWithStock, ClinicDrugBatchSetting, clearLocalDrugData } from './drug'
import { laboratories, laboratoryCreate, queryLaboratoryList, queryLaboList, LaboratoryOnOff, LaboratoryUpdate, LaboratoryDetail } from './laboratory'
import { examinations, examinationCreate, queryExaminationList, ExaminationUpdate, ExaminationOnOff, ExaminationDetail, queryExams } from './examination'
import { materials, materialCreate, MaterialUpdate, MaterialOnOff, MaterialDetail, queryMaterialList } from './material'
import { otherCostS, otherCostsCreate, OtherCostUpdate, OtherCostOnOff, OtherCostDetail, queryOtherCostList } from './other_cost'
import { treatments, treatmentCreate, TreatmentUpdate, TreatmentOnOff, TreatmentDetail, queryTreatmentList } from './treatment'
import { doseUnits, queryDoseUnitList } from './dose_unit'
import { examinationOrgans, queryExaminationOrganList } from './examination_organs'
import { treatmentPatients, TreatmentPatientCreate, TreatmentPatientGet } from './treatment_patient'
import { laboratoryPatients, LaboratoryPatientCreate, LaboratoryPatientGet } from './laboratory_patient'
import { examinationPatients, ExaminationPatientCreate, ExaminationPatientGet } from './examination_patient'
import { charge, queryChargeUnpayList, chargeUnpaySelect, queryUnPaidOrders, createPayment, queryChargePaidList, chargePaidSelect, queryPaidOrders, PatientChargeList, queryPaymentStatus, refundPaymen } from './charge'
import { materialPatients, MaterialPatientCreate, MaterialPatientGet } from './material_patient'
import { otherPatients, OtherCostPatientCreate, OtherCostPatientGet } from './other_patient'
import { prescriptionWesternPatients, PrescriptionWesternPatientCreate, PrescriptionWesternPatientGet } from './prescription_western_patient'
import { frequencies, queryFrequencyList } from './frequencys'
import { routeAdministrationss, queryRouteAdministrationList } from './route_administrations'
import { doseForms, queryDoseFormList } from './dose_form'
import { prescriptionChinesePatients, PrescriptionChinesePatientCreate, PrescriptionChinesePatientGet, PrescriptionChinesePatientDelete } from './prescription_chinese_patient'
import { cuvetteColors, queryCuvetteColorList } from './cuvette_color'
import { laboratorySamples, queryLaboratorySampleList } from './laboratory_sample'
import { laboratoryItems, queryLaboratoryItemList, laboratoryItemCreate, LaboratoryItemUpdate, LaboratoryItemOnOff, LaboratoryItemDetail, queryLaboItemsList } from './laboratory_item'
import { prescriptionWesternPatientModels, PrescriptionWesternPatientModelList, PrescriptionWesternPatientModelCreate, PrescriptionWesternPatientModelUpdate, PrescriptionWesternPatientModelDetail, PrescriptionWesternPatientModelDelete } from './prescription_western_patient_model'
import { prescriptionChinesePatientModels, PrescriptionChinesePatientModelList, PrescriptionChinesePatientModelCreate, PrescriptionChinesePatientModelUpdate, PrescriptionChinesePatientModelDetail, PrescriptionChinesePatientModelDelete } from './prescription_chinese_patient_model'
import { receiveRecords, queryReceiveRecords } from './receive_records'
import { diagnosisTreatments, queryDiagnosisTreatmentList, diagnosisTreatmentCreate, DiagnosisTreatmentUpdate, DiagnosisTreatmentOnOff, DiagnosisTreatmentDetail, queryDictDiagnosisList } from './diagnosisTreatment'
import { treatmentPatientModels, TreatmentPatientModelList, TreatmentPatientModelUpdate, TreatmentPatientModelDetail, TreatmentPatientModelDelete, TreatmentPatientModelCreate } from './treatment_models'
import { examinationModels, examinationModelList, ExaminationPatientModelUpdate, ExaminationPatientModelDetail, ExaminationPatientModelDelete, examinationModelCreate } from './examination_models'
import {
  examinationReportModels,
  examinationReportList,
  examinationReportCreate,
  ExaminationReportModelUpdate,
  ExaminationReportModelDetail,
  ExaminationReportModelDelete
} from './examination_report_models'
import { laboratoryPatientModels, LaboratoryPatientModelCreate, LaboratoryPatientModelUpdate, LaboratoryPatientModelDetail, LaboratoryPatientModelDelete, LaboratoryPersonalPatientModelList, LaboratoryPatientModelList } from './laboratory_model'
import { onCredit, queryCreditTriageList, creditTriageSelect, queryCreditRecordList } from './on_credit'
import { associations, queryAssociationList, LaboratoryAssociationCreate } from './laboratory_association'
import { clinics, clinicCreate, queryClinicList, clinicUpdateStatus, clinicUpdate, queryClinicCode, clinicSelect } from './clinic'
import { roles, queryRoleList, roleCreate, roleSelect, RoleUpdate, RoleDetail, RoleAllocation, RoleFunctionUnset, PersonnelsByRole, RoleDelete } from './role'
import { menus, queryMenuGetByClinicID, menuSelect } from './business'
import { drugStocks, queryDrugInstockRecord, createDrugInstock, drugStockSelect, queryInstockWayList, querySupplierList, queryDrugInstockRecordDetail, DrugInstockCheck, DrugInstockUpdate, DrugInstockRecordDelete } from './drug_stock'
import { drugClasses, queryDrugClassList } from './drug_class'
import { drugOutStocks, queryDrugOutstockRecord, createDrugOutstock, DrugOutstockUpdate, DrugOutstockRecordDelete, drugOutStockSelect, queryDrugOutstockRecordDetail, DrugOutstockCheck, queryOutstockWayList, queryDrugStockList } from './drug_outstock'
import { materailStocks, queryMaterialInstockRecord, createMaterialInstock, MaterialInstockUpdate, MaterialInstockRecordDelete, materialStockSelect, queryMaterialInstockRecordDetail, MaterialInstockCheck } from './material_stock'
import { materialOutStocks, queryMaterialOutstockRecord, createMaterialOutstock, MaterialOutstockUpdate, MaterialOutstockRecordDelete, materialOutStockSelect, queryMaterialOutstockRecordDetail, MaterialOutstockCheck, queryMaterialStockList } from './material_outstock'
import { clinicPermissions, queryClinicHassetPermissions, queryClinicUnsetPermissions, createClinicPermissions } from './clinic_permission'
import { drugDeliveryPending, queryDrugPendingTraigeList, drugPendingTraigeSelect, queryDrugDeliveryList } from './drug_delivery_pending'
import { drugDeliveryIssued, queryDrugIssuedTraigeList, drugIssuedTraigeSelect } from './drug_delivery_issued'
import { drugDeliveryRefund, queryDrugRefundTraigeList, drugRefundTraigeSelect } from './drug_delivery_refund'
import { drugDelivery, queryDrugDeliveryRecordList, drugDeliverySelect, drugDeliveryCreate, queryDrugDeliveryRecordDetail, drugDeliveryRecover, queryDrugDeliveryRefundRecordList, queryDrugDeliveryRefundRecordDetail } from './drug_delivery'
import { DiagnosisTreatmentPatientCreate } from './diagnosis_treatment_patient'
import { finances, queryFinanceList, queryFinanceMonthList, queryFinanceItemList, queryFinanceCredit, queryFinanceListAnalysis } from './finance'
import { FileUpload, xhrFileUpload } from './files'
import { examinationTriages, ExaminationTriageList, ExaminationTriageWaiting, ExaminationTriageChecked, ExaminationTriageChecking, ExaminationTriageRecordCreate, ExaminationTriageUpdate, ExaminationTriageRecordList, ExaminationTriagePatientRecordList } from './examination_triage'
import {
  laboratoryTriages,
  LaboratoryTriageList,
  LaboratoryTriageWaiting,
  LaboratoryTriageChecked,
  LaboratoryTriageChecking,
  LaboratoryTriageRecordCreate,
  LaboratoryTriageUpdate,
  LaboratoryTriageRecordList,
  LaboratoryTriageDetail,
  LaboratoryTriageRecordDetail,
  LaboratoryTriagePatientRecordList
} from './laboratory_triage'
import { treatmentTriages, TreatmentTriageList, TreatmentTriageWaiting, TreatmentTriageChecked, TreatmentTriageChecking, TreatmentTriageRecordCreate, TreatmentTriageRecordList, TreatmentTriageUpdate, TreatmentTriagePatientRecordList } from './treatment_triage'

import { drugRetail, createDrugRetailOrder, createDrugRetailPaymentOrder, DrugRetailList, SelectDrugRetail, DrugRetailDetail, DrugRetailRefund, DrugRetailPaymentStatus } from './drug_retail'
import {
  admins,
  AdminList,
  AdminCreate,
  AdminUpdate,
  AdminOnOff,
  AdminGetByID,
  AdminLogin,
  adminSelect,
  MenubarUnsetByAdminID,
  MenuGetByAdminID
} from './admin'

const persistConfig = {
  key: 'root',
  storage
}

const appReducer = persistCombineReducers(persistConfig, {
  admins,
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
  clinicPermissions,
  drugDeliveryPending,
  drugDeliveryIssued,
  drugDeliveryRefund,
  drugDelivery,
  finances,
  examinationTriages,
  laboratoryTriages,
  treatmentTriages,
  drugRetail,
  examinationReportModels
})

const rootReducer = (state, action) => {
  if (action.type === 'USER_SIGNOUT') {
    state = {}
  }
  return appReducer(state, action)
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleware = [thunk]

// export default () => {
//   const store = createStore(persistedReducer, {}, compose(applyMiddleware(...middleware)))
//   const persistor = persistStore(store, null, () => store.getState())
//   return { store, persistor }
// }

const store = createStore(persistedReducer, {}, compose(applyMiddleware(...middleware)))
const persistor = persistStore(store, null, () => store.getState())

export { store, persistor }

// actions
export {
  signin,
  signout,
  FunMenusByPersonnel,
  saveUserMenu,
  queryDoctorList,
  doctorSelect,
  PersonnelDepartmentList,
  PersonnelUpdate,
  PersonnelDelete,
  triagePatientsList,
  triagePatientsSelect,
  addTriagePatientsList,
  getPatientByCertNo,
  PatientCountBySex,
  PatientCountByAge,
  PatientCountByChannel,
  patientSelect,
  MemberPateintList,
  queryDepartmentList,
  departmentSelect,
  DepartmentDelete,
  DepartmentUpdate,
  triageDoctorsList,
  triageDoctorsSelect,
  triagePatient,
  addAppointment,
  triageReception,
  triageFinish,
  queryScheduleDepartments,
  queryScheduleDoctors,
  departmentCreate,
  doctorCreate,
  getPatientByKeyword,
  queryDoctorsWithSchedule,
  copyScheduleByDate,
  openScheduleByDate,
  createOneSchedule,
  deleteOneUnOpenScheduleByID,
  stopScheduleByID,
  querySchedules,
  queryAppointmentsByDate,
  completeBodySign,
  completePreMedicalRecord,
  completePreDiagnosis,
  createMedicalRecord,
  createMedicalRecordAsModel,
  MedicalRecordModelDelete,
  MedicalRecordModelUpdate,
  queryMedicalRecord,
  queryMedicalModels,
  queryMedicalModelsByDoctor,
  queryMedicalsByPatient,
  ClinicDrugCreate,
  ClinicDrugUpdate,
  ClinicDrugDetail,
  ClinicDrugOnOff,
  ClinicDrugList,
  ClinicDrugListWithStock,
  examinationCreate,
  laboratoryCreate,
  materialCreate,
  MaterialUpdate,
  MaterialOnOff,
  MaterialDetail,
  otherCostsCreate,
  OtherCostUpdate,
  OtherCostOnOff,
  OtherCostDetail,
  treatmentCreate,
  TreatmentUpdate,
  TreatmentOnOff,
  TreatmentDetail,
  queryExaminationList,
  queryLaboratoryList,
  queryMaterialList,
  queryOtherCostList,
  queryTreatmentList,
  queryDoseUnitList,
  queryExaminationOrganList,
  TreatmentPatientCreate,
  TreatmentPatientGet,
  LaboratoryPatientCreate,
  LaboratoryPatientGet,
  LaboratoryOnOff,
  LaboratoryUpdate,
  LaboratoryDetail,
  LaboratoryItemUpdate,
  LaboratoryItemOnOff,
  LaboratoryItemDetail,
  ExaminationPatientCreate,
  ExaminationPatientGet,
  queryChargeUnpayList,
  chargeUnpaySelect,
  queryUnPaidOrders,
  createPayment,
  queryChargePaidList,
  chargePaidSelect,
  queryPaidOrders,
  MaterialPatientCreate,
  MaterialPatientGet,
  OtherCostPatientCreate,
  OtherCostPatientGet,
  PrescriptionWesternPatientCreate,
  PrescriptionWesternPatientGet,
  queryFrequencyList,
  queryRouteAdministrationList,
  queryDoseFormList,
  PrescriptionChinesePatientCreate,
  PrescriptionChinesePatientGet,
  queryCuvetteColorList,
  queryLaboratorySampleList,
  queryLaboratoryItemList,
  laboratoryItemCreate,
  prescriptionWesternPatientModels,
  PrescriptionWesternPatientModelList,
  PrescriptionWesternPatientModelCreate,
  PrescriptionWesternPatientModelUpdate,
  PrescriptionWesternPatientModelDetail,
  PrescriptionWesternPatientModelDelete,
  PrescriptionChinesePatientModelCreate,
  PrescriptionChinesePatientModelUpdate,
  PrescriptionChinesePatientModelDetail,
  PrescriptionChinesePatientModelDelete,
  PrescriptionChinesePatientModelList,
  queryReceiveRecords,
  queryDiagnosisTreatmentList,
  queryDictDiagnosisList,
  diagnosisTreatmentCreate,
  DiagnosisTreatmentUpdate,
  DiagnosisTreatmentOnOff,
  DiagnosisTreatmentDetail,
  TreatmentPatientModelList,
  TreatmentPatientModelCreate,
  TreatmentPatientModelUpdate,
  TreatmentPatientModelDetail,
  TreatmentPatientModelDelete,
  examinationModelList,
  examinationModelCreate,
  ExaminationPatientModelUpdate,
  ExaminationPatientModelDetail,
  ExaminationPatientModelDelete,
  examinationReportList,
  examinationReportCreate,
  ExaminationReportModelUpdate,
  ExaminationReportModelDetail,
  ExaminationReportModelDelete,
  LaboratoryPatientModelCreate,
  LaboratoryPatientModelUpdate,
  LaboratoryPatientModelDetail,
  LaboratoryPatientModelDelete,
  LaboratoryPersonalPatientModelList,
  RemoveScheduleByID,
  ExaminationUpdate,
  ExaminationOnOff,
  ExaminationDetail,
  queryExams,
  queryLaboList,
  queryCreditTriageList,
  creditTriageSelect,
  queryCreditRecordList,
  queryAssociationList,
  LaboratoryAssociationCreate,
  LaboratoryPatientModelList,
  queryLaboItemsList,
  queryDicDrugsList,
  ClinicDrugBatchSetting,
  clinicCreate,
  queryClinicList,
  queryClinicCode,
  clinicUpdateStatus,
  clinicUpdate,
  clinicSelect,
  queryRoleList,
  roleCreate,
  RoleUpdate,
  RoleDetail,
  RoleFunctionUnset,
  PersonnelsByRole,
  RoleAllocation,
  roleSelect,
  queryMenuGetByClinicID,
  menuSelect,
  queryDrugInstockRecord,
  createDrugInstock,
  drugStockSelect,
  queryDrugClassList,
  queryInstockWayList,
  querySupplierList,
  queryDrugInstockRecordDetail,
  DrugInstockCheck,
  DrugInstockUpdate,
  DrugInstockRecordDelete,
  queryDrugOutstockRecord,
  createDrugOutstock,
  DrugOutstockUpdate,
  DrugOutstockRecordDelete,
  drugOutStockSelect,
  queryDrugOutstockRecordDetail,
  DrugOutstockCheck,
  queryOutstockWayList,
  queryDrugStockList,
  queryMaterialInstockRecord,
  createMaterialInstock,
  MaterialInstockUpdate,
  MaterialInstockRecordDelete,
  materialStockSelect,
  queryMaterialInstockRecordDetail,
  MaterialInstockCheck,
  queryMaterialOutstockRecord,
  createMaterialOutstock,
  MaterialOutstockUpdate,
  MaterialOutstockRecordDelete,
  materialOutStockSelect,
  queryMaterialOutstockRecordDetail,
  MaterialOutstockCheck,
  queryMaterialStockList,
  queryClinicHassetPermissions,
  queryClinicUnsetPermissions,
  createClinicPermissions,
  GetHealthRecord,
  queryChiefComplaints,
  queryDrugPendingTraigeList,
  drugPendingTraigeSelect,
  queryDrugRefundTraigeList,
  drugRefundTraigeSelect,
  drugIssuedTraigeSelect,
  queryDrugIssuedTraigeList,
  queryDrugDeliveryList,
  queryDrugDeliveryRecordList,
  queryDrugDeliveryRecordDetail,
  drugDeliverySelect,
  drugDeliveryCreate,
  DiagnosisTreatmentPatientCreate,
  drugDeliveryRecover,
  queryDrugDeliveryRefundRecordList,
  queryDrugDeliveryRefundRecordDetail,
  FileUpload,
  queryFinanceList,
  queryFinanceListAnalysis,
  queryFinanceMonthList,
  queryFinanceItemList,
  queryFinanceCredit,
  xhrFileUpload,
  ExaminationTriageList,
  ExaminationTriageWaiting,
  ExaminationTriageChecked,
  ExaminationTriageChecking,
  ExaminationTriageRecordCreate,
  ExaminationTriageUpdate,
  ExaminationTriageRecordList,
  LaboratoryTriageList,
  LaboratoryTriageWaiting,
  LaboratoryTriageChecked,
  LaboratoryTriageChecking,
  LaboratoryTriageRecordCreate,
  LaboratoryTriageUpdate,
  LaboratoryTriageRecordList,
  LaboratoryTriageDetail,
  LaboratoryTriageRecordDetail,
  TreatmentTriageList,
  TreatmentTriageWaiting,
  TreatmentTriageChecked,
  TreatmentTriageChecking,
  TreatmentTriageRecordCreate,
  TreatmentTriageRecordList,
  TreatmentTriageUpdate,
  ExaminationTriagePatientRecordList,
  LaboratoryTriagePatientRecordList,
  TreatmentTriagePatientRecordList,
  TriagePatientDetail,
  PatientChargeList,
  queryPaymentStatus,
  refundPaymen,
  GetLastBodySign,
  PatientGetByID,
  PersonalMedicalRecord,
  PatientUpdate,
  PersonalMedicalRecordUpsert,
  createDrugRetailOrder,
  createDrugRetailPaymentOrder,
  SelectDrugRetail,
  DrugRetailList,
  DrugRetailDetail,
  DrugRetailRefund,
  DrugRetailPaymentStatus,
  MenubarList,
  PersonnelWithUsername,
  UpdatePersonnelStatus,
  PersonnelRoles,
  PersonnelAuthorizationAllocation,
  UpdatePersonnelUsername,
  RecptionPatientList,
  clearLocalDrugData,
  UpsertPatientHeight,
  UpsertPatientWeight,
  UpsertPatientBloodPressure,
  UpsertPatientVision,
  UpsertPatientBloodSugar,
  PatientHeightList,
  PatientWeightList,
  PatientBmiList,
  PatientBloodPressureList,
  PatientVisionList,
  PatientBloodSugarList,
  TriagePatientVisitDetail,
  QuickReception,
  MedicalRecordRenew,
  MedicalRecordRenewUpdate,
  MedicalRecordRenewDelete,
  PrescriptionChinesePatientDelete,
  RoleDelete,
  AdminList,
  AdminCreate,
  AdminUpdate,
  AdminOnOff,
  AdminGetByID,
  AdminLogin,
  adminSelect,
  selectHistoryMedicalRecord,
  TriagePatientReport,
  MenubarUnsetByAdminID,
  MenuGetByAdminID
}
