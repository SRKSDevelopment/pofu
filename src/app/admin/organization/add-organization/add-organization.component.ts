import { Component, OnInit ,Input} from '@angular/core';
import { AlertType } from '../../../shared/alerts/_models/alert';
import { AlertService } from '../../../shared/alerts/_services/alert.service';
import { AdminService } from './../../admin.service';
import { Organization } from './../../../shared/entities/oraganization';
import { AppService } from './../../../shared/service/app.service';

@Component({
  selector: 'app-add-organization',
  templateUrl: './add-organization.component.html'
 
})
export class AddOrganizationComponent implements OnInit {
  mySettings:any;
  //myForm: any = OrganizationForm.init();
  organization : any = new Organization();
  paramId:any;
  item:any = [];
  organizationTypes:any = [];
  jobband:any = [];
  stage:any = [];
  targetAudience:any = [];
  states:any = [];
  cities:any = [];
  pincodes:any = [];
  first:boolean =true;
  second:boolean = false;
  one:boolean =true;
  two:boolean =true;
  table:boolean = false;
  response:any=[];


  constructor(private alertService:AlertService,private adminService :AdminService, private appService: AppService) {
    //OrganizationForm.edit(this.myForm);
    this.getStates();
    this.getCities();
    this.getPincodes();
    
   }

  ngOnInit() {
  }
  getStates(){
    this.adminService.getMultipleStates().subscribe((data: any) => {
      this.states = data.response;
    // console.log(this.states)
    });
  }
  getCities(){
    this.adminService.getCities().subscribe((data: any) => {
      this.cities = data.response;
    // console.log(this.cities)
    });
  }
  getPincodes(){
    this.adminService.getPincode().subscribe((data: any) => {
      this.pincodes = data.response;
    // console.log(this.pincodes)
    });
  }
  checkEvent($event){
    console.log($event);
  }
  save(data){
    this.adminService.saveOrganization(this.organization).subscribe((data: any) => {
    console.log(this.organization)
    if(data.isStatus === false){
        this.alertService.alert(AlertType.Error,data.response)
        }else{
          this.alertService.alert(AlertType.Success,data.response)
          this.appService.navigate('view-organization',[])
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
}