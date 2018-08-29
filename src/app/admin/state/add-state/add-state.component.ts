import { Component, OnInit , Input ,Output ,EventEmitter} from '@angular/core';
import { AdminService } from './../../admin.service';
//import { CountryForm } from '../country.form';
import { AlertService } from '../../../shared/alerts/_services/alert.service';
import { AlertType } from '../../../shared/alerts/_models/alert';
import { State } from '../../../shared/entities/state';



@Component({
  selector: 'app-add-state',
  templateUrl: './add-state.component.html'
})
export class AddStateComponent implements OnInit {  
  //myForm: any = CountryForm.init();
  state:State = new State();
  errorMsg:boolean = false;
  items:any=[]
  //event emmiter
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor(private adminservice: AdminService, private alertService:AlertService) {
    //CountryForm.edit(this.myForm); 
    this.getAllCountries()
   }

  ngOnInit() {
  }
  //to save the country
  save(){
    this.adminservice.saveCountry(this.state).subscribe((data: any) => {
      console.log(data);
       console.log(this.state);
      if(data.isStatus === false){
        this.alertService.alert(AlertType.Error,data.response)
        }else{
          this.alertService.alert(AlertType.Success,data.response)
        }      
    this.onClose();
  });
}
getAllCountries() {
  this.adminservice.getCountries().subscribe((data: any) => {
    console.log(data);
    this.items = data.response;

  });
}

//   //to close the modal
  onClose(){
    this.close.emit();
  }
//   errorMeassage(){
//     this.errorMsg = true;
//   }
}
