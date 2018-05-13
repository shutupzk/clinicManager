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
  querySchedules
} from './schedules'
import { medicalRecords, createMedicalRecord, createMedicalRecordAsModel, queryMedicalRecord, queryMedicalModels, queryMedicalsByPatient } from './medicRecord'
import { drugs, drugCreate, queryDrugList } from './drug'
import { examinations, examinationCreate, queryExaminationList } from './examination'
import { laboratories, laboratoryCreate, queryLaboratoryList } from './laboratory'
import { materials, materialCreate, queryMaterialList } from './material'
import { otherCostS, otherCostsCreate, queryOtherCostList } from './other_cost'
import { treatments, treatmentCreate, queryTreatmentList } from './treatment'
import { doseUnits, queryDoseUnitList } from './dose_unit'
import { examinationOrgans, queryExaminationOrganList } from './examination_organs'
import { treatmentPatients, TreatmentPatientCreate, TreatmentPatientGet } from './treatment_patient'
import { laboratoryPatients, LaboratoryPatientCreate, LaboratoryPatientGet } from './laboratory_patient'
import { examinationPatients, ExaminationPatientCreate, ExaminationPatientGet } from './examination_patient'
import { charge, queryChargeUnpayList, chargeUnpaySelect } from './charge'
import { materialPatients, MaterialPatientCreate, MaterialPatientGet } from './material_patient'
import { otherPatients, OtherCostPatientCreate, OtherCostPatientGet } from './other_patient'
import { prescriptionWesternPatients, PrescriptionWesternPatientCreate, PrescriptionWesternPatientGet } from './prescription_western_patient'
import { frequencies, queryFrequencyList } from './frequencys'
import { routeAdministrationss, queryRouteAdministrationList } from './route_administrations'
import { doseForms, queryDoseFormList } from './dose_form'
import { prescriptionChinesePatients, PrescriptionChinesePatientCreate, PrescriptionChinesePatientGet } from './prescription_chinese_patient'
import { cuvetteColors, queryCuvetteColorList } from './cuvette_color'
import { laboratorySamples, queryLaboratorySampleList } from './laboratory_sample'

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
  laboratorySamples
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
  queryMedicalsByPatient,
  queryDrugList,
  drugCreate,
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
  queryLaboratorySampleList
}
