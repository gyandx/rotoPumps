import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  forgotPasswordForm: FormGroup; // forgotPassword form of type formGroup

  constructor(private fb: FormBuilder, private apiService: ApiService, private toaster: ToastrService, private route: Router) { }

  ngOnInit(): void {
    this.createForgotPasswordForm();
  }

  // function to create forgotPassword form
  createForgotPasswordForm(): void{
    this.forgotPasswordForm = this.fb.group({
      email: new FormControl('', [Validators.pattern('^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$'), Validators.required])
    });
  }

  // function to get controls of forgotPassword form
  get formControl(): any {
    return this.forgotPasswordForm.controls;
  }

  // function to validate all fields of forgotPassword form
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

  // function to submit forgotPassword form
  submitForgotPasswordForm(form): void{
    if (form.invalid){ // condition checking if form is valid or not
      this.validateAllFields(form); // if form in invalid then call validateAllfields function
    }else{
      // calling forgotPassword api
      this.apiService.forgotPassword(form.value).subscribe(res => {
        if (res[`code`] === 200){
          this.route.navigate(['/sign-in']).then(() => {
            this.toaster.success(res[`message`]);
          });
        }else if (res[`code`] === 404) {
          this.toaster.error(res[`message`]);
        }
      });
    }
  }

}
