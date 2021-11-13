import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { CartAddressComponent } from './cart-address/cart-address.component';
import { CartPaymentComponent } from './cart-payment/cart-payment.component';
import { RouteGuard } from 'src/app/services/route-guard.guard';
import { CartResolverService } from './cart-resolver.service';
import { DeactiveGuard } from './deactive-guard.guard';

const routes: Routes = [
  {path: '' , component: CartDetailsComponent, resolve: { cartData : CartResolverService} },
  {path: 'deliveryAddress' , component: CartAddressComponent, canActivate: [RouteGuard], canDeactivate: [DeactiveGuard] },
  {path: 'payment/:id1/:id2' , component: CartPaymentComponent, canActivate: [RouteGuard], canDeactivate: [DeactiveGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CartRoutingModule {}
