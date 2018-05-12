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
import { medicalRecords, createMedicalRecord, createMedicalRecordAsModel, queryMedicalRecord, queryMedicalModels } from './medicRecord'
import { drugs, queryDrugList, drugCreate } from './drug'
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
  examinationPatients
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
  ExaminationPatientGet
}
