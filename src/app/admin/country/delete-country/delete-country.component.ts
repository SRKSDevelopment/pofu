import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges, TemplateRef } from '@angular/core';
import { Country } from '../../../shared/entities/countries';
import { AdminService } from './../../admin.service';
//import { CountryForm } from '../country.form';
import { AlertService } from '../../../shared/alerts/_services/alert.service';
import { AlertType } from '../../../shared/alerts/_models/alert';

@Component({
  selector: 'app-delete-country',
  templateUrl: './delete-country.component.html'
})
export class DeleteCountryComponent implements OnInit {
  //myForm: any = CountryForm.init();
  //communication between two components
  countryName:string;
  @Input()
  country: Country;
  //event emmiter
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor(private adminservice: AdminService, private alertService:AlertService) { 
    //CountryForm.edit(this.myForm);
  }

  //to get object from parent component
//   ngOnChanges(changes: SimpleChanges) {
//     if (changes['country']) {
//       this.country = changes['country'].currentValue;
//       this.countryName = this.country.countryName;
//       // console.log(this.country);
//       //this.getCountry(this.country.countryId);
//     }
//   }
ngOnInit() {
}
//   //to delete the country
//   deleteColorCode(){
//     this.geographyService.deleteCountryData(this.country.countryId).subscribe((data: any) => {    
//         if(data.isStatus === false){
//           this.alertService.alert(AlertType.Error,data.message)
//           }else{
//             this.alertService.alert(AlertType.Success,data.message)
//           }      
//       this.onClose();
//     });
//   }
  
//   //to close the modal
//   onClose() {
//     this.close.emit();
//   }

}
