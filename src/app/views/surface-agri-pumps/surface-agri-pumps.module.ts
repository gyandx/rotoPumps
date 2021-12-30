import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainSectionComponent } from './main-section/main-section.component';
import { SurfaceAgriComponent } from './surface-agri/surface-agri.component';
import { MaphilightModule } from 'ng-maphilight';
import { SurfaceRoutingModule } from './surface-routing.modules';

@NgModule({
  declarations: [MainSectionComponent, SurfaceAgriComponent],
  imports: [
    CommonModule,
    MaphilightModule,
    SurfaceRoutingModule,
  ]
})
export class SurfaceAgriPumpsModule { }
