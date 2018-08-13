//share module is a common module of the all moduless
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApexService } from "./service/apex.service";
import { ReportService } from "./service/report.service";
import { FormMessagesComponent } from './components/form-message.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppInterceptor } from './service/app.interceptor';
import { AppService } from './service/app.service';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule } from 'ngx-bootstrap';
import { FilterPipe, KeyValuesPipe, DecodeURIPipe, DatePipe, DateTimePipe, FlagPipe, CurrencyPipe } from './utils/pipes';
import { CollapseModule } from 'ngx-bootstrap';
import {NgSelectModule} from '@ng-select/ng-select';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { AlertComponent } from './alerts/_directives/alert.component';
import { AlertService } from './alerts/_services/alert.service';
import { ButtonsModule } from 'ngx-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {NgxPaginationModule} from 'ngx-pagination';
import { TooltipModule } from 'ngx-bootstrap';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { TypeaheadModule } from 'ngx-bootstrap';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AccordionModule } from 'ngx-bootstrap';








@NgModule({
    //to import the modules
  imports: [
     CommonModule, 
     FormsModule, 
     ReactiveFormsModule,
     ModalModule.forRoot(),
     PaginationModule,
     CollapseModule.forRoot(),
     NgSelectModule,
      BsDatepickerModule.forRoot(),
     ButtonsModule.forRoot(),
     BrowserAnimationsModule,
     AngularFontAwesomeModule,
     NgxPaginationModule,
     TooltipModule.forRoot(),
     AngularMultiSelectModule,
     TimepickerModule.forRoot(),
     TypeaheadModule,
     Ng2OrderModule,
     AccordionModule.forRoot(),
     NgxSpinnerModule,
     RouterModule,
    //  Angular5CsvModule
   
    
    //
     //FileUploadModule
  ],
  //to declare the components,pipes,directives
  declarations: [
    FilterPipe, KeyValuesPipe, DecodeURIPipe, DatePipe, DateTimePipe, FlagPipe, CurrencyPipe,FormMessagesComponent,AlertComponent
  
  ],
  // to export all we have to use in another component
  exports: [
    FilterPipe, KeyValuesPipe, DecodeURIPipe, DatePipe, DateTimePipe, FlagPipe, CurrencyPipe,
    CommonModule, FormsModule, ReactiveFormsModule,ModalModule,PaginationModule,FormMessagesComponent,CollapseModule,ButtonsModule,
     CollapseModule,NgSelectModule,AlertComponent,
     BrowserAnimationsModule,AngularFontAwesomeModule,NgxPaginationModule
     ,TooltipModule,AngularMultiSelectModule,TimepickerModule,TypeaheadModule,
     Ng2OrderModule, BsDatepickerModule,NgxSpinnerModule,AccordionModule
    

  ],
  // to declare the services in providers
  providers:[AppService , ApexService , ReportService, AlertService]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
      return {
          ngModule: SharedModule,
          providers: [
              {
                  provide: HTTP_INTERCEPTORS,
                  useClass: AppInterceptor,
                  multi: true
              }
          ],
      };
  }
}
