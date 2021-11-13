import { ChangeDetectorRef, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

declare var $: any; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  @Input() headerButton: boolean;
  @ViewChild('btnClose') btnClose: ElementRef;
  dealershipForm: FormGroup;
  cartItemsQuantity: number; // cart item quantity
  subscription: Subscription[] = []; // subscription of array type
  userName: string; // username to show on header

  constructor(private apiService: ApiService,private toasterService: ToastrService, private router: Router, private toaster: ToastrService,
              private authService: AuthService, private fb: FormBuilder, private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.authService.getCurrentUser(); // calling authService getCurrentUser function to get the username
    // subscribing the userName(behaviourSubject) to get username
    this.subscription.push(this.authService.userName.subscribe(res => {
      if (res !== '') {
        // split() method is used to split a string into an array of substrings and return a new array
        const uName = res.split(' ');
        this.userName = uName[0];
      } else {
        this.userName = res;
      }
    }));

    this.createDealershipForm();
    this.apiService.totalItemsInCart();  // calling apiService totalItemsIn Cart function to get the cart quantity
    this.getCartQuantity();
  }

  createDealershipForm(): void {
    this.dealershipForm = this.fb.group({
      company_name: new FormControl('', Validators.required),
      full_name: new FormControl('', [Validators.required, Validators.maxLength(15)]),
      email: new FormControl('', [Validators.pattern('^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$'), Validators.required]),
      number: new FormControl('', [Validators.pattern('[0-9 ]{10,12}'), Validators.required]),
      intrested_in: new FormControl('', Validators.required),
    });
  }

  onInputChange(validNumber): void {
    let maxLength = 12;
    if (validNumber.length >= maxLength) {
      this.dealershipForm.patchValue({
        phone: validNumber.substring(0, 12)
      });
    }
  }

  // function to get controls of address form
  get formControl(): any {
    return this.dealershipForm.controls;
  }

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

  // function to get cartValue(behavoiurSubject) by subscribing to it.
  getCartQuantity(): void {
    this.subscription.push(this.apiService.cartValue.subscribe(res => {
      this.cartItemsQuantity = res;
    }));
  }

  addDealer(form): void {
    if (form.invalid) {
      this.validateAllFields(form);  // if form in invalid then call validateAllfields function
    } else {
      console.log(form.value, 'dealer');
      const reqBody = this.dealershipForm.getRawValue();
      console.log('hello this is the enquiry form', reqBody);
      this.apiService.addDealer(reqBody).subscribe((res) => {
        this.toasterService.success('Add dealer successfully');
        $('#delarModal').modal('hide');
      });
    }
  }

  resetForm(): void{
    this.dealershipForm.reset();
    this.changeDetectorRef.detectChanges();
  }

  // function to navigate to sign-in component
  signIn(): void {
    this.router.navigate(['/sign-in']);
  }

  // function to navigate to sign-up component
  signUp(): void {
    this.router.navigate(['/sign-up']);
  }

  // function to navigate to cart component
  gotoCart(): void {
    this.router.navigate(['/cart']);
  }

  // to unsubscribe the subscriptions
  ngOnDestroy(): void {
    this.subscription.forEach(s => {
      if (s) {
        s.unsubscribe();
      }
    });
  }

}
