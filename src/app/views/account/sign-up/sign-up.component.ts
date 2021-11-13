import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup; // signUpForm form of type formGroup
  signUpType: string; // to detect the type of signUp(from normal signUp or signUp from cart)

  constructor(private fb: FormBuilder, private apiService: ApiService, private toaster: ToastrService,
              private route: Router, private activatedRoute: ActivatedRoute, private authService: AuthService,
              private location: Location) { }

  ngOnInit(): void{
    this.activatedRoute.queryParams.subscribe(res => {
      this.signUpType = res.origin; // get the signUp type from queryParams
    });
    this.createSignUpForm();
  }

  // function to create signUp form
  createSignUpForm(): void{
    this.signUpForm = this.fb.group({
      name: new FormControl('', [Validators.required, Validators.maxLength(15)]),
      email: new FormControl('', [Validators.pattern('^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$'), Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirm_password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      companyName: new FormControl('', Validators.minLength(4)),
      userType: new FormControl('End User')
    });
  }

  // function to get controls of signUp form
  get formControl(): any{
    return this.signUpForm.controls;
  }

  // function to validate all fields of signUp form
  validateAllFields(formGroup: FormGroup): void {
    Object.keys(this.formControl).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFields(control);
      }
    });
  }

  // function to navigate back
  goBack(): void{
    if (this.signUpType === 'cart'){
      this.route.navigate(['/cart']);
    }else if (this.signUpType === 'cartAddress'){
      this.location.back();
    } else{
      this.route.navigate(['/home']);
    }
  }

  // function to submit signUp form
  submitSignUpForm(form): void{
    if (form.invalid){ // condition checking if form is valid or not
      this.validateAllFields(form); // if form in invalid then call validateAllfields function
    }else{
      if (form.value.password === form.value.confirm_password){ // condition for checking password and confirmPassword are same or not
        this.apiService.register(form.value).subscribe(res => {
          if (res[`code`] === 200){
            this.toaster.success(res[`message`]);
            const signInData = {
              email: form.value.email,
              password: form.value.password
            };
            this.signIn(signInData); // sign-in function for autoSignIn if registered successfully
          }
        }, error => {
          if (error?.status){
            this.toaster.error(error?.error?.message);
          }
        });
      }else if (form.value.password !== form.value.confirm_password){
        this.toaster.error('Password Not Matching!!! Try Again...');
      }
    }
  }

  // signIn function to call signIn api
  signIn(signInData): void{
    this.apiService.login(signInData).subscribe(res => {
      if (res[`code`] === 200){
        // if (localStorage.getItem(`id`) !== res[`user`].id){ /* if signIn successful then check the localStorage UserId and
        //                                                       response userId is same or not */
        //   localStorage.clear(); // if not same then clear localStorage
        // }
        // if (sessionStorage.getItem(`id`) !== res[`user`].id){ /* if signIn successful then check the sessionStorage UserId and
        //                                                       response userId is same or not */
        //   sessionStorage.clear(); // if not same then clear sessionStorage
        // }
        this.authService.loginData(res); // calling authService loginData to store info in localStorage.
        if (this.signUpType === 'cart'){
          this.route.navigate(['/cart']); // if queryParams if from cart navigate to cart
        }else if (this.signUpType === 'cartAddress'){
          this.route.navigate(['/cart/deliveryAddress']); // if queryParams if from buyNow navigate to cartAddress
        }else {
          this.route.navigate(['/home']);  // if queryParams if empty navigate to home
        }
      }
    });
  }

}
