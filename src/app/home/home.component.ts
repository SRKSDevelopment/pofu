import { Component, OnInit, Output, EventEmitter, HostListener,TemplateRef } from '@angular/core';
import { Storage } from '../shared/utils/storage';
import { AppService } from '../shared/service/app.service';
import { HomeService } from './home.service';
import { AdminService } from './../admin/admin.service';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { AddStatus } from './../shared/entities/addStatus';
import { Item } from '../../../node_modules/angular2-multiselect-dropdown/menu-item';
import { AlertService } from '../shared/alerts/_services/alert.service';
import { AlertType } from '../shared/alerts/_models/alert';
import { Note } from './../shared/entities/note';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'

})
export class HomeComponent implements OnInit {
  modalRef: BsModalRef;
  fromDate: any = new Date();
  followUpDate1: any = new Date();
  addStatus : AddStatus = new AddStatus();
  note : Note = new Note();
  data: any = [];
  key: string = 'slNo'; //set default
  reverse: boolean = false;
  iFilter: any = "";
  len: any = [];
  notes: any = [];
  stageNotes: any = [];
  number: any;
  pofuStatusDetailsID: any;
  p: number = 1;
  candidatesID:any;
  candidateDetail: any;
  status:any;
  statusName:any;
  candidate:any;
  followUpDate:Date;
  stage:string;
  updatedBy:string;
  pofuStatus:string;
  statusID:any;
  stageName: any;
  obj: any;
  pofuStatusID:any;
  nameStatus:string;
  candidateBasicDetail:any;
  selected:any;
  isCandiateOfferDetails:boolean = false;
  noteDetails: string;
  stageNextTo:any;
  config = {
    backdrop: true,
    ignoreBackdropClick: true
  };
  constructor(private alertService: AlertService, private appService: AppService, private homeService: HomeService, private adminService: AdminService, private modalService: BsModalService) {
    // Storage.clearSession();
    // history.pushState(null, null, location.href);
    // window.onpopstate = function(event) {
    //  history.go(1);
    this.getAllCandidates();
    this.getStatusDetails();
    this.number = 10;
  }

  ngOnInit() { }
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  pre(){
    this.p = this.p - 1 ;
  }
  next(){
    this.p = this.p + 1 ;
  }
  pageChanged(event) {
    // console.log(event)
    this.p = event;
  }

  getAllCandidates(){
    this.homeService.viewAllCandidates().subscribe((data:any)=>{
      this.data = data.response;
      this.candidatesID = data.response.candidatesID;
      //console.log(this.data);
    })
  }

  getStatusDetails(){
    this.adminService.viewAllStatus().subscribe((data:any)=>{
      this.data = data.response;
      this.statusName = data.response;
      this.statusID = data.response;
      console.log(this.data);
    })
  }

  empDetails(item){
    this.candidatesID = item.candidatesID;
    console.log(item.candidatesID);
    this.selected = item; 
    this.getCandidateDetails(this.candidatesID);
    this.getCandidateBasicDetails(this.candidatesID);
    this.getStageName(this.candidatesID);
    this.isCandiateOfferDetails = true;
 
  }
  getCandidateBasicDetails(data){
    console.log(this.candidatesID);
    this.homeService.ViewCandidateDetail(data).subscribe((data:any)=>{
      console.log(data.response);
      this.candidateBasicDetail = data.response;
      
    })
  }
  
  getCandidateDetails(data){
    this.homeService.ViewAllStatusReason(data).subscribe((data: any) => {    
      console.log(data.response);
      this.candidateDetail = data.isStatus;
      this.status = data.response;
      this.pofuStatusID = data.response.pofuStatusID;
      this.pofuStatus = data.response.pofuStatus;
      
    });
  }


  isActive(item) {
    return this.selected === item;
};
  //modal for feedback
  openModal(template: TemplateRef<any>, item) {
    this.modalRef = this.modalService.show(template, this.config);
    this.candidate = item;
    this.candidatesID = item.candidatesID
    this.stage = item.stage;
    this.followUpDate = item.followUpDate;
    this.updatedBy = item.updatedBy;
    this.pofuStatus = item.pofuStatus;
    this.pofuStatusDetailsID = item.pofuStatusDetailsID;
    console.log(this.candidate);
  }

  openModal1(template1: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template1, Object.assign({}, { class: 'modal-detail' }));
  }

  // Modal for Change Stage
  openModal2(template2: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template2, this.config);
  }

  //View Stage Name
  getStageName(data){
    this.homeService.ViewAllStages(data).subscribe((data:any)=>{
      console.log(data);
      this.stageName = data.response;
      console.log(this.stageName);
    })
  }

  //Save Stage
  saveStageBetween(){
    let obj = {
      candidatesID: this.candidatesID,
      stageNextTo: this.stageNextTo,
      followUpDate: this.followUpDate1,
      pofuStatusID: this.pofuStatusID,
      pofuStatus: this.nameStatus,
      updatedBy: this.updatedBy
    }
    console.log(obj);
    this.homeService.addStage(obj).subscribe((data:any)=>{
      if(data.isStatus === false){
        this.alertService.alert(AlertType.Error,data.response)
        }else{
          this.alertService.alert(AlertType.Success,data.response)
        }
        this.onClose();
    })
  }

  getStatus($event){
    console.log($event.statusName);
    this.nameStatus = $event.statusName
  }

  save(){
    let obj = {
    candidatesID: this.candidatesID,
    stage: this.stage,
    followUpDate: this.followUpDate,
    pofuStatusID: this.pofuStatusID,
    pofuStatus: this.nameStatus,
    pofuStatusDetailsID: this.pofuStatusDetailsID
    }
    console.log(obj);
    this.homeService.addStatusModal(obj).subscribe((data:any)=>{
      console.log(data);
      if(data.isStatus === false){
        this.alertService.alert(AlertType.Error,data.response)
        }else{
          this.alertService.alert(AlertType.Success,data.response)
        }
      this.getCandidateDetails(this.candidatesID);
    });
  }


  onClose(){
    this.modalRef.hide();
    this.getStatusDetails();
    this.getAllCandidates();
    //this.getCandidateDetails(this.candidatesID)
  }

  //Save Candidate Overall Note
  saveNote(data){
    let obj = {
      candidateId: this.candidatesID,
      noteDetails: this.noteDetails,
      noteType: 1,
      pofuStatusDetailsID: 0
      }
      console.log(obj);
    this.homeService.addNote(obj).subscribe((data: any) => {
    console.log(obj)
      if(data.isStatus === false){
          this.alertService.alert(AlertType.Error,data.response)
          }else{
            this.alertService.alert(AlertType.Success,data.response)
          }
          this.viewNote();
    });
  }

  //view Candidate Overall Note
  viewNote(){
    let obj = {
      candidateId: this.candidatesID,
      pofuStatusDetailsID: 0
    }
    this.homeService.ViewAllNoteDetails(obj).subscribe((data:any)=>{
      console.log(data);
      this.notes = data.response;
    })
  }

  //view Candidate Stagewise Note
  viewStageNote(item){
    console.log(item);
    let obj = {
      candidateId: item.candidatesID,
      pofuStatusDetailsID: item.pofuStatusDetailsID
    }
    
    this.homeService.ViewAllNoteDetails(obj).subscribe((data:any)=>{
      this.stageNotes = data.response;
      console.log(this.stageNotes);
      this.pofuStatusDetailsID = data.response[0].pofuStatusDetailsID;
      console.log(this.pofuStatusDetailsID);
    })
  }

  //save Stage Wise Note
  saveStageNote(){
    let obj = {
      candidateId: this.candidatesID,
      pofuStatusDetailsID: this.pofuStatusDetailsID,
      noteDetails: this.noteDetails,
      noteType: 2,
      
      }
      console.log(obj);
    this.homeService.addNote(obj).subscribe((data: any) => {
    console.log(data)
      if(data.isStatus === false){
          this.alertService.alert(AlertType.Error,data.response)
          }else{
            this.alertService.alert(AlertType.Success,data.response)
          }
    });
  }

  //Add New Stage in Table 2
  // addNewStage(){
  //   let obj = {
  //     candidatesID: this.candidatesID,
  //     followUpDate: 
  //   }
  // }


  //to send candidate ID
  // getCandidateDetails(){
  //   this.homeService.ViewAllStatusReason(this.candidatesID).subscribe((data: any) => {    
  //     console.log(data.response);
  //       // if(data.isStatus === false){
  //       //   this.alertService.alert(AlertType.Error,data.message)
  //       //   }else{
  //       //     this.alertService.alert(AlertType.Success,data.message)
  //       //   }      
  //   });
  // }
}