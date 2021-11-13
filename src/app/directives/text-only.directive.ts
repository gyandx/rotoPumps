import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTextOnly]'
})
export class TextOnlyDirective {

  constructor(private el: ElementRef){}
  key;
  @HostListener('keydown', ['$event']) onKeydown(event: KeyboardEvent) {
    this.key = event.keyCode;
    // console.log(this.key);
    if ((this.key >= 15 && this.key <= 64 && this.key !== 32) || (this.key >= 123) || (this.key >= 96 && this.key <= 105)) {
      event.preventDefault();
    }
  }

  // @HostListener('input', ['$event']) onInputChange(event): void {
  //   const initalValue = this.el.nativeElement.value;
  //   this.el.nativeElement.value = initalValue.replace(/[^A-Za-z ]/g, '');
  //   if ( initalValue !== this.el.nativeElement.value) {
  //     event.stopPropagation();
  //   }
  // }

}
