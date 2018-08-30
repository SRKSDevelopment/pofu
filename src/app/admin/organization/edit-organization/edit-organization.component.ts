import { Component, OnInit ,Input} from '@angular/core';
import { Organization } from '../../../shared/entities/oraganization';
import { AlertType } from '../../../shared/alerts/_models/alert';
import { AlertService } from '../../../shared/alerts/_services/alert.service';
import { AdminService } from './../../admin.service';
import { AppService } from './../../../shared/service/app.service';

@Component({
  selector: 'app-edit-organization',
  templateUrl: './edit-organization.component.html'
})
export class EditOrganizationComponent implements OnInit {
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
  @Input() onText = 'Active';
  @Input() offText = 'InActive';
  @Input() onColor = '#49a25a';
  @Input() value ;
  filter : false;
  stageId:any[]=[];
  step2Data:any = [];
  status:boolean;
  jobBandIds:any = [];
  table:boolean = false;
  jobBandList:any=[];
  response:any=[];
  employmentCategory:any;
  stageIdanother:any;
  stageJobBandId:any =[];
  add:boolean = false;
  constructor(private adminService :AdminService, private alertService:AlertService, private appService: AppService) {
    //OrganizationForm.edit(this.myForm);
    this.paramId = this.adminService.getOrganizationParamId();
    console.log(this.paramId)
    this.getOrganization(this.paramId);
    this.getStates();
    this.getCities();
    this.getPincodes();
   }

  ngOnInit() {
   
  }
  getOrganization(data) {
    this.adminService.getOrganizationData(data).subscribe((data: any) => {
      this.organization = data.response;
    console.log(this.organization)
    this.value = this.organization.isActiveStatus;
    });
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

  save(){
    this.adminService.saveOrganization(this.organization).subscribe((data: any) => {
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
