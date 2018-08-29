import { Component, OnInit , Input ,Output ,EventEmitter} from '@angular/core';
import { AdminService } from './../../admin.service';
//import { CountryForm } from '../country.form';
import { AlertService } from '../../../shared/alerts/_services/alert.service';
import { AlertType } from '../../../shared/alerts/_models/alert';
import { Pincode } from '../../../shared/entities/pincode';



@Component({
  selector: 'app-add-pincode',
  templateUrl: './add-pincode.component.html'
})
export class AddPincodeComponent implements OnInit {  
  //myForm: any = CountryForm.init();
  pincode:Pincode = new Pincode();
  errorMsg:boolean = false;
  items:any=[];
  //event emmiter
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor(private adminservice: AdminService, private alertService:AlertService) {
    //CountryForm.edit(this.myForm); 
    this.getAllCities();
   }

  ngOnInit() {
  }
  //to save the country
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
//   //to close the modal
  onClose(){
    this.close.emit();
  }
  getAllCities() {
    this.adminservice.getCities().subscribe((data: any) => {
      // console.log(data);
      this.items = data.response;
    
    });
  }
}
