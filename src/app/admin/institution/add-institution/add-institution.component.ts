import { Component, OnInit , Input ,Output ,EventEmitter} from '@angular/core';
import { AdminService } from './../../admin.service';
//import { CountryForm } from '../country.form';
import { AlertService } from '../../../shared/alerts/_services/alert.service';
import { AlertType } from '../../../shared/alerts/_models/alert';
import { Institution } from '../../../shared/entities/instituion';




@Component({
  selector: 'app-add-institution',
  templateUrl: './add-institution.component.html'
})
export class AddInstitutionComponent implements OnInit {  
  //myForm: any = CountryForm.init();
  institution:Institution = new Institution();
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
    this.adminservice.saveInstitution(this.institution).subscribe((data: any) => {
      console.log(data);
       console.log(this.institution);
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
