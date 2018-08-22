import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule ,DeprecatedI18NPipesModule} from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoadingModule, ANIMATION_TYPES } from 'ngx-loading';
// import 'hammerjs';
import { HomeModule } from './home/home.module';
import { AdminModule } from './admin/admin.module';
import { HashLocationStrategy, LocationStrategy,PathLocationStrategy } from '@angular/common';
// import { NgxSlidesModule } from 'ngx-slides'




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [


  BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    DeprecatedI18NPipesModule,
    SharedModule.forRoot(),
    HttpClientModule,
    HomeModule,
    AdminModule,
    // NgxSlidesModule,
    LoadingModule.forRoot({
      animationType: ANIMATION_TYPES.rectangleBounce,
      backdropBackgroundColour: 'rgba(0, 0, 0, 0.3)',
      backdropBorderRadius: '4px',
      primaryColour: '#bb333a',
      secondaryColour: '#bb333a',
      tertiaryColour: '#bb333a',
      fullScreenBackdrop: true
    })
  ],
  providers: [{provide: LocationStrategy, useClass: PathLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }

