import { Component, OnInit, TemplateRef, Input ,Output,EventEmitter} from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { AlertService } from '../../../shared/alerts/_services/alert.service';
import { AlertType } from '../../../shared/alerts/_models/alert';
import { Role } from '../../../shared/entities/role';
import { AdminService } from '../../admin.service';


@Component({
  selector: 'app-view-role',
  templateUrl: './view-role.component.html',
  styleUrls: ['./view-role.component.css'],
 
})
export class ViewRoleComponent implements OnInit {

  isCollapsed: boolean = false;
  iFilter: any = "";
  itemResource: any;
  items = [];
  itemCount = 0;
  role: any = new Role();
  selectedItem: any;
  modalRef: BsModalRef;
  item: any;
  key: string = 'roleName'; //set default
  reverse: boolean = false;
  len:any = [];
  number:any;
  p: number = 1;
  roleName:string;
  roleId:any;
  checkdata:boolean;
  config = {
    backdrop: true,
    ignoreBackdropClick: true
  };
  @Output() pageChange: EventEmitter<number> = new EventEmitter();
  constructor(private adminService: AdminService, private modalService: BsModalService,private alertService:AlertService) {
    this.getAllRoles();
    this.number = 10;
  }

  ngOnInit() {
  }
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }
  //getAllRoles
  getAllRoles() {
    this.adminService.getRole().subscribe((data: any) => {
      this.items = data.response;
      this.len= this.items.length
    });
  }
  //add
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template,this.config);
  }
  //edit
  openModal1(template1, item) {
    this.modalRef = this.modalService.show(template1,this.config);
    this.selectedItem = item;
    this.role = Object.assign({}, this.selectedItem);
  }
  //close the modal
  onClose() {
    this.modalRef.hide();
    this.getAllRoles();
  }
  pageChanged(event){
    // console.log(event)
    this.p = event;
  }
  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }
  //to clear the search input
  clearSearch() {
    this.iFilter = null;
  }
  delete(template3,item){
    this.modalRef = this.modalService.show(template3,this.config);
    // console.log(item)
    this.roleName = item.roleName;
     this.roleId = item.id;
    //  this.adminService.CheckRole(this.roleId).subscribe((data:any)=>{
    //   this.checkdata = data.isStatus;
    // //  this.message = data.message;
    //   })
   }
   deletestatus(){
    this.adminService.deleteRole(this.roleId).subscribe((data: any) => {
      // console.log(data);
      if(data.isStatus === false){
        this.alertService.alert(AlertType.Error,data.response)
        }else{
          this.alertService.alert(AlertType.Success,data.response);
          this.onClose();
        }
    });
   }
  statusArchive(){
    this.adminService.archiveRole(this.roleId).subscribe((data: any) => {
  // console.log(data);
  if(data.isStatus === false){
   this.alertService.alert(AlertType.Error,data.message)
   }else{
     this.alertService.alert(AlertType.Success,data.message);
     this.onClose();
   }
  });
  }
}