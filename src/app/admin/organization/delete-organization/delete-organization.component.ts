import { Component, OnInit, Input, SimpleChanges, EventEmitter, Output} from '@angular/core';
import { Organization} from '../../../shared/entities/oraganization';
import { AlertType } from '../../../shared/alerts/_models/alert';
import { AlertService } from '../../../shared/alerts/_services/alert.service';
import { AdminService } from './../../admin.service';


@Component({
  selector: 'app-delete-organization',
  templateUrl: './delete-organization.component.html'
})
export class DeleteOrganizationComponent implements OnInit {
  //myForm: any = OrganizationForm.init();
  //organization : any = new Organization();
  @Input() organization: Organization;
  organizationName: string;
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor(private adminService :AdminService, private alertService:AlertService) {
    //OrganizationForm.edit(this.myForm);
   }
   ngOnChanges(changes: SimpleChanges) {
    if (changes['organization']) {
      this.organization = changes['organization'].currentValue;
      console.log(this.organization.organizationName);
      this.organizationName = this.organization.organizationName;
    }
  }
  ngOnInit() {
   
  }
  
deleteOrganization(){
  this.adminService.deleteOrganizationData(this.organization.organizationId).subscribe((data: any) => {
  if(data.isStatus === false){
    this.alertService.alert(AlertType.Error,data.response)
    }else{
      this.alertService.alert(AlertType.Success,data.response)
    }
    this.onClose();
  });
}
//close the popup
onClose() {
  this.close.emit();
}
}
