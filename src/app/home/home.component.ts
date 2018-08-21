import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';
import { Storage } from '../shared/utils/storage';
import { AppService } from '../shared/service/app.service';
import * as XLSX from 'ts-xlsx';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'

})
export class HomeComponent implements OnInit {

  fromDate: any = new Date();
  data: any = [];
  key: string = 'slNo'; //set default
  reverse: boolean = false;
  iFilter: any = "";
  len: any = [];
  number: any;
  p: number = 1;
  arrayBuffer:any;
  file:File;
  constructor(private appService: AppService) {
    // Storage.clearSession();
    // history.pushState(null, null, location.href);
    // window.onpopstate = function(event) {
    //  history.go(1);
    this.data = [{ slNo: 1, name: 'Sanket', lob: '-', email: 'sanket@gmail.com', phone: '8526547892', stage: 'S1', status: 'Pending' },
    { slNo: 2, name: 'Ashwin', lob: '-', email: 'ashwin@gmail.com', phone: '8526547892', stage: 'S1', status: '	No Response' },
    { slNo: 3, name: 'Sunil', lob: '-', email: 'sunil@gmail.com', phone: '8526547892', stage: 'S2', status: 'Connect Later' },

    { slNo: 4, name: 'Rakesh', lob: '-', email: 'rakesh@gmail.com', phone: '8526547892', stage: 'S3', status: 'Complete' },
    { slNo: 5, name: 'Sharath', lob: '-', email: 'sharath@gmail.com', phone: '8526547892', stage: 'S1', status: 'Pending' },
    { slNo: 6, name: 'Chethan', lob: '-', email: 'chethan@gmail.com', phone: '8526547892', stage: 'S1', status: 'No Response' },
    { slNo: 7, name: 'Roshan', lob: '-', email: 'chethan@gmail.com', phone: '8526547892', stage: 'S2', status: 'Connect Later' },
    { slNo: 8, name: 'Ranjith', lob: '-', email: 'ranjith@gmail.com', phone: '8526547892', stage: 'S3', status: 'Complete' },
    { slNo: 9, name: 'Raj', lob: '-', email: 'raj@gmail.com', phone: '8526547892', stage: 'S1', status: 'No Response' },
    { slNo: 10, name: 'Sravan', lob: '-', email: 'sravan@gmail.com', phone: '8526547892', stage: 'S2', status: 'Connect Later' },
    { slNo: 11, name: 'Jagan', lob: '-', email: 'jagan@gmail.com', phone: '8526547892', stage: 'S3', status: 'Complete' }];
    this.number = 10;
  }

  ngOnInit() { }
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  pageChanged(event) {
    // console.log(event)
    this.p = event;
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