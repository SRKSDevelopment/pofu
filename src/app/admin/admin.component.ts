import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import * as XLSX from 'ts-xlsx';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  modalRef: BsModalRef;
  arrayBuffer:any;
  file:File;
  constructor(private modalService: BsModalService) { }

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
          console.log(XLSX.utils.sheet_to_json(worksheet,{raw:true}));
      }
      fileReader.readAsArrayBuffer(this.file);
}

}
