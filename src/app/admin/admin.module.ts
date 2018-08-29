import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { Routes, RouterModule,PreloadAllModules } from '@angular/router';
import { AdminComponent } from './admin.component';
import { StatusComponent } from './status/view-status/status.component';
import { AddStatusComponent } from './status/add-status/add-status.component';
import { EditStatusComponent } from './status/edit-status/edit-status.component';
import { DeleteStatusComponent } from './status/delete/delete-status.component';
import { ViewCountryComponent } from './country/view-country/view-country.component';
import { AddCountryComponent } from './country/add-country/add-country.component';
import { EditCountryComponent } from './country/edit-country/edit-country.component';
import { DeleteCountryComponent } from './country/delete-country/delete-country.component';
//import { InsightService } from './insignt.service';
import { AdminService } from './admin.service';
//routing pathes 

const routes: Routes = [
    { path: 'admin', component: AdminComponent},
    { path: 'status', component:StatusComponent},
    { path: 'view-country', component:ViewCountryComponent}
];

@NgModule({
  imports: [

  CommonModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    SharedModule.forRoot()
  ],
  providers: [AdminService],
  declarations: [AdminComponent, StatusComponent, AddStatusComponent, EditStatusComponent, DeleteStatusComponent,ViewCountryComponent,
    AddCountryComponent, EditCountryComponent, DeleteCountryComponent],
  exports: [RouterModule],
})
export class AdminModule { }