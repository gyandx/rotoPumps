import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MainSectionComponent } from './main-section/main-section.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MyAddressComponent } from './my-address/my-address.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { DirectivesModule } from 'src/app/directives/directives.module';
import { ProfileRoutingModule } from './profile-routing.module';

@NgModule({
  declarations: [MainSectionComponent, MyProfileComponent, MyAddressComponent, MyOrdersComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DirectivesModule,
    ProfileRoutingModule,
    DirectivesModule
  ]
})
export class ProfileModule { }
