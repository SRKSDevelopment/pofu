import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges, TemplateRef } from '@angular/core';
import { AdminService } from './../../admin.service';
//import { CountryForm } from '../country.form';
import { AlertService } from '../../../shared/alerts/_services/alert.service';
import { AlertType } from '../../../shared/alerts/_models/alert';
import { Course } from '../../../shared/entities/course';



@Component({
  selector: 'app-delete-course',
  templateUrl: './delete-course.component.html'
})
export class DeleteCourseComponent implements OnInit {
  courseName:string;
  @Input()
  course: Course;
  //event emmiter
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor(private adminservice: AdminService, private alertService:AlertService) { 
    //CountryForm.edit(this.myForm);
  }

  //to get object from parent component
  ngOnChanges(changes: SimpleChanges) {
    if (changes['course']) {
      this.course = changes['course'].currentValue;
      this.courseName = this.course.name;
    }
  }
ngOnInit() {
}
//   //to delete the country
deleteCourseData(){
    this.adminservice.deleteCourseData(this.course.courseId).subscribe((data: any) => {    
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
