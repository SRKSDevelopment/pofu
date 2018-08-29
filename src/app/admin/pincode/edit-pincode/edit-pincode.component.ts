import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges, TemplateRef } from '@angular/core';
import { Country } from '../../../shared/entities/countries';
import { AdminService } from './../../admin.service';
//import { CountryForm } from '../country.form';
import { AlertService } from '../../../shared/alerts/_services/alert.service';
import { AlertType } from '../../../shared/alerts/_models/alert';
import { Pincode } from '../../../shared/entities/pincode';


@Component({
  selector: 'app-edit-pincode',
  templateUrl: './edit-pincode.component.html'
})
export class EditPincodeComponent implements OnInit {
  //myForm: any = CountryForm.init();
  //communication between two components
  @Input()
  pincode: Pincode;
  //event emmiter
  items:any=[];
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor(private adminservice: AdminService, private alertService:AlertService) {
    //CountryForm.edit(this.myForm);
    this.getAllCities();
  }
  //to get object from parent component
  ngOnChanges(changes: SimpleChanges) {
    if (changes['pincode']) {
      this.pincode = changes['pincode'].currentValue;
      // console.log(this.country);
      this.getPincodeData(this.pincode.pinCodeId);
    }
  }

  ngOnInit() {
  }
  save(){
    this.adminservice.savePincode(this.pincode).subscribe((data: any) => {
      console.log(data);
       console.log(this.pincode);
      if(data.isStatus === false){
        this.alertService.alert(AlertType.Error,data.response)
        }else{
          this.alertService.alert(AlertType.Success,data.response)
        }      
    this.onClose();
  });
}
  
//   //get country data by id
  getPincodeData(data) {
    this.adminservice.getPincodeData(data).subscribe((data: any) => {
      this.pincode = data. response;
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
