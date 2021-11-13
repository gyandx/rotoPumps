import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouteGuard } from 'src/app/services/route-guard.guard';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { CartAddressComponent } from './cart-address/cart-address.component';
import { CartPaymentComponent } from './cart-payment/cart-payment.component';
import { CartRoutingModule } from './cart-routing.module';
import { DirectivesModule } from 'src/app/directives/directives.module';
import { CreditCardDirectivesModule } from 'angular-cc-library';
import { ToastrModule } from 'ngx-toastr';
import { DeactiveGuard } from './deactive-guard.guard';
import { NgxSpinnerModule } from 'ngx-spinner';
@NgModule({
  declarations: [CartDetailsComponent, CartAddressComponent, CartPaymentComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CartRoutingModule,
    DirectivesModule,
    CreditCardDirectivesModule,
    ToastrModule,
    NgxSpinnerModule
  ],
  providers: [RouteGuard, DeactiveGuard]
})
export class CartModule { }
