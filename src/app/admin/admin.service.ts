import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../shared/service/app.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  //base host in api
  private host = environment.API_END_POINT;

  //url
  private url: string = '';

  constructor(private http: HttpClient, private appService: AppService) { }
  //to get params form appservice
  getParamId() {
    return this.appService.getParam('id');
  }
  //Upload Excel
  uploadCandidates(data){
    this.appService.showLoader(true);
    this.url = this.host+'/Candidate/UploadCandidates';
    return this.http.post(this.url, data);
  }
  
  //View all Status
  viewAllStatus(){
    this.appService.showLoader(true);
    this.url = this.host+'/StatusReasons/ViewMultipleStatusReasons';
    return this.http.get(this.url);
  }

  //to save the Status
  saveStatus(data) {
    this.appService.showLoader(true);
    this.url = this.host + '/StatusReasons/AddanUpdateStatusReasons';
    return this.http.post(this.url, data);
  }

  //to display status
  ViewStatusReason(data: any) {
    this.url = this.host + '/StatusReasons/StatusReasonsById?statusReasonId=';
    return this.http.get(this.url + data);
  }

  //to display status
  deleteStatusReason(data: any) {
    this.url = this.host + '/StatusReasons/DeleteStatusReason?statusReasonId=';
    return this.http.get(this.url + data);
  }
  getCountries() {
    this.appService.showLoader(true);
    this.url = this.host + '/Geography/ViewMultiplecountry';
    return this.http.get(this.url);
  }
  // to get the particular country data from api
  getCountryData(data: any) {
    this.url = this.host + '/Geography/ViewCountryById?countryId=';
    return this.http.get(this.url + data);
  }
  // to save the country 
  saveCountry(data: any) {
    this.appService.showLoader(true);
    this.url = this.host + '/Geography/AddAndEditCountry';
    return this.http.post(this.url, data);
  }
  // to update the country
  // updateCountry(data: any) {
  //   this.appService.showLoader(true);
  //   this.url = this.host + '/Geography/UpdateCountry';
  //   return this.http.post(this.url, data);
  // }
  // to delete country
  deleteCountryData(data: any) {
    this.url = this.host + '/Geography/DeleteCountry?countryId=';
    return this.http.get(this.url + data);
  }
  // to get all states from api 
  getMultipleStates() {
    this.appService.showLoader(true);
    this.url = this.host + '/Geography/ViewMultipleState';
    return this.http.get(this.url);
  }
  // to update the state
  updateState(data: any) {
    this.appService.showLoader(true);
    this.url = this.host + '/Geography/UpdateState';
    return this.http.post(this.url, data);
  }
  //to save the state
  saveState(data: any) {
    this.appService.showLoader(true);
    this.url = this.host + '/Geography/AddAndUpdateState';
    return this.http.post(this.url, data);
  }
  // to get the particular state data
  getStateData(data: any) {
    this.url = this.host + '/Geography/ViewStatesById?stateId=';
    return this.http.get(this.url + data);
  }
  // to delete State
  deleteStateData(data: any) {
    this.url = this.host + '/Geography/DeleteState?stateId=';
    return this.http.get(this.url + data);
  }
  //to get all cities
  getCities() {
    this.appService.showLoader(true);
    this.url = this.host + '/Geography/ViewMultiplecity';
    return this.http.get(this.url);
  }
  //to update the city
  // updateCity(data: any) {
  //   this.appService.showLoader(true);
  //   this.url = this.host + '/Geography/UpdateCity';
  //   return this.http.post(this.url, data);
  // }
  // to save the city
  saveCity(data: any) {
    this.appService.showLoader(true);
    this.url = this.host + '/Geography/AddAndEditCity';
    return this.http.post(this.url, data);
  }
  //to get particular city data by id from api
  getCityData(data: any) {
    this.url = this.host + '/Geography/ViewCityById?cityId=';
    return this.http.get(this.url + data);
  }
  // to delete City
  deleteCityData(data: any) {
    this.url = this.host + '/Geography/DeleteCity?cityId=';
    return this.http.get(this.url + data);
  }
  // to get all pincode from api
  getPincode() {
    this.appService.showLoader(true);
    this.url = this.host + '/Geography/ViewMultiplepincodes';
    return this.http.get(this.url);
  }
  //to update the pincode
  updatePincode(data: any) {
    this.appService.showLoader(true);
    this.url = this.host + '/Geography/UpdatePincode';
    return this.http.post(this.url, data);
  }
  //to save the pincode
  savePincode(data: any) {
    this.appService.showLoader(true);
    this.url = this.host + '/Geography/AddAndEditPinCodes';
    return this.http.post(this.url, data);
  }
  // to get particular pincodedata by id from api
  getPincodeData(data: any) {
    this.url = this.host + '/Geography/ViewPincodesById?pinCodeId=';
    return this.http.get(this.url + data);
  }
  // to delete City
  deletePincodeData(data: any) {
    this.url = this.host + '/Geography/DeletePincode?pinCodeId=';
    return this.http.get(this.url + data);
  }
  getCourses() {
    this.appService.showLoader(true);
    this.url = this.host + '/Education/ViewMultipleCourse';
    return this.http.get(this.url);
  }
  //to get particular course from api
  getCourseData(data: any) {
    this.url = this.host + '/Education/ViewCourseById?courseId=';
    return this.http.get(this.url + data);
  }
  // to save the course
  saveCourse(data: any) {
    // console.log(data)
    this.appService.showLoader(true);
    this.url = this.host + '/Education/AddAndEditCourse';
    return this.http.post(this.url, data);
  }
  // to save update course
  updateCourse(data: any) {
    this.appService.showLoader(true);
    this.url = this.host + '/Education/UpdateCourse';
    return this.http.post(this.url, data);
  }
  //to delete course
  deleteCourseData(data: any) {
    this.url = this.host + '/Education/DeleteCourse?courseId=';
    return this.http.get(this.url + data);
  }
  //to get all instituions from api
  getInstitutions() {
    this.appService.showLoader(true);
    this.url = this.host + '/Education/ViewMultipleInstitution';
    return this.http.get(this.url);
  }
  // to get the institute by id from api
  getInstitutionsData(data: any) {
    this.url = this.host + '/Education/ViewInstitutionById?institutionId=';
    return this.http.get(this.url + data);
  }
  // to save the institution
  saveInstitution(data: any) {
    this.appService.showLoader(true);
    this.url = this.host + '/Education/AddAndEditInstitution';
    return this.http.post(this.url, data);
  }
  //to update the institution
  updateInstitution(data: any) {
    this.appService.showLoader(true);
    this.url = this.host + '/Education/UpdateInstitution';
    return this.http.post(this.url, data);
  }
  //to delete institution
  deleteInstitutionData(data: any) {
    this.url = this.host + '/Education/DeleteInstitution?institutionId=';
    return this.http.get(this.url + data);
  }
  //to get all universties from api
  getUniversities() {
    this.appService.showLoader(true);
    this.url = this.host + '/Education/ViewMultipleUniversities';
    return this.http.get(this.url);
  }
  //to get the particular university data
  getUniversitiesData(data: any) {
    this.url = this.host + '/Education/ViewUniversitiesById?universityId=';
    return this.http.get(this.url + data);
  }
  //to save university data
  saveUniversities(data: any) {
    this.appService.showLoader(true);
    this.url = this.host + '/Education/AddAndEditUniversities';
    return this.http.post(this.url, data);
  }
  //to update the university
  updateUniversities(data: any) {
    this.appService.showLoader(true);
    this.url = this.host + '/Education/UpdateUniversities';
    return this.http.post(this.url, data);
  }
  //to delete University
  deleteUniversityData(data: any) {
    this.url = this.host + '/Education/DeleteUniversities?universityId=';
    return this.http.get(this.url + data);
  }
  getRole() {
    this.appService.showLoader(true);
    this.url = this.host + '/Roles/ViewMultipleRole';
    return this.http.get(this.url);
  }
  //to get particular roledata by id from api  
  getRoleData(data: any) {
    this.url = this.host + '/Roles/ViewSingleRole?roleId=';
    return this.http.get(this.url + data);
  }
  //to save the role
  saveRole(data: any) {
    this.appService.showLoader(true);
    this.url = this.host + '/Roles/AddAndEditRole';
    return this.http.post(this.url, data);
  }
  //to update the role
  updateRole(data: any) {
    this.appService.showLoader(true);
    this.url = this.host + '/Roles/AddAndEditRole';
    return this.http.post(this.url, data);
  }
  deleteRole(data: any) {
    this.appService.showLoader(true);
    this.url = this.host + '/Roles/DeleteRole?roleId=';
    return this.http.get(this.url + data);
  }
  CheckRole(data:any){
    this.appService.showLoader(true);
    this.url = this.host + '/Roles/CheckDataRole?roleId=';
    return this.http.get(this.url + data);
  }
  archiveRole(data:any){
    this.appService.showLoader(true);
    this.url = this.host + '/Roles/ArchiveRole?roleId=';
    return this.http.get(this.url + data);
  }
  getOrganisation() { 
    this.appService.showLoader(true);
    this.url = this.host+'/Organization/ViewMultipleOrganization';
    return this.http.get(this.url);
  }
  //to get the particular organisation by id from api 
  getOrganizationData(data: any) {
    this.url = this.host+'/Organization/ViewOrganizationById?organizationId=';
    return this.http.get(this.url+ data);
  }

  //to delete organisation
  deleteOrganizationData(data: any) {
    this.url = this.host+'/Organization/DeleteOrganization?organizationId=';
    return this.http.get(this.url+ data);
  }
  // to save the organisation
  saveOrganization(data:any){
    this.appService.showLoader(true);
    this.url = this.host+'/Organization/AddAndEditOrganization';
    return this.http.post(this.url, data);
  }
}
