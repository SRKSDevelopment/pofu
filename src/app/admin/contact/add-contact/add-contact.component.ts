import { Component, OnInit ,Input} from '@angular/core';
import { AlertType } from '../../../shared/alerts/_models/alert';
import { AlertService } from '../../../shared/alerts/_services/alert.service';
import { AdminService } from './../../admin.service';
import { AppService } from './../../../shared/service/app.service';
import { Contact } from '../../../shared/entities/contact';


@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html'
 
})
export class AddContactComponent implements OnInit {
  //myForm: any = OrganizationForm.init();
  contact : any = new Contact();
  response:any=[];
  organizations:any=[];
  roles:any=[]
  internal:boolean = false;
  vendor:boolean = false;

  constructor(private alertService:AlertService,private adminService :AdminService, private appService: AppService) {
    //OrganizationForm.edit(this.myForm);
    this.getRoles();
    this.getOrganization();
    
   }

  ngOnInit() {
  }
  getRoles(){
    this.adminService.getRole().subscribe((data: any) => {
      this.roles = data.response;
      console.log(this.roles)
    });
  }
  getOrganization(){
    this.adminService.getOrganisation().subscribe((data: any) => {
      this.organizations = data.response;
    console.log(this.organizations)
    });
  }

  checkEvent($event){
    console.log($event);
  }
  save(data){
    this.adminService.saveContact(this.contact).subscribe((data: any) => {
    console.log(this.contact)
    if(data.isStatus === false){
        this.alertService.alert(AlertType.Error,data.response)
        }else{
          this.alertService.alert(AlertType.Success,data.response,true)
          this.appService.navigate('view-contact',[])
        }
    });

  }
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
  onChange($event){
    console.log($event);
    if($event.organizationId == 4){
      this.internal = true;
      this.vendor = false;
    }else{
      this.internal = false;
      this.vendor = true;
    }
  }
}