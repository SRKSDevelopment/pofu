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

  //View All Stages
  ViewAllStages(data: any) {
    this.url = this.host + '/POFUStatusReasonDetailsController/ViewAllStageForCandidateForAddingStageBetween?candidateId=';
    return this.http.get(this.url + data);
  }

   //ViewCandidateDetail
   ViewCandidateDetail(data: any) {
    this.url = this.host + '/Candidate/ViewCandidateDetailsById?candidateId=';
    return this.http.get(this.url + data);
  }

  //View all Candidates
  addStatusModal(data){
    this.appService.showLoader(true);
    this.url = this.host+'/POFUStatusReasonDetailsController/AddPOFUStatusReasonDetails';
    return this.http.post(this.url, data);
  }

   //Add Stage
   addStage(data){
    this.appService.showLoader(true);
    this.url = this.host+'/POFUStatusReasonDetailsController/AddPOFUStatusReasonDetailsInMiddle';
    return this.http.post(this.url, data);
  }

  //Add and Edit Note
  addNote(data){
    this.appService.showLoader(true);
    this.url = this.host+'/Note/AddAndEdiNote';
    return this.http.post(this.url, data);
  }

  //ViewAllNoteDetails
  ViewAllNoteDetails(data: any) {
    this.url = this.host + '/Note/ViewMultipleNote';
    return this.http.post(this.url, data);
  }
}
