import { Component, OnInit, TemplateRef, Input ,Output,EventEmitter} from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { AdminService } from './../../admin.service';
import { Institution } from '../../../shared/entities/instituion';
import { AppService } from './../../../shared/service/app.service';
import { Contact } from '../../../shared/entities/contact';


@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html'
 
})
export class ViewContactComponent implements OnInit {
  iFilter: any = "";
  dataList: any = [];
  itemResource: any;
  items = [];
  itemCount = 0;
  institution: any = new Institution();
  contact: any = new Contact();
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
  constructor(private adminservice: AdminService, private modalService: BsModalService, private appService: AppService) {
    this.getAllContacts();
    this.number = 10;
  }

  ngOnInit() {
  }  
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }
  //get all Organizations
  getAllContacts(){
    this.adminservice.getContact().subscribe((data:any)=>{
      console.log(data);
      this.items = data.response;
    })
  }
  editOrganization(item:any){
    console.log(item);
    this.appService.navigate('edit-contact',[{contactId:item.contactId}]);
    // console.log(item.organizationId);
    }
  addOrganization(){
    this.appService.navigate('add-contact',[])
  }
  pageChanged(event){
    // console.log(event)
    this.p = event;
  }
  //   //open delete modal
  openModal2(template2, item: any) {
    this.modalRef = this.modalService.show(template2,this.config);
    this.selectedItem = item;
    this.contact = Object.assign({}, this.selectedItem);
    console.log(this.selectedItem)
  }
  //to close the modal
  onClose() {
    this.modalRef.hide();
  this.getAllContacts();
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
