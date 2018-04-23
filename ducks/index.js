import { user, signin, signout } from './user'
import { doctors, doctorList, doctorSelect } from './doctors'
import { triagePatients, triagePatientsList, triagePatientsSelect, addTriagePatientsList } from './triage_patients'
import { patients, getPatientByCertNo, patientSelect } from './patients'
import { departments, departmentList, departmentSelect } from './departments'
// keys
export { user, doctors, triagePatients, patients, departments }

// actions
export { signin, signout, doctorList, doctorSelect, triagePatientsList, triagePatientsSelect, addTriagePatientsList, getPatientByCertNo, patientSelect, departmentList, departmentSelect }
