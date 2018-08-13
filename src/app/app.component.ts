import { Component , OnInit,HostBinding ,HostListener, Output, EventEmitter,TemplateRef,ViewChild,OnDestroy} from '@angular/core';
import { ApexService } from './shared/service/apex.service';
import {trigger, stagger, animate, style, group, query, transition, keyframes} from '@angular/animations';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Storage } from './shared/utils/storage';
import { AppService } from './shared/service/app.service';
import { Compiler } from '@angular/core';
import { AlertService } from './shared/alerts/_services/alert.service';
import { AlertType } from './shared/alerts/_models/alert';
import { Router } from '@angular/router';








@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit{
 
  constructor(){
 
}
ngOnInit() {
 
}
}