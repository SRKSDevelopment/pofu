import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges, TemplateRef } from '@angular/core';
import { AdminService } from './../../admin.service';
//import { CountryForm } from '../country.form';
import { AlertService } from '../../../shared/alerts/_services/alert.service';
import { AlertType } from '../../../shared/alerts/_models/alert';
import { State } from '../../../shared/entities/state';


@Component({
  selector: 'app-edit-state',
  templateUrl: './edit-state.component.html'
})
export class EditStateComponent implements OnInit {
  //myForm: any = CountryForm.init();
  //communication between two components
  @Input()
  state: State;
  //event emmiter
  items:any=[]
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor(private adminservice: AdminService, private alertService:AlertService) {
    //CountryForm.edit(this.myForm);
    this.getAllCountries();
  }
  //to get object from parent component
  ngOnChanges(changes: SimpleChanges) {
    if (changes['state']) {
      this.state = changes['state'].currentValue;
      // console.log(this.country);
      this.getStateData(this.state.stateId);
    }
  }

  ngOnInit() {
  }
  //to update the country
 save(){
    this.adminservice.saveState(this.state).subscribe((data: any) => {
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
getStateData(data) {
  this.adminservice.getStateData(data).subscribe((data: any) => {
    this.state = data.response;

  });
}
//   //to close the modal

  onClose() {
    this.close.emit();
  }

}
