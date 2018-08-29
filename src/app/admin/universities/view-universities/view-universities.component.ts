import { Component, OnInit, TemplateRef, Input ,Output,EventEmitter} from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { AdminService } from './../../admin.service';
import { Universities } from '../../../shared/entities/universities';





@Component({
  selector: 'app-view-universities',
  templateUrl: './view-universities.component.html'
 
})
export class ViewUniversitiesComponent implements OnInit {
  iFilter: any = "";
  dataList: any = [];
  itemResource: any;
  items = [];
  itemCount = 0;
  universities: any = new Universities();
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
    this.getUniversities();
    this.number = 10;
  }

  ngOnInit() {
  }  
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }
  //get all countries
  getUniversities() {
    this.adminservice.getUniversities().subscribe((data: any) => {
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
    this.universities = Object.assign({}, this.selectedItem);
  }
//   //open delete modal
  openModal2(template2, item: any) {
    this.modalRef = this.modalService.show(template2,this.config);
    this.selectedItem = item;
    this.universities = Object.assign({}, this.selectedItem);
    // console.log(this.selectedItem)
  }
//   //to close the modal
  onClose() {
    this.modalRef.hide();
  this.getUniversities();
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
