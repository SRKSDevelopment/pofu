import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges, TemplateRef } from '@angular/core';
import { Country } from '../../../shared/entities/countries';
import { AdminService } from './../../admin.service';
//import { CountryForm } from '../country.form';
import { AlertService } from '../../../shared/alerts/_services/alert.service';
import { AlertType } from '../../../shared/alerts/_models/alert';
import { Institution } from '../../../shared/entities/instituion';



@Component({
  selector: 'app-edit-institution',
  templateUrl: './edit-institution.component.html'
})
export class EditInstitutionComponent implements OnInit {
  //myForm: any = CountryForm.init();
  //communication between two components
  @Input()
  institution: Institution;
  //event emmiter
  items:any=[];
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor(private adminservice: AdminService, private alertService:AlertService) {
    //CountryForm.edit(this.myForm);
    this.getAllCities();
  }
  //to get object from parent component
  ngOnChanges(changes: SimpleChanges) {
    if (changes['institution']) {
      this.institution = changes['institution'].currentValue;
      // console.log(this.country);
      this.getInstitutionsData(this.institution.institutionId);
    }
  }

  ngOnInit() {
  }
  save(){
    this.adminservice.saveInstitution(this.institution).subscribe((data: any) => {
      console.log(data);
       console.log(this.institution);
      if(data.isStatus === false){
        this.alertService.alert(AlertType.Error,data.response)
        }else{
          this.alertService.alert(AlertType.Success,data.response)
        }      
    this.onClose();
  });
}
  
//   //get country data by id
getInstitutionsData(data) {
    this.adminservice.getInstitutionsData(data).subscribe((data: any) => {
      this.institution = data.response;
      // console.log(this.country);
    });
  }
//   //to close the modal
  onClose() {
    this.close.emit();
  }
  getAllCities() {
    this.adminservice.getCities().subscribe((data: any) => {
      // console.log(data);
      this.items = data.response;
    
    });
  }

}
