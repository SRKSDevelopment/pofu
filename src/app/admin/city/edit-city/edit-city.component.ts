import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges, TemplateRef } from '@angular/core';
import { AdminService } from './../../admin.service';
//import { CountryForm } from '../country.form';
import { AlertService } from '../../../shared/alerts/_services/alert.service';
import { AlertType } from '../../../shared/alerts/_models/alert';
import { City } from '../../../shared/entities/city';

@Component({
  selector: 'app-edit-city',
  templateUrl: './edit-city.component.html'
})
export class EditCityComponent implements OnInit {
  //myForm: any = CountryForm.init();
  //communication between two components
  @Input()
  city: City;
  items:any=[];
  //event emmiter
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor(private adminservice: AdminService, private alertService:AlertService) {
    //CountryForm.edit(this.myForm);
    this.getAllStates();
  }
  //to get object from parent component
  ngOnChanges(changes: SimpleChanges) {
    if (changes['city']) {
      this.city = changes['city'].currentValue;
      //  console.log(this.city);
      this.getCity(this.city.cityId);
    }
  }

  ngOnInit() {
  }
  //to update the country
  save(){
    this.adminservice.saveCity(this.city).subscribe((data: any) => {
      console.log(data);
       console.log(this.city);
      if(data.isStatus === false){
        this.alertService.alert(AlertType.Error,data.response)
        }else{
          this.alertService.alert(AlertType.Success,data.response)
        }      
    this.onClose();
  });
}
  getAllStates() {
    this.adminservice.getMultipleStates().subscribe((data: any) => {
      this.items = data.response;
    });
  }
//   //get country data by id
  getCity(data) {
    this.adminservice.getCityData(data).subscribe((data: any) => {
      this.city = data.response;
      // console.log(this.country);
    });
  }
//   //to close the modal
  onClose() {
    this.close.emit();
  }

}
