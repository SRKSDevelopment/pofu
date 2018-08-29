import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges, TemplateRef } from '@angular/core';
import { AdminService } from './../../admin.service';
//import { CountryForm } from '../country.form';
import { AlertService } from '../../../shared/alerts/_services/alert.service';
import { AlertType } from '../../../shared/alerts/_models/alert';
import { Universities } from '../../../shared/entities/universities';



@Component({
  selector: 'app-delete-universities',
  templateUrl: './delete-universities.component.html'
})
export class DeleteUniversitiesComponent implements OnInit {
  universitieName:string;
  @Input()
  universities: Universities;
  //event emmiter
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor(private adminservice: AdminService, private alertService:AlertService) { 
    //CountryForm.edit(this.myForm);
  }

  //to get object from parent component
  ngOnChanges(changes: SimpleChanges) {
    if (changes['universities']) {
      this.universities = changes['universities'].currentValue;
      this.universitieName = this.universities.name;
    }
  }
ngOnInit() {
}
//   //to delete the country
deleteUniversityData(){
    this.adminservice.deleteUniversityData(this.universities.universityId).subscribe((data: any) => {    
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
