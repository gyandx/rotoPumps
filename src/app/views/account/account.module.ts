import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DirectivesModule } from 'src/app/directives/directives.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AccountRoutingModule } from './account-routing.module';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';

@NgModule({
  declarations: [SignInComponent, SignUpComponent, ForgetPasswordComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AccountRoutingModule,
    DirectivesModule
  ]
})
export class AccountModule { }
