import { user, signin, signout } from './user'
import { doctors, queryDoctorList, doctorSelect, doctorCreate } from './doctors'
import { triagePatients, triagePatientsList, triagePatientsSelect, addTriagePatientsList, triagePatient, addAppointment, queryAppointmentsByDate } from './triage_patients'
import { patients, getPatientByCertNo, patientSelect, getPatientByKeyword } from './patients'
import { departments, queryDepartmentList, departmentSelect, departmentCreate } from './departments'
import { triageDoctors, triageDoctorsList, triageDoctorsSelect } from './triage_doctors'
import { saveTriagePatientId, clinic_triage_patient_id } from './regitration_list_detail_patient'
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

// keys
export { user, doctors, triagePatients, patients, departments, triageDoctors, schedules, clinic_triage_patient_id }

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
  saveTriagePatientId
}
