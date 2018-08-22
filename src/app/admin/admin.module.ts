import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { Routes, RouterModule,PreloadAllModules } from '@angular/router';
import { AdminComponent } from './admin.component';

//import { InsightService } from './insignt.service';
import { AdminService } from './admin.service';
//routing pathes 

const routes: Routes = [
    { path: 'admin', component: AdminComponent}

];

@NgModule({
  imports: [

    CommonModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    SharedModule.forRoot()
  ],
  providers: [AdminService],
  declarations: [AdminComponent],
  exports: [RouterModule],
})
export class AdminModule { }