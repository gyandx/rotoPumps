import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { SharedModule } from '../app/shared/shared.module';
import { ErrorComponent } from './error/error/error.component';
import { HomeComponent } from './views/home/home.component';
import { ClosedCoupleComponent } from './views/closed-couple/closed-couple.component';
import { BareShaftComponent } from './views/bare-shaft/bare-shaft.component';
import { ProductDetailsComponent } from './views/product-details/product-details.component';
import { DirectivesModule } from './directives/directives.module';
import { PaymentSuccessfulComponent } from './views/payment-successful/payment-successful.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MainInterceptor } from './services/main.interceptor';
import { RotoSparesComponent } from './views/roto-spares/roto-spares.component';
import { RetroSparesComponent } from './views/retro-spares/retro-spares.component';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { LightboxModule } from 'ngx-lightbox';
import { MaphilightModule } from 'ng-maphilight';
import { AboutUsComponent } from './shared/footerContents/about-us/about-us.component';
import { RetroSelectionComponent } from './views/retro-selection/retro-selection.component';
import { ComingSoonComponent } from './views/coming-soon/coming-soon.component';
import { ThankyouComponent } from './views/thankyou/thankyou.component';
@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    HomeComponent,
    ClosedCoupleComponent,
    BareShaftComponent,
    ProductDetailsComponent,
    PaymentSuccessfulComponent,
    RotoSparesComponent,
    RetroSparesComponent,
    AboutUsComponent,
    RetroSelectionComponent,
    ComingSoonComponent,
    ThankyouComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      preventDuplicates: true
    }),
    SharedModule,
    DirectivesModule,
    NgxSpinnerModule,
    NgxImageZoomModule,
    LightboxModule,
    MaphilightModule
  ],
  exports: [HomeComponent],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: MainInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
