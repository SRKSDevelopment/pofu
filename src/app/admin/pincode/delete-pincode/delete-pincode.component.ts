import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges, TemplateRef } from '@angular/core';
import { AdminService } from './../../admin.service';
//import { CountryForm } from '../country.form';
import { AlertService } from '../../../shared/alerts/_services/alert.service';
import { AlertType } from '../../../shared/alerts/_models/alert';
import { Pincode } from '../../../shared/entities/pincode';


@Component({
  selector: 'app-delete-pincode',
  templateUrl: './delete-pincode.component.html'
})
export class DeletePincodeComponent implements OnInit {
  pinCode:string;
  @Input()
  pincode: Pincode;
  //event emmiter
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor(private adminservice: AdminService, private alertService:AlertService) { 
    //CountryForm.edit(this.myForm);
  }

  //to get object from parent component
  ngOnChanges(changes: SimpleChanges) {
    if (changes['pincode']) {
      this.pincode = changes['pincode'].currentValue;
      this.pinCode = this.pincode.pinCode;
    }
  }
ngOnInit() {
}
//   //to delete the country
deletePincode(){
    this.adminservice.deletePincodeData(this.pincode.pinCodeId).subscribe((data: any) => {    
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
