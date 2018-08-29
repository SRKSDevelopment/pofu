import { Component, OnInit , Input ,Output ,EventEmitter, SimpleChanges} from '@angular/core';
import { AlertService } from './../../../shared/alerts/_services/alert.service';
import { AlertType } from '../../../shared/alerts/_models/alert';
import { AdminService } from './../../admin.service';
import { status } from './../../../shared/entities/status';

@Component({
    selector: 'app-edit-status',
  templateUrl: './edit-status.component.html'
})
export class EditStatusComponent implements OnInit {
    //status : any = new status();
    //communication between two components
    @Input()
    status: status;
    @Output() close: EventEmitter<any> = new EventEmitter();
    constructor(private adminservice: AdminService, private alertService:AlertService) {
       
       }
       //to get object from parent component
  ngOnChanges(changes: SimpleChanges) {
    if (changes['status']) {
      this.status = changes['status'].currentValue;
      this.getStatus(this.status.statusReasonId);
      console.log(this.status);
    }
  }
  ngOnInit() {
}
    //get country data by id
  getStatus(data) {
    this.adminservice.ViewStatusReason(data).subscribe((data: any) => {
      this.status = data.response;
      console.log(this.status);
    });
  }
      
      //to close the modal

      checkEvent($event){
        console.log($event);
      }
      save(){
        this.adminservice.saveStatus(this.status).subscribe((data:any)=>{
          console.log(data);
          if(data.isStatus === false){
            this.alertService.alert(AlertType.Error,data.response)
            }else{
              this.alertService.alert(AlertType.Success,data.response)
            }
          this.onClose();
        });
      }
  onClose(){
    this.close.emit();
  }
}
