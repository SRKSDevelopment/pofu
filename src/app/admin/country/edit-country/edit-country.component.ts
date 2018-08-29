import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges, TemplateRef } from '@angular/core';
import { Country } from '../../../shared/entities/countries';
import { AdminService } from './../../admin.service';
//import { CountryForm } from '../country.form';
import { AlertService } from '../../../shared/alerts/_services/alert.service';
import { AlertType } from '../../../shared/alerts/_models/alert';

@Component({
  selector: 'app-edit-country',
  templateUrl: './edit-country.component.html'
})
export class EditCountryComponent implements OnInit {
  //myForm: any = CountryForm.init();
  //communication between two components
  @Input()
  country: Country;
  //event emmiter
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor(private adminservice: AdminService, private alertService:AlertService) {
    //CountryForm.edit(this.myForm);
  }
  //to get object from parent component
  ngOnChanges(changes: SimpleChanges) {
    if (changes['country']) {
      this.country = changes['country'].currentValue;
     console.log(this.country);
      this.getCountry(this.country.countryId);
    }
  }

  ngOnInit() {
  }
  //to update the country
  save() {
    this.adminservice.saveCountry(this.country).subscribe((data: any) => {  
        if(data.isStatus === false){
          this.alertService.alert(AlertType.Error,data.response)
          }else{
            this.alertService.alert(AlertType.Success,data.response)
          }      
      this.onClose();
    });
  }
  
//   //get country data by id
getCountry(data) {
  this.adminservice.getCountryData(data).subscribe((data: any) => {
    this.country = data.response;
    // console.log(this.country);
  });
}
//   //to close the modal
  onClose() {
    this.close.emit();
  }

}
