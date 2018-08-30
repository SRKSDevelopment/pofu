import { NgModule, Component } from '@angular/core';
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
import { ViewStateComponent } from './state/view-state/view-state.component';
import { EditStateComponent } from './state/edit-state/edit-state.component';
import { AddStateComponent } from './state/add-state/add-state.component';
import { DeleteStateComponent } from './state/delete-state/delete-state.component';
import { ViewCityComponent } from './city/view-city/view-city.component';
import { AddCityComponent } from './city/add-city/add-city.component';
import { EditCityComponent } from './city/edit-city/edit-city.component';
import { DeleteCityComponent } from './city/delete-city/delete-city.component';
import { ViewPincodeComponent } from './pincode/view-pincode/view-pincode.component';
import { EditPincodeComponent } from './pincode/edit-pincode/edit-pincode.component';
import { AddPincodeComponent } from './pincode/add-pincode/add-pincode.component';
import { DeletePincodeComponent } from './pincode/delete-pincode/delete-pincode.component';
import { ViewCourseComponent } from './course/view-course/view-course.component';
import { AddCourseComponent } from './course/add-course/add-course.component';
import { EditCourseComponent } from './course/edit-course/edit-course.component';
import { DeleteCourseComponent } from './course/delete-course/delete-course.component';
import { ViewInstitutionComponent } from './institution/view-institution/view-institution.component';
import { EditInstitutionComponent } from './institution/edit-institution/edit-institution.component';
import { AddInstitutionComponent } from './institution/add-institution/add-institution.component';
import { DeleteInstitutionComponent } from './institution/delete-institution/delete-institution.component';
import { ViewUniversitiesComponent } from './universities/view-universities/view-universities.component';
import { EditUniversitiesComponent } from './universities/edit-universities/edit-universities.component';
import { AddUniversitiesComponent } from './universities/add-universities/add-universities.component';
import { DeleteUniversitiesComponent } from './universities/delete-universities/delete-universities.component';
import { ViewRoleComponent } from './role/view-role/view-role.component';
import { EditRoleComponent } from './role/edit-role/edit-role.component';
import { AddRoleComponent } from './role/add-role/add-role.component';
import { DeleteRoleComponent } from './role/delete-role/delete-role.component';
import { AdminService } from './admin.service';
import { ViewOrganizationComponent } from './organization/view-organization/view-organization.component';










//routing pathes 

const routes: Routes = [
    { path: 'admin', component: AdminComponent},
    { path: 'status', component:StatusComponent},
    { path: 'view-country', component:ViewCountryComponent},
    { path: 'view-state', component:ViewStateComponent},
    { path: 'view-city', component:ViewCityComponent},
    { path: 'view-pincode', component:ViewPincodeComponent},
    { path: 'view-course', component:ViewCourseComponent},
    { path: 'view-instituion', component:ViewInstitutionComponent},
    { path: 'view-universities', component:ViewUniversitiesComponent},
    { path: 'view-roles', component:ViewRoleComponent},
    { path: 'view-organization', component:ViewOrganizationComponent}
];

@NgModule({
  imports: [

  CommonModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    SharedModule.forRoot()
  ],
  providers: [AdminService],
  declarations: [AdminComponent, StatusComponent, AddStatusComponent, EditStatusComponent, DeleteStatusComponent,ViewCountryComponent,
    AddCountryComponent, EditCountryComponent, DeleteCountryComponent,ViewStateComponent,EditStateComponent,AddStateComponent,DeleteStateComponent,
  ViewCityComponent,EditCityComponent,AddCityComponent,DeleteCityComponent,ViewPincodeComponent,EditPincodeComponent,AddPincodeComponent,DeletePincodeComponent
  ,ViewCourseComponent,AddCourseComponent,EditCourseComponent,DeleteCourseComponent,ViewInstitutionComponent,EditInstitutionComponent,AddInstitutionComponent,
  DeleteInstitutionComponent,ViewUniversitiesComponent,EditUniversitiesComponent,AddUniversitiesComponent,DeleteUniversitiesComponent,ViewRoleComponent,EditRoleComponent,
  AddRoleComponent,DeleteRoleComponent, ViewOrganizationComponent],
  exports: [RouterModule],
})
export class AdminModule { }