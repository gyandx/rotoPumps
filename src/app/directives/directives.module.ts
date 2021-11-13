import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumonlyDirective } from './number-only/numonly.directive';
import { TextOnlyDirective } from './text-only.directive';

@NgModule({
  declarations: [NumonlyDirective, TextOnlyDirective],
  imports: [
    CommonModule
  ],
  exports: [NumonlyDirective, TextOnlyDirective]
})
export class DirectivesModule { }
