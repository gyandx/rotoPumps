import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { OrdersComponent } from './orders/orders.component';
import { OrderCancelComponent } from './order-cancel/order-cancel.component';

const routes: Routes = [
  {path: '' , component: OrdersComponent },
  {path: 'cancelOrder/:id', component: OrderCancelComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class OrderRoutingModule {}
