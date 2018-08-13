import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { Routes, RouterModule,PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home.component';

//import { InsightService } from './insignt.service';
import { HomeService } from './home.service';

//routing pathes 

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent}


];

@NgModule({
  imports: [


    CommonModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    SharedModule.forRoot()
  ],
  providers: [HomeService],
  declarations: [HomeComponent],
  exports: [RouterModule],
})
export class HomeModule { }