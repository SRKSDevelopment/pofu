import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges, TemplateRef } from '@angular/core';
import { AdminService } from './../../admin.service';
//import { CountryForm } from '../country.form';
import { AlertService } from '../../../shared/alerts/_services/alert.service';
import { AlertType } from '../../../shared/alerts/_models/alert';
import { State } from '../../../shared/entities/state';

@Component({
  selector: 'app-delete-state',
  templateUrl: './delete-state.component.html'
})
export class DeleteStateComponent implements OnInit {
  stateName:string;
  @Input()
  state: State;
  //event emmiter
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor(private adminservice: AdminService, private alertService:AlertService) { 
    //CountryForm.edit(this.myForm);
  }

  //to get object from parent component
  ngOnChanges(changes: SimpleChanges) {
    if (changes['state']) {
      this.state = changes['state'].currentValue;
      this.stateName = this.state.stateName;
    }
  }
ngOnInit() {
}
//   //to delete the country
deleteState(){
    this.adminservice.deleteStateData(this.state.stateId).subscribe((data: any) => {    
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
