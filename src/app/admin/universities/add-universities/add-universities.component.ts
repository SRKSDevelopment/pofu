import { Component, OnInit , Input ,Output ,EventEmitter} from '@angular/core';
import { AdminService } from './../../admin.service';
//import { CountryForm } from '../country.form';
import { AlertService } from '../../../shared/alerts/_services/alert.service';
import { AlertType } from '../../../shared/alerts/_models/alert';
import { Universities } from '../../../shared/entities/universities';




@Component({
  selector: 'app-add-universities',
  templateUrl: './add-universities.component.html'
})
export class AddUniversitiesComponent implements OnInit {  
  //myForm: any = CountryForm.init();
  universities:Universities = new Universities();
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
