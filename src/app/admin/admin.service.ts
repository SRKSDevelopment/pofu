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
}
