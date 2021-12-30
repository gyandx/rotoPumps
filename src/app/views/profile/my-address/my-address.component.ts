import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-my-address',
  templateUrl: './my-address.component.html',
  styleUrls: ['./my-address.component.css']
})
export class MyAddressComponent implements OnInit, OnDestroy {

  subscribe: Subscription[] = []; // subscribe used to store subscription
  addressList = []; // used to assign address list of user
  addressForm: FormGroup; // address form of type formGroup
  cityInfo: any[] = ['']; // used to store city data
  stateInfo: any[] = []; // used to store state data
  countryInfo: any[] = []; // used to store country data
  addressId: string; // used to store addressId
  addNewAddress: boolean = false; // use to check to addNew address or not
  modalText: string;
  constructor(private apiService: ApiService, private toaster: ToastrService, private fb: FormBuilder) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('id')) {
      this.getAddressList(window.atob(sessionStorage.getItem('id')));
    }
    this.getCountries();
    this.createAddressForm();
  }

  // function to create addressForm
  createAddressForm(): void {
    this.addressForm = this.fb.group({
      title: new FormControl('', Validators.required),
      first_name: new FormControl('', Validators.required),
      middle_name: new FormControl(''),
      last_name: new FormControl('', Validators.required),
      phone: new FormControl('', [Validators.pattern('[0-9 ]{10,12}'), Validators.required]),
      house_no: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      pincode: new FormControl('', [Validators.pattern('[0-9 ]{4}'), Validators.required]),
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

  // function to getAddressList by passing userId to getAllAddress function
  getAddressList(userId): void {
    const userData = {
      user_id: +userId
    };
    this.subscribe.push(this.apiService.getAllAddress(userData).subscribe(res => {
      if (res[`code`] === 200) {
        this.addressList = res[`address`]; // assigning response to addressList array
      }
    }, err => {
      this.toaster.error(err?.error?.message || err?.message);
    }));
  }

  // function to get controls of address form
  get formControl(): any {
    return this.addressForm.controls;
  }

  onInputChange(validNumber, type): void{
    let maxLength = 0;
    if (type === 'phone'){
      maxLength = 12;
      if (validNumber.length >= maxLength){
        this.addressForm.patchValue({
          phone: validNumber.substring(0, 12)
        });
      }
    }else if (type === 'zip'){
      maxLength = 4;
      if (validNumber.length >= maxLength){
        this.addressForm.patchValue({
          pincode: validNumber.substring(0, 4)
        });
      }
    }
  }

  // function to get countryName and statesList according to countryValue
  onChangeCountry(countryValue): void {
    this.cityInfo = [];
    const countryIndex = this.countryInfo.findIndex(res => res.name === countryValue);
    this.stateInfo = this.countryInfo[countryIndex].states;
    if (this.addressForm.controls[`state`].value !== null){
      this.addressForm.controls[`state`].setValue(null, {onlySelf: true});
      this.addressForm.controls[`city`].setValue(null, {onlySelf: true});
    }
  }

  onChangeState(stateValue): void {
     const stateIndex = this.stateInfo.findIndex(res => res.name === stateValue);
     this.cityInfo = this.stateInfo[stateIndex].cities;
  }

  // function to open popUp Modal according to modalType
  openModal(modalType: string, addressId: string): void {
    if (modalType === 'delete') {
      const show = document.getElementById('deleteModal') as HTMLElement;
      show.classList.add('in');
      show.style.display = 'block';
      this.addressId = addressId;
    }
    else if (modalType === 'update') {
      this.addressId = addressId;
      this.modalText = 'Edit address';
      this.addressList.forEach(eachAddress => {
        if (eachAddress.id === this.addressId) {
          this.patchAddressForm(eachAddress);
        }
      });
      this.showModal();
    }
    else if (modalType === 'add'){
      this.addNewAddress = true;
      this.modalText = 'Add address';
      this.getCountries();
      this.addressForm.reset();
      this.showModal();
    }
  }

  // function to open modal
  showModal(): void{
    const show = document.getElementById('changeModal') as HTMLElement;
    show.classList.add('in');
    show.style.display = 'block';
  }

  // function to close modal
  closeModal(modalType?: string): void {
    if (modalType === 'delete') {
      const show = document.getElementById('deleteModal') as HTMLElement;
      show.classList.remove('in');
      show.style.display = 'none';
    }
    else if (modalType === 'update') {
      const show = document.getElementById('changeModal') as HTMLElement;
      show.classList.remove('in');
      show.style.display = 'none';
      this.addNewAddress = false;
    }
    else if (modalType === 'add') {
      const show = document.getElementById('changeModal') as HTMLElement;
      show.classList.remove('in');
      show.style.display = 'none';
      this.addNewAddress = false;
    }else {
      const show = document.getElementById('changeModal') as HTMLElement;
      show.classList.remove('in');
      show.style.display = 'none';
    }
  }

  // assign values from addressList to form fields
  patchAddressForm(addressData): void {
    // findIndex() method returns the index of the first element in the array that satisfies the condition
    const countryIndex = this.countryInfo.findIndex(res => res.name === addressData?.country);

    this.stateInfo = this.countryInfo[countryIndex].states;
    // findIndex() method returns the index of the first element in the array that satisfies the condition
    const stateIndex = this.stateInfo.findIndex(res => res.name === addressData?.state);
    this.cityInfo = this.stateInfo[stateIndex].cities;

    this.addressForm.patchValue({
      title: addressData?.title,
      first_name: addressData?.first_name,
      middle_name: addressData?.middle_name,
      last_name: addressData?.last_name,
      phone: addressData?.phone,
      house_no: addressData?.house_no,
      city: addressData?.city,
      state: addressData?.state,
      pincode: addressData?.pincode,
      country: addressData?.country
    });
  }

  // function to delete address by passing addressId in deleteAddress api
  deleteAddress(): void {
    this.subscribe.push(this.apiService.deleteAddress(this.addressId).subscribe(res => {
      if (res[`code`] === 200) {
        this.toaster.success(res[`message`]);
        // this.getAddressList(window.atob(localStorage.getItem('id')));
        this.getAddressList(window.atob(sessionStorage.getItem('id')));
        this.closeModal('delete');
      }
    }));
  }

  // function to validate all fields according to formType
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


  // function to update and add new address
  updateAddress(form): void {
    if (form.invalid) {
      this.validateAllFields(form);  // if form in invalid then call validateAllfields function
    } else {
      let countryName;
      if (form?.value?.country === null) {
        this.addressForm.controls[`country`].setValue('Australia', {onlySelf: true});
        countryName = 'Australia';
      }else {
        countryName = form.value.country;
      }

      const addressUpdateData = {
        user_id: window.atob(sessionStorage.getItem('id')),
        title: form.value.title,
        first_name: form.value.first_name,
        middle_name: form.value.middle_name,
        last_name: form.value.last_name,
        phone: form.value.phone,
        pincode: form.value.pincode,
        city: form.value.city,
        house_no: form.value.house_no,
        state: form.value.state,
        country: countryName
      };
      if (this.addNewAddress){ // checking address type is new or not
        this.apiService.addAddress(addressUpdateData).subscribe(res => {
          if (res[`code`] === 200) {
            this.toaster.success(res[`message`]);
            this.getAddressList(window.atob(sessionStorage.getItem('id')));
            this.closeModal('update');
            this.addNewAddress = false;
          }
        });
      }else{
        addressUpdateData[`id`] = this.addressId;
        if (this.addressForm.dirty){
          this.apiService.updateAddress(addressUpdateData).subscribe(res => {
            if (res[`code`] === 200) {
              this.toaster.success(res[`message`]);
              this.getAddressList(window.atob(sessionStorage.getItem('id')));
              this.closeModal('update');
            }
          });
        }else {
          this.toaster.error('Nothing changed to update');
        }
      }
    }
  }

  // to unsubscribe the subscriptions
  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
    this.subscribe.forEach(sub => {
      if (sub) {
        sub.unsubscribe();
      }
    });
  }


}
