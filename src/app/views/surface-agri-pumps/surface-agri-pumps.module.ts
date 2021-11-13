import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainSectionComponent } from './main-section/main-section.component';
import { SurfaceAgriComponent } from './surface-agri/surface-agri.component';
import { MaphilightModule } from 'ng-maphilight';
import { SurfaceRoutingModule } from './surface-routing.modules';

// import { ClosedCoupleComponent } from '../closed-couple/closed-couple.component';
// import { BareShaftComponent } from '../bare-shaft/bare-shaft.component';

@NgModule({
  declarations: [MainSectionComponent, SurfaceAgriComponent],
  imports: [
    CommonModule,
    MaphilightModule,
    SurfaceRoutingModule,
  ]
})
export class SurfaceAgriPumpsModule { }
