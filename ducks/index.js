import { user, signin, signout } from './user'
import { doctors, doctorList, doctorSelect, doctorCreate } from './doctors'
import { triagePatients, triagePatientsList, triagePatientsSelect, addTriagePatientsList, triagePatient, addAppointment } from './triage_patients'
import { patients, getPatientByCertNo, patientSelect } from './patients'
import { departments, departmentList, departmentSelect, departmentCreate } from './departments'
import { triageDoctors, triageDoctorsList, triageDoctorsSelect } from './triage_doctors'
import { schedules, queryScheduleDepartments, queryScheduleDoctors } from './schedules'

// keys
export { user, doctors, triagePatients, patients, departments, triageDoctors, schedules }

// actions
export {
  signin,
  signout,
  doctorList,
  doctorSelect,
  triagePatientsList,
  triagePatientsSelect,
  addTriagePatientsList,
  getPatientByCertNo,
  patientSelect,
  departmentList,
  departmentSelect,
  triageDoctorsList,
  triageDoctorsSelect,
  triagePatient,
  addAppointment,
  queryScheduleDepartments,
  queryScheduleDoctors,
  departmentCreate,
  doctorCreate
}
