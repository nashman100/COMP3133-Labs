import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputFormat]',
  standalone: true,
})
export class InputFormatDirective {
  constructor(private el: ElementRef) {}

  @HostListener('blur') onBlur(): void {
    const inputValue = this.el.nativeElement.value;
    this.el.nativeElement.value = inputValue.toUpperCase();
  }
}
