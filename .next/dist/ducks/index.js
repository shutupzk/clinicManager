'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queryLaboratorySampleList = exports.queryCuvetteColorList = exports.PrescriptionChinesePatientGet = undefined;
exports.PrescriptionChinesePatientCreate = exports.queryDoseFormList = exports.queryRouteAdministrationList = exports.queryFrequencyList = exports.PrescriptionWesternPatientGet = exports.PrescriptionWesternPatientCreate = exports.OtherCostPatientGet = exports.OtherCostPatientCreate = exports.MaterialPatientGet = exports.MaterialPatientCreate = exports.queryUnPaidOrders = exports.chargeUnpaySelect = exports.queryChargeUnpayList = exports.ExaminationPatientGet = exports.ExaminationPatientCreate = exports.LaboratoryPatientGet = exports.LaboratoryPatientCreate = exports.TreatmentPatientGet = exports.TreatmentPatientCreate = exports.queryExaminationOrganList = exports.queryDoseUnitList = exports.queryTreatmentList = exports.queryOtherCostList = exports.queryMaterialList = exports.queryLaboratoryList = exports.queryExaminationList = exports.treatmentCreate = exports.otherCostsCreate = exports.materialCreate = exports.laboratoryCreate = exports.examinationCreate = exports.drugCreate = exports.queryDrugList = exports.queryMedicalsByPatient = exports.queryMedicalModels = exports.queryMedicalRecord = exports.createMedicalRecordAsModel = exports.createMedicalRecord = exports.completePreDiagnosis = exports.completePreMedicalRecord = exports.completeBodySign = exports.queryAppointmentsByDate = exports.querySchedules = exports.stopScheduleByID = exports.deleteOneUnOpenScheduleByID = exports.createOneSchedule = exports.openScheduleByDate = exports.copyScheduleByDate = exports.queryDoctorsWithSchedule = exports.getPatientByKeyword = exports.doctorCreate = exports.departmentCreate = exports.queryScheduleDoctors = exports.queryScheduleDepartments = exports.triageFinish = exports.triageReception = exports.addAppointment = exports.triagePatient = exports.triageDoctorsSelect = exports.triageDoctorsList = exports.departmentSelect = exports.queryDepartmentList = exports.patientSelect = exports.getPatientByCertNo = exports.addTriagePatientsList = exports.triagePatientsSelect = exports.triagePatientsList = exports.doctorSelect = exports.queryDoctorList = exports.signout = exports.signin = exports.laboratorySamples = exports.cuvetteColors = exports.prescriptionChinesePatients = exports.doseForms = exports.routeAdministrationss = exports.frequencies = exports.prescriptionWesternPatients = exports.otherPatients = exports.materialPatients = exports.charge = exports.examinationPatients = exports.laboratoryPatients = exports.treatmentPatients = exports.examinationOrgans = exports.doseUnits = exports.treatments = exports.otherCostS = exports.materials = exports.laboratories = exports.examinations = exports.drugs = exports.medicalRecords = exports.schedules = exports.triageDoctors = exports.departments = exports.patients = exports.triagePatients = exports.doctors = exports.user = undefined;

var _user = require('./user');

var _doctors = require('./doctors');

var _triage_patients = require('./triage_patients');

var _patients = require('./patients');

var _departments = require('./departments');

var _triage_doctors = require('./triage_doctors');

var _schedules = require('./schedules');

var _medicRecord = require('./medicRecord');

var _drug = require('./drug');

var _examination = require('./examination');

var _laboratory = require('./laboratory');

var _material = require('./material');

var _other_cost = require('./other_cost');

var _treatment = require('./treatment');

var _dose_unit = require('./dose_unit');

var _examination_organs = require('./examination_organs');

var _treatment_patient = require('./treatment_patient');

var _laboratory_patient = require('./laboratory_patient');

var _examination_patient = require('./examination_patient');

var _charge = require('./charge');

var _material_patient = require('./material_patient');

var _other_patient = require('./other_patient');

var _prescription_western_patient = require('./prescription_western_patient');

var _frequencys = require('./frequencys');

var _route_administrations = require('./route_administrations');

var _dose_form = require('./dose_form');

var _prescription_chinese_patient = require('./prescription_chinese_patient');

var _cuvette_color = require('./cuvette_color');

var _laboratory_sample = require('./laboratory_sample');

// keys
exports.user = _user.user;
exports.doctors = _doctors.doctors;
exports.triagePatients = _triage_patients.triagePatients;
exports.patients = _patients.patients;
exports.departments = _departments.departments;
exports.triageDoctors = _triage_doctors.triageDoctors;
exports.schedules = _schedules.schedules;
exports.medicalRecords = _medicRecord.medicalRecords;
exports.drugs = _drug.drugs;
exports.examinations = _examination.examinations;
exports.laboratories = _laboratory.laboratories;
exports.materials = _material.materials;
exports.otherCostS = _other_cost.otherCostS;
exports.treatments = _treatment.treatments;
exports.doseUnits = _dose_unit.doseUnits;
exports.examinationOrgans = _examination_organs.examinationOrgans;
exports.treatmentPatients = _treatment_patient.treatmentPatients;
exports.laboratoryPatients = _laboratory_patient.laboratoryPatients;
exports.examinationPatients = _examination_patient.examinationPatients;
exports.charge = _charge.charge;
exports.materialPatients = _material_patient.materialPatients;
exports.otherPatients = _other_patient.otherPatients;
exports.prescriptionWesternPatients = _prescription_western_patient.prescriptionWesternPatients;
exports.frequencies = _frequencys.frequencies;
exports.routeAdministrationss = _route_administrations.routeAdministrationss;
exports.doseForms = _dose_form.doseForms;
exports.prescriptionChinesePatients = _prescription_chinese_patient.prescriptionChinesePatients;
exports.cuvetteColors = _cuvette_color.cuvetteColors;
exports.laboratorySamples = _laboratory_sample.laboratorySamples;

// actions

exports.signin = _user.signin;
exports.signout = _user.signout;
exports.queryDoctorList = _doctors.queryDoctorList;
exports.doctorSelect = _doctors.doctorSelect;
exports.triagePatientsList = _triage_patients.triagePatientsList;
exports.triagePatientsSelect = _triage_patients.triagePatientsSelect;
exports.addTriagePatientsList = _triage_patients.addTriagePatientsList;
exports.getPatientByCertNo = _patients.getPatientByCertNo;
exports.patientSelect = _patients.patientSelect;
exports.queryDepartmentList = _departments.queryDepartmentList;
exports.departmentSelect = _departments.departmentSelect;
exports.triageDoctorsList = _triage_doctors.triageDoctorsList;
exports.triageDoctorsSelect = _triage_doctors.triageDoctorsSelect;
exports.triagePatient = _triage_patients.triagePatient;
exports.addAppointment = _triage_patients.addAppointment;
exports.triageReception = _triage_patients.triageReception;
exports.triageFinish = _triage_patients.triageFinish;
exports.queryScheduleDepartments = _schedules.queryScheduleDepartments;
exports.queryScheduleDoctors = _schedules.queryScheduleDoctors;
exports.departmentCreate = _departments.departmentCreate;
exports.doctorCreate = _doctors.doctorCreate;
exports.getPatientByKeyword = _patients.getPatientByKeyword;
exports.queryDoctorsWithSchedule = _schedules.queryDoctorsWithSchedule;
exports.copyScheduleByDate = _schedules.copyScheduleByDate;
exports.openScheduleByDate = _schedules.openScheduleByDate;
exports.createOneSchedule = _schedules.createOneSchedule;
exports.deleteOneUnOpenScheduleByID = _schedules.deleteOneUnOpenScheduleByID;
exports.stopScheduleByID = _schedules.stopScheduleByID;
exports.querySchedules = _schedules.querySchedules;
exports.queryAppointmentsByDate = _triage_patients.queryAppointmentsByDate;
exports.completeBodySign = _triage_patients.completeBodySign;
exports.completePreMedicalRecord = _triage_patients.completePreMedicalRecord;
exports.completePreDiagnosis = _triage_patients.completePreDiagnosis;
exports.createMedicalRecord = _medicRecord.createMedicalRecord;
exports.createMedicalRecordAsModel = _medicRecord.createMedicalRecordAsModel;
exports.queryMedicalRecord = _medicRecord.queryMedicalRecord;
exports.queryMedicalModels = _medicRecord.queryMedicalModels;
exports.queryMedicalsByPatient = _medicRecord.queryMedicalsByPatient;
exports.queryDrugList = _drug.queryDrugList;
exports.drugCreate = _drug.drugCreate;
exports.examinationCreate = _examination.examinationCreate;
exports.laboratoryCreate = _laboratory.laboratoryCreate;
exports.materialCreate = _material.materialCreate;
exports.otherCostsCreate = _other_cost.otherCostsCreate;
exports.treatmentCreate = _treatment.treatmentCreate;
exports.queryExaminationList = _examination.queryExaminationList;
exports.queryLaboratoryList = _laboratory.queryLaboratoryList;
exports.queryMaterialList = _material.queryMaterialList;
exports.queryOtherCostList = _other_cost.queryOtherCostList;
exports.queryTreatmentList = _treatment.queryTreatmentList;
exports.queryDoseUnitList = _dose_unit.queryDoseUnitList;
exports.queryExaminationOrganList = _examination_organs.queryExaminationOrganList;
exports.TreatmentPatientCreate = _treatment_patient.TreatmentPatientCreate;
exports.TreatmentPatientGet = _treatment_patient.TreatmentPatientGet;
exports.LaboratoryPatientCreate = _laboratory_patient.LaboratoryPatientCreate;
exports.LaboratoryPatientGet = _laboratory_patient.LaboratoryPatientGet;
exports.ExaminationPatientCreate = _examination_patient.ExaminationPatientCreate;
exports.ExaminationPatientGet = _examination_patient.ExaminationPatientGet;
exports.queryChargeUnpayList = _charge.queryChargeUnpayList;
exports.chargeUnpaySelect = _charge.chargeUnpaySelect;
exports.queryUnPaidOrders = _charge.queryUnPaidOrders;
exports.MaterialPatientCreate = _material_patient.MaterialPatientCreate;
exports.MaterialPatientGet = _material_patient.MaterialPatientGet;
exports.OtherCostPatientCreate = _other_patient.OtherCostPatientCreate;
exports.OtherCostPatientGet = _other_patient.OtherCostPatientGet;
exports.PrescriptionWesternPatientCreate = _prescription_western_patient.PrescriptionWesternPatientCreate;
exports.PrescriptionWesternPatientGet = _prescription_western_patient.PrescriptionWesternPatientGet;
exports.queryFrequencyList = _frequencys.queryFrequencyList;
exports.queryRouteAdministrationList = _route_administrations.queryRouteAdministrationList;
exports.queryDoseFormList = _dose_form.queryDoseFormList;
exports.PrescriptionChinesePatientCreate = _prescription_chinese_patient.PrescriptionChinesePatientCreate;
exports.PrescriptionChinesePatientGet = _prescription_chinese_patient.PrescriptionChinesePatientGet;
exports.queryCuvetteColorList = _cuvette_color.queryCuvetteColorList;
exports.queryLaboratorySampleList = _laboratory_sample.queryLaboratorySampleList;