import { Component, OnInit , Input ,Output ,EventEmitter} from '@angular/core';
import { AdminService } from './../../admin.service';
//import { CountryForm } from '../country.form';
import { AlertService } from '../../../shared/alerts/_services/alert.service';
import { AlertType } from '../../../shared/alerts/_models/alert';
import { City } from '../../../shared/entities/city';



@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html'
})
export class AddCityComponent implements OnInit {  
  //myForm: any = CountryForm.init();
  city:City = new City();
  errorMsg:boolean = false;
  items:any=[];
  //event emmiter
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor(private adminservice: AdminService, private alertService:AlertService) {
    //CountryForm.edit(this.myForm); 
    this.getAllStates();
   }

  ngOnInit() {
  }
  //to save the country
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
//   //to close the modal
  onClose(){
    this.close.emit();
  }
  getAllStates() {
    this.adminservice.getMultipleStates().subscribe((data: any) => {
      this.items = data.response;
    });
  }
}
