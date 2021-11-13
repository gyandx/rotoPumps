import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders/orders.component';
import { OrderCancelComponent } from './order-cancel/order-cancel.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DirectivesModule } from 'src/app/directives/directives.module';
import { OrderRoutingModule } from './order-routing.module';

@NgModule({
  declarations: [OrdersComponent, OrderCancelComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DirectivesModule,
    OrderRoutingModule
  ]
})
export class OrderModule { }
