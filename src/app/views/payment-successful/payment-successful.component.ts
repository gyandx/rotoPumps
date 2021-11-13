import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
// import { OrderDetails } from 'src/app/dataModels/order-details';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-payment-successful',
  templateUrl: './payment-successful.component.html',
  styleUrls: ['./payment-successful.component.css']
})
export class PaymentSuccessfulComponent implements OnInit, OnDestroy {

  subscribe: Subscription; // used to store subscription
  orderData : any;
  userEmail: string;
  orderId: any;

  constructor(private apiService: ApiService, private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // this.subscribe = this.apiService.orderDetails.subscribe(res => {
    //   this.orderData = res; // getting orderDetails from orderDetails(behaviouralSubject)
    //   this.getUserEmail();
    // });
    this.activatedRoute.queryParams.subscribe(orderId => {
      this.orderId = orderId[`orderId`];
      if (this.orderId){
        this.getOrderDetails();
      }
    });
  }

  getOrderDetails(): void{
    const order = {
      order_id: this.orderId
    };
    this.apiService.orderDetailsById(order).subscribe(res => {
      if (res[`code`] === 200) {
        this.orderData = res[`orders`];
        this.getUserEmail();
      }
    });
  }

  getUserEmail(): void{
    this.subscribe = this.apiService.getUserDetails(window.atob(sessionStorage.getItem('id'))).subscribe(res => {
      if (res[`code`] === 200){
        this.userEmail = res[`details`].email;
      }
      // console.log(this.orderData, 'order');
    });
  }

  // function to navigate back to home
  goToHome(): void{
    this.router.navigate(['/home']);
  }

  // used to unsubscribe Subscription.
  ngOnDestroy(): void{
    if (this.subscribe){
      this.subscribe.unsubscribe();
    }
  }

}
