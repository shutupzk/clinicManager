import { user, signin, signout } from './user'
import { doctors, queryDoctorList, doctorSelect, doctorCreate } from './doctors'
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
  completePreDiagnosis
} from './triage_patients'
import { patients, getPatientByCertNo, patientSelect, getPatientByKeyword } from './patients'
import { departments, queryDepartmentList, departmentSelect, departmentCreate } from './departments'
import { triageDoctors, triageDoctorsList, triageDoctorsSelect } from './triage_doctors'
import {
  schedules,
  queryScheduleDepartments,
  queryScheduleDoctors,
  queryDoctorsWithSchedule,
  copyScheduleByDate,
  openScheduleByDate,
  createOneSchedule,
  deleteOneUnOpenScheduleByID,
  stopScheduleByID,
  querySchedules,
  RemoveScheduleByID
} from './schedules'
import { medicalRecords, createMedicalRecord, createMedicalRecordAsModel, queryMedicalRecord, queryMedicalModels, queryMedicalsByPatient, queryMedicalModelsByDoctor } from './medicRecord'
import { drugs, ClinicDrugCreate, ClinicDrugList, queryDicDrugsList } from './drug'
import { laboratories, laboratoryCreate, queryLaboratoryList, queryLaboList } from './laboratory'
import { examinations, examinationCreate, queryExaminationList, queryExams } from './examination'
import { materials, materialCreate, queryMaterialList } from './material'
import { otherCostS, otherCostsCreate, queryOtherCostList } from './other_cost'
import { treatments, treatmentCreate, queryTreatmentList } from './treatment'
import { doseUnits, queryDoseUnitList } from './dose_unit'
import { examinationOrgans, queryExaminationOrganList } from './examination_organs'
import { treatmentPatients, TreatmentPatientCreate, TreatmentPatientGet } from './treatment_patient'
import { laboratoryPatients, LaboratoryPatientCreate, LaboratoryPatientGet } from './laboratory_patient'
import { examinationPatients, ExaminationPatientCreate, ExaminationPatientGet } from './examination_patient'
import { charge, queryChargeUnpayList, chargeUnpaySelect, queryUnPaidOrders, createPayment, queryChargePaidList, chargePaidSelect, queryPaidOrders } from './charge'
import { materialPatients, MaterialPatientCreate, MaterialPatientGet } from './material_patient'
import { otherPatients, OtherCostPatientCreate, OtherCostPatientGet } from './other_patient'
import { prescriptionWesternPatients, PrescriptionWesternPatientCreate, PrescriptionWesternPatientGet } from './prescription_western_patient'
import { frequencies, queryFrequencyList } from './frequencys'
import { routeAdministrationss, queryRouteAdministrationList } from './route_administrations'
import { doseForms, queryDoseFormList } from './dose_form'
import { prescriptionChinesePatients, PrescriptionChinesePatientCreate, PrescriptionChinesePatientGet } from './prescription_chinese_patient'
import { cuvetteColors, queryCuvetteColorList } from './cuvette_color'
import { laboratorySamples, queryLaboratorySampleList } from './laboratory_sample'
import { laboratoryItems, queryLaboratoryItemList, laboratoryItemCreate, queryLaboItemsList } from './laboratory_item'
import { prescriptionWesternPatientModels, PrescriptionWesternPatientModelList, PrescriptionWesternPatientModelCreate } from './prescription_western_patient_model'
import { prescriptionChinesePatientModels, PrescriptionChinesePatientModelList, PrescriptionChinesePatientModelCreate } from './prescription_chinese_patient_model'
import { receiveRecords, queryReceiveRecords } from './receive_records'
import { diagnosisTreatments, queryDiagnosisTreatmentList, diagnosisTreatmentCreate } from './diagnosisTreatment'
import { treatmentPatientModels, TreatmentPatientModelList, TreatmentPatientModelCreate } from './treatment_models'
import { examinationModels, examinationModelList, examinationModelCreate } from './examination_models'
import { laboratoryPatientModels, LaboratoryPatientModelCreate, LaboratoryPersonalPatientModelList, LaboratoryPatientModelList } from './laboratory_model'
import { onCredit, queryCreditTriageList, creditTriageSelect, queryCreditRecordList } from './on_credit'
import { associations, queryAssociationList, LaboratoryAssociationCreate } from './laboratory_association'
import { clinics, clinicCreate, queryClinicList, clinicUpdateStatus, clinicUpdate, queryClinicCode, clinicSelect } from './clinic'
import {roles, queryRoleList, roleCreate, roleSelect} from './role'
import {menus, queryMenuGetByClinicID, menuSelect} from './business'
import {
  drugStocks,
  queryDrugInstockRecord,
  createDrugInstock,
  drugStockSelect,
  queryInstockWayList,
  querySupplierList,
  queryDrugInstockRecordDetail,
  DrugInstockCheck,
  DrugInstockUpdate,
  DrugInstockRecordDelete
} from './drug_stock'
import { drugClasses, queryDrugClassList } from './drug_class'
import {
  drugOutStocks,
  queryDrugOutstockRecord,
  createDrugOutstock,
  DrugOutstockUpdate,
  DrugOutstockRecordDelete,
  drugOutStockSelect,
  queryDrugOutstockRecordDetail,
  DrugOutstockCheck,
  queryOutstockWayList,
  queryDrugStockList
} from './drug_outstock'

// keys
export {
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
  cuvetteColors,
  laboratorySamples,
  laboratoryItems,
  prescriptionChinesePatientModels,
  receiveRecords,
  diagnosisTreatments,
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
  drugOutStocks
}

// actions
export {
  signin,
  signout,
  queryDoctorList,
  doctorSelect,
  triagePatientsList,
  triagePatientsSelect,
  addTriagePatientsList,
  getPatientByCertNo,
  patientSelect,
  queryDepartmentList,
  departmentSelect,
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
  queryMedicalRecord,
  queryMedicalModels,
  queryMedicalModelsByDoctor,
  queryMedicalsByPatient,
  ClinicDrugCreate,
  ClinicDrugList,
  examinationCreate,
  laboratoryCreate,
  materialCreate,
  otherCostsCreate,
  treatmentCreate,
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
  PrescriptionChinesePatientModelCreate,
  PrescriptionChinesePatientModelList,
  queryReceiveRecords,
  queryDiagnosisTreatmentList,
  diagnosisTreatmentCreate,
  TreatmentPatientModelList,
  TreatmentPatientModelCreate,
  examinationModelList,
  examinationModelCreate,
  LaboratoryPatientModelCreate,
  LaboratoryPersonalPatientModelList,
  RemoveScheduleByID,
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
  clinicCreate,
  queryClinicList,
  queryClinicCode,
  clinicUpdateStatus,
  clinicUpdate,
  clinicSelect,
  queryRoleList,
  roleCreate,
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
  queryDrugStockList
}
