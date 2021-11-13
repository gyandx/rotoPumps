import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService, private toaster: ToastrService, private route: Router) { }

  ngOnInit(): void {
    this.createContactForm();
  }

  createContactForm(): void{
    this.contactForm = this.fb.group({
      name: new FormControl('', [Validators.required, Validators.maxLength(15)]),
      email: new FormControl('', [Validators.pattern('^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$'), Validators.required]),
      message: new FormControl('', Validators.required)
    });
  }

  get formControl(): any {
    return this.contactForm.controls;
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

  submitContactForm(form): void{
    if (form.invalid) { // condition checking if form is valid or not
      this.validateAllFields(form); // if form in invalid then call validateAllfields function
    }
    else{
      // console.log(form.value);
      this.apiService.contactUs(form.value).subscribe(res => {
        if ( res[`code`] === 200){
          this.toaster.success(res[`msg`]);
          this.route.navigate(['/home']);
        }else{
          this.formControl.reset();
        }
      });
    }
  }

}
