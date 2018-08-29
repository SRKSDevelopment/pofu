import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges, TemplateRef } from '@angular/core';
import { AdminService } from './../../admin.service';
//import { CountryForm } from '../country.form';
import { AlertService } from '../../../shared/alerts/_services/alert.service';
import { AlertType } from '../../../shared/alerts/_models/alert';
import { Institution } from '../../../shared/entities/instituion';



@Component({
  selector: 'app-delete-institution',
  templateUrl: './delete-institution.component.html'
})
export class DeleteInstitutionComponent implements OnInit {
  institutionName:string;
  @Input()
  institution: Institution;
  //event emmiter
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor(private adminservice: AdminService, private alertService:AlertService) { 
    //CountryForm.edit(this.myForm);
  }

  //to get object from parent component
  ngOnChanges(changes: SimpleChanges) {
    if (changes['institution']) {
      this.institution = changes['institution'].currentValue;
      this.institutionName = this.institution.name;
    }
  }
ngOnInit() {
}
//   //to delete the country
deleteInstitutionData(){
    this.adminservice.deleteInstitutionData(this.institution.institutionId).subscribe((data: any) => {    
        if(data.isStatus === false){
          this.alertService.alert(AlertType.Error,data.response)
          }else{
            this.alertService.alert(AlertType.Success,data.response)
          }      
      this.onClose();
    });
  }
  
//   //to close the modal
  onClose() {
    this.close.emit();
  }

}
