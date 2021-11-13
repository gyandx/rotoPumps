import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainSectionComponent } from './main-section/main-section.component';
import { MyAddressComponent } from './my-address/my-address.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { MyProfileComponent } from './my-profile/my-profile.component';


const routes: Routes = [
  {
    path: 'account', component: MainSectionComponent, children: [
      { path: '', redirectTo: 'my-profile' },
      { path: 'my-profile', component: MyProfileComponent },
      { path: 'my-address', component: MyAddressComponent },
      { path: 'my-orders', component: MyOrdersComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProfileRoutingModule { }
