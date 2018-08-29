import { Component, OnInit, TemplateRef, Input ,Output,EventEmitter} from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { AdminService } from './../../admin.service';
import { Pincode } from '../../../shared/entities/pincode';




@Component({
  selector: 'app-view-pincode',
  templateUrl: './view-pincode.component.html'
 
})
export class ViewPincodeComponent implements OnInit {
  iFilter: any = "";
  dataList: any = [];
  itemResource: any;
  items = [];
  itemCount = 0;
  pincode: any = new Pincode();
  selectedItem: any;
  modalRef: BsModalRef;
  item: any;
  isCollapsed: boolean = false;
  key: string = 'countryName'; //set default
  reverse: boolean = false;
  len:any = [];
  number:any;
  p: number = 1;
  config = {
    backdrop: true,
    ignoreBackdropClick: true
  };
  @Output() pageChange: EventEmitter<number> = new EventEmitter();
  constructor(private adminservice: AdminService, private modalService: BsModalService) {
    this.getAllPincodes();
    this.number = 10;
  }

  ngOnInit() {
  }  
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }
  //get all countries
  getAllPincodes() {
    this.adminservice.getPincode().subscribe((data: any) => {
      // console.log(data);
      this.items = data. response;
      this.len= this.items.length
    });
  }
  //open add modal
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template,this.config);
  }
//   //open edit modal
  openModal1(template1, item: any) {
    this.modalRef = this.modalService.show(template1,this.config);
    this.selectedItem = item;
    this.pincode = Object.assign({}, this.selectedItem);
  }
//   //open delete modal
  openModal2(template2, item: any) {
    this.modalRef = this.modalService.show(template2,this.config);
    this.selectedItem = item;
    this.pincode = Object.assign({}, this.selectedItem);
    // console.log(this.selectedItem)
  }
//   //to close the modal
  onClose() {
    this.modalRef.hide();
  this.getAllPincodes();
  }

  pageChanged(event){
    // console.log(event)
    this.p = event;
  }
//   collapsed(event: any): void {
//     // console.log(event);
//   }

//   expanded(event: any): void {
//     // console.log(event);
//   }
//   //to clear the search input
//   clearSearch() {
//     this.iFilter = null;
//   }

}
