import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../shared/service/app.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
   //base host in api
   private host = environment.API_END_POINT;

   //url
   private url: string = '';

  constructor(private http: HttpClient, private appService: AppService) { }
  //to get params form appservice
  getParamId() {
    return this.appService.getParam('id');
  }
  
  //View all Candidates
  viewAllCandidates(){
    this.appService.showLoader(true);
    this.url = this.host+'/Candidate/ViewAllCandidateDetails';
    return this.http.get(this.url);
  }

  //ViewAllStatusReason
  ViewAllStatusReason(data: any) {
    this.url = this.host + '/POFUStatusReasonDetailsController/ViewAllStatusReasonWithStageOnCandatidateId?candidateId=';
    return this.http.get(this.url + data);
  }

  //View all Candidates
  addStatusModal(data){
    this.appService.showLoader(true);
    this.url = this.host+'/POFUStatusReasonDetailsController/AddPOFUStatusReasonDetails';
    return this.http.post(this.url, data);
  }
}
