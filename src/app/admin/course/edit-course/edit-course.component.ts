import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges, TemplateRef } from '@angular/core';
import { Country } from '../../../shared/entities/countries';
import { AdminService } from './../../admin.service';
//import { CountryForm } from '../country.form';
import { AlertService } from '../../../shared/alerts/_services/alert.service';
import { AlertType } from '../../../shared/alerts/_models/alert';
import { Course } from '../../../shared/entities/course';



@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html'
})
export class EditCourseComponent implements OnInit {
  //myForm: any = CountryForm.init();
  //communication between two components
  @Input()
  course: Course;
  //event emmiter
  items:any=[];
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor(private adminservice: AdminService, private alertService:AlertService) {
    //CountryForm.edit(this.myForm);
    this.getAllCities();
  }
  //to get object from parent component
  ngOnChanges(changes: SimpleChanges) {
    if (changes['course']) {
      this.course = changes['course'].currentValue;
      // console.log(this.country);
      this.getCourseData(this.course.courseId);
    }
  }

  ngOnInit() {
  }
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
  
//   //get country data by id
getCourseData(data) {
    this.adminservice.getCourseData(data).subscribe((data: any) => {
      this.course = data. response;
      // console.log(this.country);
    });
  }
//   //to close the modal
  onClose() {
    this.close.emit();
  }
  getAllCities() {
    this.adminservice.getCities().subscribe((data: any) => {
      // console.log(data);
      this.items = data.response;
    
    });
  }

}
