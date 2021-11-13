import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaphilightModule } from 'ng-maphilight';
import { MainSectionComponent } from './main-section/main-section.component';
import { MultiPurposeComponent } from './multi-purpose/multi-purpose.component';
import { MultiPurposeRoutingModule } from './mutliPurpose-routing.modules';

@NgModule({
  declarations: [MainSectionComponent, MultiPurposeComponent],
  imports: [
    CommonModule,
    MaphilightModule,
    MultiPurposeRoutingModule
  ]
})
export class MultiPurposePumpsModule { }
