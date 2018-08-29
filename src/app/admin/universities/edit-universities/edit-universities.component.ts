import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges, TemplateRef } from '@angular/core';
import { Country } from '../../../shared/entities/countries';
import { AdminService } from './../../admin.service';
//import { CountryForm } from '../country.form';
import { AlertService } from '../../../shared/alerts/_services/alert.service';
import { AlertType } from '../../../shared/alerts/_models/alert';
import { Universities } from '../../../shared/entities/universities';



@Component({
  selector: 'app-edit-universities',
  templateUrl: './edit-universities.component.html'
})
export class EditUniversitiesComponent implements OnInit {
  //myForm: any = CountryForm.init();
  //communication between two components
  @Input()
  universities: Universities;
  //event emmiter
  items:any=[];
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor(private adminservice: AdminService, private alertService:AlertService) {
    //CountryForm.edit(this.myForm);
    this.getAllCities();
  }
  //to get object from parent component
  ngOnChanges(changes: SimpleChanges) {
    if (changes['universities']) {
      this.universities = changes['universities'].currentValue;
      // console.log(this.country);
      this.getUniversitiesData(this.universities.universityId);
    }
  }

  ngOnInit() {
  }
  save(){
    this.adminservice.saveUniversities(this.universities).subscribe((data: any) => {
      console.log(data);
       console.log(this.universities);
      if(data.isStatus === false){
        this.alertService.alert(AlertType.Error,data.response)
        }else{
          this.alertService.alert(AlertType.Success,data.response)
        }      
    this.onClose();
  });
}
  
//   //get country data by id
getUniversitiesData(data) {
    this.adminservice.getUniversitiesData(data).subscribe((data: any) => {
      this.universities = data. response;
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
