import { Component, OnInit } from "@angular/core";
import { ViewportScroller } from "@angular/common";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from "@angular/router";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"],
})
export class MainComponent implements OnInit {
  subscribe: Subscription[] = []; // subscribe used to store subscription
  enquiryForm: FormGroup; // address form of type formGroup
  cityInfo: any[] = [""]; // used to store city data
  stateInfo: any[] = []; // used to store state data
  countryInfo: any[] = []; // used to store country data
  pumpTypes = [
    { name: "Surface Agri Pumps" },
    { name: "Multipurpose Pumps" },
    { name: "Roto Spares" },
    { name: "Retrofit Spares" },
  ];

  constructor(private scroller: ViewportScroller,private apiService: ApiService,
     private fb: FormBuilder, private toasterService: ToastrService, private router: Router) {}

  ngOnInit(): void {
    this.getCountries();
    this.createEnquiryForm();
  }

  // function to create enquiryForm
  createEnquiryForm(): void {
    this.enquiryForm = this.fb.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.pattern('^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$'), Validators.required]),
      number: new FormControl('', [Validators.pattern('[0-9 ]{10,12}'), Validators.required]),
      message: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      product: new FormControl('', Validators.required),
      postal_code: new FormControl('', [Validators.pattern('[0-9 ]{4}'), Validators.required]),
      country: new FormControl('Australia')
    });
  }

  // function to getCountries from getCountryData function
  getCountries(): void {
    this.subscribe.push(this.apiService.getCountryData().subscribe(res => {
      if (res) {
        this.countryInfo = res[`countries`]; // assigning response to countryInfo array
        this.onChangeCountry('Australia');
      }
    }));
  }

  // function to get countryName and statesList according to countryValue
  onChangeCountry(countryValue): void {
    this.cityInfo = [];
    const countryIndex = this.countryInfo.findIndex(res => res.name === countryValue);
    this.stateInfo = this.countryInfo[countryIndex].states;
    if (this.enquiryForm.controls[`state`].value !== null) {
      this.enquiryForm.controls[`state`].setValue(null, { onlySelf: true });
      this.enquiryForm.controls[`city`].setValue(null, { onlySelf: true });
    }
  }

  onChangeState(stateValue): void {
    const stateIndex = this.stateInfo.findIndex(res => res.name === stateValue);
    this.cityInfo = this.stateInfo[stateIndex].cities;
  }

  onInputChange(validNumber, type): void {
    let maxLength = 0;
    if (type === 'phone') {
      maxLength = 12;
      if (validNumber.length >= maxLength) {
        this.enquiryForm.patchValue({
          phone: validNumber.substring(0, 12)
        });
      }
    } else if (type === 'zip') {
      maxLength = 4;
      if (validNumber.length >= maxLength) {
        this.enquiryForm.patchValue({
          pincode: validNumber.substring(0, 4)
        });
      }
    }
  }

  // function to get controls of address form
  get formControl(): any {
    return this.enquiryForm.controls;
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

  addEnquiry(form): void {
    if (form.invalid) {
      this.validateAllFields(form);
      // if form in invalid then call validateAllfields function
    } else {
      this.apiService.addEnquiry(form.value).subscribe((res) => {
        if (res[`return`]) {
          this.toasterService.success(res[`message`]);
          this.router.navigate(['/home']);
        }
      });
    }
  }

  scroll(): void {
    this.scroller.scrollToPosition([0, 0]);
  }
}
