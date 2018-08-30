import { Component, OnInit , Input ,Output ,EventEmitter,SimpleChanges} from '@angular/core';
import { AdminService } from './../../admin.service';
import { Country } from '../../../shared/entities/countries';
//import { CountryForm } from '../country.form';
import { AlertService } from '../../../shared/alerts/_services/alert.service';
import { AlertType } from '../../../shared/alerts/_models/alert';


@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html'
})
export class AddCountryComponent implements OnInit {  
  //myForm: any = CountryForm.init();
  country:Country = new Country();
  errorMsg:boolean = false;
  //event emmiter
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor(private adminservice: AdminService, private alertService:AlertService) {
    //CountryForm.edit(this.myForm); 
   }

  ngOnInit() {
  }
  //to save the country
  save(){
    this.adminservice.saveCountry(this.country).subscribe((data: any) => {
      console.log(data);
       console.log(this.country);
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
 
}
