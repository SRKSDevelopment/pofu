import { Component, OnInit, Input, SimpleChanges, EventEmitter, Output} from '@angular/core';
import { AlertType } from '../../../shared/alerts/_models/alert';
import { AlertService } from '../../../shared/alerts/_services/alert.service';
import { AdminService } from './../../admin.service';
import { Contact } from '../../../shared/entities/contact';



@Component({
  selector: 'app-delete-contact',
  templateUrl: './delete-contact.component.html'
})
export class DeleteContactComponent implements OnInit {
  //myForm: any = OrganizationForm.init();
  //organization : any = new Organization();
  @Input() contact: Contact;
  contactName: string;
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor(private adminService :AdminService, private alertService:AlertService) {
    //OrganizationForm.edit(this.myForm);
   }
   ngOnChanges(changes: SimpleChanges) {
    if (changes['contact']) {
      this.contact = changes['contact'].currentValue;
      console.log(this.contact.contactName);
      this.contactName = this.contact.contactName;
    }
  }
  ngOnInit() {
   
  }
  
  deleteContact(){
  this.adminService.deleteContactData(this.contact.contactId).subscribe((data: any) => {
  if(data.isStatus === false){
    this.alertService.alert(AlertType.Error,data.response)
    }else{
      this.alertService.alert(AlertType.Success,data.response)
    }
    this.onClose();
  });
}
//close the popup
onClose() {
  this.close.emit();
}
}
