import { user, signin, signout } from './user'
import { doctors, queryDoctorList, doctorSelect, doctorCreate, PersonnelUpdate, PersonnelDelete } from './doctors'
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
  GetHealthRecord
} from './triage_patients'
import { patients, getPatientByCertNo, patientSelect, getPatientByKeyword, MemberPateintList } from './patients'
import { departments, queryDepartmentList, departmentSelect, departmentCreate, DepartmentDelete, DepartmentUpdate } from './departments'
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
import {
  medicalRecords,
  createMedicalRecord,
  createMedicalRecordAsModel,
  queryMedicalRecord,
  queryMedicalModels,
  queryMedicalsByPatient,
  queryMedicalModelsByDoctor,
  queryChiefComplaints
} from './medicRecord'
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
import { diagnosisTreatments, queryDiagnosisTreatmentList, diagnosisTreatmentCreate, queryDictDiagnosisList } from './diagnosisTreatment'
import { treatmentPatientModels, TreatmentPatientModelList, TreatmentPatientModelCreate } from './treatment_models'
import { examinationModels, examinationModelList, examinationModelCreate } from './examination_models'
import { laboratoryPatientModels, LaboratoryPatientModelCreate, LaboratoryPersonalPatientModelList, LaboratoryPatientModelList } from './laboratory_model'
import { onCredit, queryCreditTriageList, creditTriageSelect, queryCreditRecordList } from './on_credit'
import { associations, queryAssociationList, LaboratoryAssociationCreate } from './laboratory_association'
import { clinics, clinicCreate, queryClinicList, clinicUpdateStatus, clinicUpdate, queryClinicCode, clinicSelect } from './clinic'
import { roles, queryRoleList, roleCreate, roleSelect } from './role'
import { menus, queryMenuGetByClinicID, menuSelect } from './business'
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
import {
  materailStocks,
  queryMaterialInstockRecord,
  createMaterialInstock,
  MaterialInstockUpdate,
  MaterialInstockRecordDelete,
  materialStockSelect,
  queryMaterialInstockRecordDetail,
  MaterialInstockCheck
} from './material_stock'
import {
  materialOutStocks,
  queryMaterialOutstockRecord,
  createMaterialOutstock,
  MaterialOutstockUpdate,
  MaterialOutstockRecordDelete,
  materialOutStockSelect,
  queryMaterialOutstockRecordDetail,
  MaterialOutstockCheck,
  queryMaterialStockList
} from './material_outstock'
import { clinicPermissions, queryClinicHassetPermissions, queryClinicUnsetPermissions, createClinicPermissions } from './clinic_permission'
import { drugDeliveryPending, queryDrugPendingTraigeList, drugPendingTraigeSelect, queryDrugDeliveryList } from './drug_delivery_pending'
import { drugDeliveryIssued, queryDrugIssuedTraigeList, drugIssuedTraigeSelect } from './drug_delivery_issued'
import { drugDeliveryRefund, queryDrugRefundTraigeList, drugRefundTraigeSelect } from './drug_delivery_refund'
import {
  drugDelivery,
  queryDrugDeliveryRecordList,
  drugDeliverySelect,
  drugDeliveryCreate,
  queryDrugDeliveryRecordDetail,
  drugDeliveryRecover,
  queryDrugDeliveryRefundRecordList,
  queryDrugDeliveryRefundRecordDetail
} from './drug_delivery'
import { DiagnosisTreatmentPatientCreate } from './diagnosis_treatment_patient'
import {FileUpload} from './files'
import {
  examinationTriages,
  ExaminationTriageList,
  ExaminationTriageWaiting,
  ExaminationTriageChecked,
  ExaminationTriageChecking,
  ExaminationTriageRecordCreate,
  ExaminationTriageUpdate,
  ExaminationTriageRecordList
} from './examination_triage'
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
  LaboratoryTriageRecordDetail
} from './laboratory_triage'
import {
  treatmentTriages,
  TreatmentTriageList,
  TreatmentTriageWaiting,
  TreatmentTriageChecked,
  TreatmentTriageChecking,
  TreatmentTriageRecordCreate,
  TreatmentTriageRecordList,
  TreatmentTriageUpdate
} from './treatment_triage'

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
  drugOutStocks,
  materailStocks,
  materialOutStocks,
  clinicPermissions,
  drugDeliveryPending,
  drugDeliveryIssued,
  drugDeliveryRefund,
  drugDelivery,
  examinationTriages,
  laboratoryTriages,
  treatmentTriages
}

// actions
export {
  signin,
  signout,
  queryDoctorList,
  doctorSelect,
  PersonnelUpdate,
  PersonnelDelete,
  triagePatientsList,
  triagePatientsSelect,
  addTriagePatientsList,
  getPatientByCertNo,
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
  queryDictDiagnosisList,
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
  TreatmentTriageUpdate
}
