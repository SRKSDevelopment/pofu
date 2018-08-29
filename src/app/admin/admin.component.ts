import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { excel } from '../shared/entities/excel';
import { AdminService } from './admin.service';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html'
})
export class AdminComponent implements OnInit {
  modalRef: BsModalRef;
  arrayBuffer:any;
  file:File;
  excel: excel = new excel();
  uploadCandidates:any=[];

  constructor(private modalService: BsModalService, private adminservice: AdminService) {
    
   }

  ngOnInit() {
  }
  openModal(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
  }
  onClose(){
    this.modalRef.hide();
  }
  incomingfile(event) 
  {
  this.file= event.target.files[0]; 
  //console.log(this.file);
  }
  Upload() {
    let fileReader = new FileReader();
      fileReader.onload = (e) => {
          this.arrayBuffer = fileReader.result;
          var data = new Uint8Array(this.arrayBuffer);
          var arr = new Array();
          for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
          var bstr = arr.join("");
          var workbook = XLSX.read(bstr, {type:"binary"});
          var first_sheet_name = workbook.SheetNames[0];
          var worksheet = workbook.Sheets[first_sheet_name];
         console.log(XLSX.utils.sheet_to_json(workbook.Sheets[first_sheet_name], {defval: null}));
         this.uploadCandidates = XLSX.utils.sheet_to_json(workbook.Sheets[first_sheet_name], {defval: null});
          let obj:any ={
            'uploadCandidates':this.uploadCandidates
          }
          this.adminservice.uploadCandidates(obj).subscribe((data:any)=>{

          })
          this.onClose();
      }
      fileReader.readAsArrayBuffer(this.file);
}

}
