import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appNumOnly]'
})
export class NumonlyDirective {

  constructor(private el: ElementRef) { }

  // hostlistener that on input change only to return only numbers.
  @HostListener('input', ['$event']) onInputChange(event): void {
    const initalValue = this.el.nativeElement.value;
    this.el.nativeElement.value = initalValue.replace(/[^0-9]*/g, '');
    if ( initalValue !== this.el.nativeElement.value) {
      event.stopPropagation();
    }
  }
}
