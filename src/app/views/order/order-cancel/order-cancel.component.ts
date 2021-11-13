import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, FormBuilder , Validators } from '@angular/forms';

@Component({
  selector: 'app-order-cancel',
  templateUrl: './order-cancel.component.html',
  styleUrls: ['./order-cancel.component.css']
})
export class OrderCancelComponent implements OnInit {

  orderId: string; // used to store orderId
  orderCancelForm: FormGroup; // orderCancel form of type formGroup

  constructor(private activatedRoute: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(res => {
      if (res[`id`]) {
        this.orderId = res[`id`];
      }
    });
    this.createOrderCancelForm();
  }

  // function to get controls of address form
  get formControl(): any{
    return this.orderCancelForm.controls;
  }

  // function to create orderCancel form
  createOrderCancelForm(): void{
    this.orderCancelForm = this.fb.group({
      name: new FormControl('', [Validators.minLength(5), Validators.required]),
      email: new FormControl('', [Validators.pattern('^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$'), Validators.required]),
      phone: new FormControl('', [Validators.pattern('[0-9 ]{10}'), Validators.required]),
      reason: new FormControl('', Validators.required),
      message: new FormControl('')
    });
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

  // function to submit Cancel Form
  submitCancelForm(form): void{
    if (form.invalid){ // condition checking if form is valid or not
      this.validateAllFields(form); // if form in invalid then call validateAllfields function
    }else{
      console.log(form.value);
    }
  }

}
