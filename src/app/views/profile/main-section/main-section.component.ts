import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.css']
})
export class MainSectionComponent implements OnInit, OnDestroy {

  routePath = 'My Profile'; // default routPath
  urlLength: number; // assign urlLength
  subscription: Subscription; // subscribe used to store subscription

  constructor(private route: Router, private toaster: ToastrService, private authService: AuthService) { }

  ngOnInit(): void {
    // if (localStorage.getItem('id')){ // checking userId
    if (sessionStorage.getItem('id')){ // checking userId
      this.subscription = this.route.events.subscribe(res => {
        if (res instanceof NavigationEnd){
          // split() method is used to split a string into an array of substrings and return a new array
          const url = res.url.split('/');
          this.urlLength = url.length;
          if (url[2] === 'my-profile'){
            this.routePath = 'My Profile';
          }else if (url[2] === 'my-address'){
            this.routePath = 'My Address';
          }else if (url[2] === 'my-orders'){
            this.routePath = 'My Orders';
          }
        }
      });
    }else{
      this.toaster.success('Please sign-in to continue');
      this.route.navigate(['/sign-in']);
    }
  }

  // function to open modal
  openModal(): void {
    const show = document.getElementById('logoutModal') as HTMLElement;
    show.classList.add('in');
    show.style.display = 'block';
  }

  // function to close modal
  closeModal(): void {
    const show = document.getElementById('logoutModal') as HTMLElement;
    show.classList.remove('in');
    show.style.display = 'none';
  }

  // function to logOut
  logout(): void{
    this.authService.logOut();
  }

  // to unsubscribe the subscriptions
  ngOnDestroy(): void{
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
