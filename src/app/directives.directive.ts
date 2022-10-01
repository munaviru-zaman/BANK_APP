import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDirectives]',
})
export class DirectivesDirective {
  constructor(private ef: ElementRef) {
    console.log(ef);
    ef.nativeElement.style.backgroundColor = '#562aad';
  }
}
