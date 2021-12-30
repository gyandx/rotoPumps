import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  personalDataForm: FormGroup; // personalData form of type formGroup
  passwordUpdateForm: FormGroup; // passwordUpdate form of type formGroup
  userId: number; // used to store userId
  userData: any; // used to store userData

  constructor(private fb: FormBuilder, private toaster: ToastrService, private apiService: ApiService,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    this.createPersonalDataForm();
    this.createPasswordUpdateForm();
    if (sessionStorage.getItem('id')) {
      this.userId = +window.atob(sessionStorage.getItem('id'));
      this.getUserDetails(this.userId);
    }
  }

  // function to getUSerDetails by calling userDetails api
  getUserDetails(userId): void {
    this.apiService.getUserDetails(userId).subscribe(res => {
      if (res[`code`] === 200) {
        this.userData = res[`details`];
        this.patchPersonalDataForm();
      }
    });
  }


  // function to create personalDataForm
  createPersonalDataForm(): void {
    this.personalDataForm = this.fb.group({
      name: new FormControl('', [Validators.required, Validators.maxLength(15)]),
      email: new FormControl('', [Validators.pattern('^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$'), Validators.required]),
    });
  }

  // function to create passwordForm
  createPasswordUpdateForm(): void {
    this.passwordUpdateForm = this.fb.group({
      oldPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  // function to get controls of personalData form
  get formControl(): any {
    return this.personalDataForm.controls;
  }

   // function to get controls of passwordUpdate form
  get formControls(): any {
    return this.passwordUpdateForm.controls;
  }

  // function to set Personal data
  patchPersonalDataForm(): void {
    this.personalDataForm.patchValue({
      name: this.userData.name,
      email: this.userData.email
    });
  }

  // function to submit personalData form
  submitPersonalDataForm(form): void {
    if (form.invalid) { // condition checking if form is valid or not
      this.validateAllFields(form, 'profileForm'); // if form in invalid then call validateAllfields function
    } else {
      form.value.id = this.userId;
      this.apiService.updatePersonalDetails(form.value).subscribe(res => {
        if (res[`code`] === 200){
          sessionStorage.setItem('currentUser', window.btoa(res[`user`][0].name)); /* setting username from updateApi to override
                                                                        previous userName in sessionStorage */
          this.authService.getCurrentUser(); // calling authService getCurrentUser function
          this.toaster.success(res[`message`]);
        }
      }, err => {
        this.toaster.error(err?.error?.message || err?.message);
      });
    }
  }

  // function to submit passwordData form
  submitPasswordUpdateForm(form): void {
    if (form.invalid) { // condition checking if form is valid or not
      this.validateAllFields(form, 'passwordForm'); // if form in invalid then call validateAllfields function
    } else {
      if (form.value.password === form.value.confirmPassword) { // comparing the password and confirmPassword Values
        form.value.user_id = this.userId;
        this.apiService.updatePassword(form.value).subscribe(res => {
          if (res[`code`] === 200) {
            this.toaster.success(res[`message`]);
            form.reset(); // function to reset form
          }
        }, err => {
          this.toaster.error('Current Password is incorrect');
        });
      } else {
        this.toaster.error('Password Didn\'t Match...Please Try Again!!!');
      }
    }
  }

  // function to validate all fields according to formType
  validateAllFields(formGroup: FormGroup, formType: string): void {
    if (formType === 'passwordForm') {
      Object.keys(this.formControls).forEach(field => {
        const control = formGroup.get(field);
        if (control instanceof FormControl) {
          control.markAsTouched({ onlySelf: true });
        } else if (control instanceof FormGroup) {
          this.validateAllFields(control, formType);
        }
      });
    }else if (formType === 'profileForm'){
      Object.keys(this.formControl).forEach(field => {
        const control = formGroup.get(field);
        if (control instanceof FormControl){
          control.markAsTouched({onlySelf: true});
        }else if (control instanceof FormGroup){
          this.validateAllFields(control, formType);
        }
      });
    }
  }

}
