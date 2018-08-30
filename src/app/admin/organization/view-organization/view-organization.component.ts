import { Component, OnInit, TemplateRef, Input ,Output,EventEmitter} from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { AdminService } from './../../admin.service';
import { Institution } from '../../../shared/entities/instituion';
import { AppService } from './../../../shared/service/app.service';
import { Organization } from './../../../shared/entities/oraganization';

@Component({
  selector: 'app-view-organization',
  templateUrl: './view-organization.component.html'
 
})
export class ViewOrganizationComponent implements OnInit {
  iFilter: any = "";
  dataList: any = [];
  itemResource: any;
  items = [];
  itemCount = 0;
  institution: any = new Institution();
  organization: any = new Organization();
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
    this.getAllOrganization();
    this.number = 10;
  }

  ngOnInit() {
  }  
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }
  //get all Organizations
  getAllOrganization(){
    this.adminservice.getOrganisation().subscribe((data:any)=>{
      console.log(data);
      this.items = data.response;
    })
  }
  editOrganization(item:any){
    console.log(item);
    this.appService.navigate('edit-organization',[{organizationId:item.organizationId}]);
    console.log(item.organizationId);
    }
  addOrganization(){
    this.appService.navigate('add-organization',[])
  }
  pageChanged(event){
    // console.log(event)
    this.p = event;
  }
  //   //open delete modal
  openModal2(template2, item: any) {
    this.modalRef = this.modalService.show(template2,this.config);
    this.selectedItem = item;
    this.organization = Object.assign({}, this.selectedItem);
    console.log(this.selectedItem)
  }
  //to close the modal
  onClose() {
    this.modalRef.hide();
  this.getAllOrganization();
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
