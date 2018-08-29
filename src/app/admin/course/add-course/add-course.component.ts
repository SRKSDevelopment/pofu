import { Component, OnInit , Input ,Output ,EventEmitter} from '@angular/core';
import { AdminService } from './../../admin.service';
//import { CountryForm } from '../country.form';
import { AlertService } from '../../../shared/alerts/_services/alert.service';
import { AlertType } from '../../../shared/alerts/_models/alert';
import { Course } from '../../../shared/entities/course';




@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html'
})
export class AddCourseComponent implements OnInit {  
  //myForm: any = CountryForm.init();
  course:Course = new Course();
  errorMsg:boolean = false;
  items:any=[];
  //event emmiter
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor(private adminservice: AdminService, private alertService:AlertService) {

   }

  ngOnInit() {
  }
  //to save the country
  save(){
    this.adminservice.saveCourse(this.course).subscribe((data: any) => {
      console.log(data);
       console.log(this.course);
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
