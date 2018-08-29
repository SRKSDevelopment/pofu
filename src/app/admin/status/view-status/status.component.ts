import { Component, OnInit, TemplateRef, Input , Output ,EventEmitter } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { AdminService } from './../../admin.service';
import { AppService } from './../../../shared/service/app.service';
import { status } from './../../../shared/entities/status';
import { AlertService } from '../../../shared/alerts/_services/alert.service';
import { AlertType } from '../../../shared/alerts/_models/alert';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html'
})
export class StatusComponent implements OnInit {
  modalRef: BsModalRef;
  data: any = [];
  status : any = new status();
  len: any = [];
  selectedItem: any;
  number: any;
  iFilter:any = '';
  p: number = 1;
  config = {
    backdrop: true,
    ignoreBackdropClick: true
  };
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor(private modalService: BsModalService, private adminservice: AdminService, private alertService:AlertService) {
    this.getAllStatus();
    this.number = 10;
   }

  ngOnInit() {
  }
  openModal(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
  }
  onClose(){
    this.modalRef.hide();
    this.getAllStatus();
  }
  pageChanged(event) {
    // console.log(event)
    this.p = event;
  }
  getAllStatus(){
    this.adminservice.viewAllStatus().subscribe((data:any)=>{
      this.data = data.response;
      //console.log(this.data);
    })
  }
  //open edit modal
  openModal1(template1, item: any) {
    this.modalRef = this.modalService.show(template1,this.config);
    console.log(item);
    this.selectedItem = item;
    this.status = Object.assign({}, this.selectedItem);
    //console.log(this.selectedItem)
  }

   //open edit modal
   openModal2(template2, item: any) {
    this.modalRef = this.modalService.show(template2,this.config);
    console.log(item);
    this.selectedItem = item;
    this.status = Object.assign({}, this.selectedItem);
    //console.log(this.selectedItem)
  }
}
