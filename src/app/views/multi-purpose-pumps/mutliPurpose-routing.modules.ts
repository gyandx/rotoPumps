import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { BareShaftComponent } from '../bare-shaft/bare-shaft.component';
import { ClosedCoupleComponent } from '../closed-couple/closed-couple.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { MultiPurposeComponent } from './multi-purpose/multi-purpose.component';

const routes: Routes = [
  {path: '', component: MainSectionComponent, children: [
    {path: '', component: MultiPurposeComponent},
    {path: 'closedCouplePump/:id/:parentId', component: ClosedCoupleComponent},
    {path: 'closedCouplePump/:id/:parentId/:model/:type', component: ProductDetailsComponent},
    {path: 'bareShaftPump/:id/:parentId', component: BareShaftComponent},
    {path: 'bareShaftPump/:id/:parentId/:model/:type', component: ProductDetailsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MultiPurposeRoutingModule {}

