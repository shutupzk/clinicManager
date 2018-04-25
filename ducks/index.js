import { user, signin, signout } from './user'
import { doctors, doctorList, doctorSelect } from './doctors'
import { triagePatients, triagePatientsList, triagePatientsSelect, addTriagePatientsList, triagePatient, addAppointment } from './triage_patients'
import { patients, getPatientByCertNo, patientSelect } from './patients'
import { departments, departmentList, departmentSelect } from './departments'
import { triageDoctors, triageDoctorsList, triageDoctorsSelect } from './triage_doctors'
// keys
export { user, doctors, triagePatients, patients, departments, triageDoctors }

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
  addAppointment
}
