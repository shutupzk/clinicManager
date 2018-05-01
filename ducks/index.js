import { user, signin, signout } from './user'
import { doctors, queryDoctorList, doctorSelect, doctorCreate } from './doctors'
import { triagePatients, triagePatientsList, triagePatientsSelect, addTriagePatientsList, triagePatient, addAppointment } from './triage_patients'
import { patients, getPatientByCertNo, patientSelect, getPatientByKeyword } from './patients'
import { departments, queryDepartmentList, departmentSelect, departmentCreate } from './departments'
import { triageDoctors, triageDoctorsList, triageDoctorsSelect } from './triage_doctors'
import { schedules, queryScheduleDepartments, queryScheduleDoctors, queryDoctorsWithSchedule } from './schedules'

// keys
export { user, doctors, triagePatients, patients, departments, triageDoctors, schedules }

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
  queryDoctorsWithSchedule
}
