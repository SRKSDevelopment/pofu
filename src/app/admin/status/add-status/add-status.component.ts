import { Component, OnInit , Input ,Output ,EventEmitter} from '@angular/core';
import { AlertService } from './../../../shared/alerts/_services/alert.service';
import { AlertType } from '../../../shared/alerts/_models/alert';
import { AdminService } from './../../admin.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { status } from './../../../shared/entities/status';

@Component({
    selector: 'app-add-status',
  templateUrl: './add-status.component.html'
})
export class AddStatusComponent implements OnInit {
    status : status = new status();
    @Output() close: EventEmitter<any> = new EventEmitter();
    constructor(private modalService: BsModalService, private adminservice: AdminService, private alertService:AlertService) {
        //this.getAllStatus();
       }
    
      ngOnInit() {
      }
      //to close the modal

      checkEvent($event){
        console.log($event);
      }
      save(){
        console.log(this.status);
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
