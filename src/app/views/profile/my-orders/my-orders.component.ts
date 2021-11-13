import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderDetails } from 'src/app/dataModels/order-details';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  orderHistoryData: Array<OrderDetails> = new Array<OrderDetails>(); // assigning orderHistoryData array of OrderDetails type


  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit(): void {
    // if (localStorage.getItem('id')){
    //   this.getOrderHistory(window.atob(localStorage.getItem('id')));
    // }
    if (sessionStorage.getItem('id')){
      this.getOrderHistory(window.atob(sessionStorage.getItem('id')));
    }
  }

  // function to getOrderHistory by using userId
  getOrderHistory(userId: string): void{
    const userData = {
      user_id: +userId
    };
    this.apiService.orderHistory(userData).subscribe(res => {
      if (res[`code`] === 200){
        this.orderHistoryData = res[`orders`]; // assigning response from orderHistory api to orderHistoryData
        // console.log(this.orderHistoryData)
        // using sort() method to sort details by dates newest date 1st
        this.orderHistoryData.sort( (a, b) => {
          return Date.parse(b.updated_at) - Date.parse(a.updated_at);
        });
      }
    });
  }

  // function to navigate to order component by passing orderId in router Params
  navigateToOrderDetails(orderId: string): void{
    this.router.navigate(['/orderHistory'], {queryParams: {orderId}});
  }

}
