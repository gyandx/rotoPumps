import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  loginForm: FormGroup; // loginForm form of type formGroup
  signInType: string; // to detect the type of signUp(from normal signUp or signUp from cart)

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private route: Router,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private toaster: ToastrService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((res) => {
      this.signInType = res[`origin`]; // get the signUp type from queryParams
    });
    this.createLoginForm();
  }

  // function to create signIn form
  createLoginForm(): void {
    this.loginForm = this.fb.group({
      email: new FormControl('', [
        Validators.pattern('^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$'),
        Validators.required,
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  // function to get controls of signUp form
  get formControl(): any {
    return this.loginForm.controls;
  }

  // function to validate all fields of signUp form
  validateAllFields(formGroup: FormGroup): void {
    Object.keys(this.formControl).forEach((field) => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFields(control);
      }
    });
  }

  // function to submit signUp form
  submitSignInForm(form): void {
    if (form.invalid) {
      // condition checking if form is valid or not
      this.validateAllFields(form); // if form in invalid then call validateAllfields function
    } else {
      this.apiService.login(form.value).subscribe(
        (res) => {
          if (res[`code`] === 200) {
            // if (localStorage.getItem(`id`) !== res[`user`].id){ /* if signIn successful then check the localStorage UserId and
            //                                                         response userId is same or not */
            //   localStorage.clear(); // if not same then clear localStorage
            // }
            // if (sessionStorage.getItem(`id`) !== res[`user`].id){ /* if signIn successful then check the sessionStorage UserId and
            //                                                         response userId is same or not */
            //   sessionStorage.clear(); // if not same then clear sessionStorage
            // }
            this.authService.loginData(res); // calling authService loginData to store info in localStorage.
            if (this.signInType === 'cart') {
              this.route.navigate(['/cart']); // if queryParams if from cart navigate to cart
            } else if (this.signInType === 'cartAddress') {
              this.route.navigate(['/cart/deliveryAddress']); // if queryParams if from buyNow navigate to cartAddress
            } else {
              this.getCartCount();
              this.route.navigate(['/home']); // if queryParams if empty navigate to home
            }
          }
        },
        (err) => {
          if (err?.error?.code === 400 || err?.status === 400) {
            this.toaster.error('Invalid Credentials');
          }
        }
      );
    }
  }

  getCartCount(): void {
    this.apiService.totalItemsInCart();
  }

  // function to signUp
  signUp(): void {
    if (this.signInType === 'cart') {
      this.route.navigate(['/sign-up'], { queryParams: { origin: 'cart' } }); // navigate to signUp with queryParams 'cart'
    } else if (this.signInType === 'cartAddress') {
      this.route.navigate(['/sign-up'], {
        queryParams: { origin: 'cartAddress' },
      }); // navigate to signUp with queryParams 'cartAddress'
    } else {
      this.route.navigate(['/sign-up']); // navigate to signUp
    }
  }

  // function to navigate back
  goBack(): void {
    if (this.signInType === 'cart') {
      this.route.navigate(['/cart']);
    } else if (this.signInType === 'cartAddress') {
      this.location.back();
    } else {
      this.route.navigate(['/home']);
    }
  }
}
