import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy {

  subscribe: Subscription; // subscribe used to store subscription

  userData = new BehaviorSubject<any>({}); // userData of behaviourSubject to store the userData after login
  userName = new BehaviorSubject<string>(''); // userName of behaviourSubject to reflect change in username in header
  showHeader = new BehaviorSubject<boolean>(false); // used to show and height search header

  constructor(private route: Router, private apiService: ApiService) { }

  // login function to store login data from login api
  loginData(userDetails): void{
    // localStorage.setItem('token', userDetails[`access_token`]);
    // localStorage.setItem('id', window.btoa(userDetails[`user`].id));
    sessionStorage.setItem('token', userDetails[`access_token`]);
    sessionStorage.setItem('id', window.btoa(userDetails[`user`].id));
    sessionStorage.setItem('currentUser', window.btoa(userDetails[`user`].name));
    sessionStorage.setItem('userType', window.btoa(userDetails[`user`].user_type));
    sessionStorage.setItem('userStatus', window.btoa(userDetails[`user`].status));
    sessionStorage.setItem('userDiscount', window.btoa(userDetails[`user`].discount_rate));
    if (userDetails[`user`].cart[`id`]){
      // localStorage.setItem('cartId', window.btoa(userDetails[`user`].cart.id));
      sessionStorage.setItem('cartId', window.btoa(userDetails[`user`].cart.id));
    }
    this.updateData();
  }

  // logout function to clear all storage(local&session storage)
  logOut(): void{
    this.userData.next({});
    localStorage.clear();
    sessionStorage.clear();
    this.userName.next('');
    this.apiService.cartValue.next(0);
    this.route.navigate(['/home']);
  }

  // function to get current user-details
  getCurrentUser(): void{
    this.updateData();
  }

  // function to reflect userName from storage or from getUserDetails api.
  private updateData(): void{
    // if (localStorage.getItem('id')){
    if (sessionStorage.getItem('id')){
      if (sessionStorage.getItem('currentUser')){
        this.userName.next(window.atob(sessionStorage.getItem('currentUser')));
      }else {
        // this.subscribe = this.apiService.getUserDetails(window.atob(localStorage.getItem('id'))).subscribe(res => {
        this.subscribe = this.apiService.getUserDetails(window.atob(sessionStorage.getItem('id'))).subscribe(res => {
          if (res[`code`] === 200){
            sessionStorage.setItem('currentUser', window.btoa(res[`details`].name));
            this.userName.next(res[`details`].name);
          }
        });
      }
    }else{
      this.userName.next('');
    }
  }

  // getFooterData(page: string): any {
  //   if (this.footerPages.length){
  //     console.log('page', page);
  //     return this.footerPages.filter(data => data.type === page);
  //   }else{
  //     return this.footerPages;
  //   }
  // }


  // to unsubscribe the subscriptions
  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
    if (this.subscribe){
      this.subscribe.unsubscribe();
    }
  }
}
