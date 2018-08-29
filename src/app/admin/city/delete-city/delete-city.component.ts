import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges, TemplateRef } from '@angular/core';
import { AdminService } from './../../admin.service';
//import { CountryForm } from '../country.form';
import { AlertService } from '../../../shared/alerts/_services/alert.service';
import { AlertType } from '../../../shared/alerts/_models/alert';
import { City } from '../../../shared/entities/city';


@Component({
  selector: 'app-delete-city',
  templateUrl: './delete-city.component.html'
})
export class DeleteCityComponent implements OnInit {
  cityName:string;
  @Input()
  city: City;
  //event emmiter
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor(private adminservice: AdminService, private alertService:AlertService) { 
    //CountryForm.edit(this.myForm);
  }

  //to get object from parent component
  ngOnChanges(changes: SimpleChanges) {
    if (changes['city']) {
      this.city = changes['city'].currentValue;
      this.cityName = this.city.cityName;
    }
  }
ngOnInit() {
}
//   //to delete the country
deleteCity(){
    this.adminservice.deleteCityData(this.city.cityId).subscribe((data: any) => {    
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
