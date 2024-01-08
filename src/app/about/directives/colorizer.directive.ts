import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColorizer]',
})
export class ColorizerDirective {
  divElement: any;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    console.log(this.elementRef.nativeElement);
    // finding the element in which appColorizer is used
    this.divElement = this.elementRef.nativeElement;
    // adding styles in div
    this.renderer.setStyle(this.divElement, 'backgroundColor', 'red');
    this.renderer.setStyle(this.divElement, 'color', '#fff');
    this.renderer.setStyle(this.divElement, 'padding', '30px');
  }

  // If you want to handle events in directive -- learn @HostListener
  @HostListener('mouseover')
  handleMouseover() {
    this.renderer.setStyle(this.divElement, 'backgroundColor', 'yellow');
    this.renderer.setStyle(this.divElement, 'color', '#000');
  }

  @HostListener('mouseleave')
  handleMouseleave() {
    this.renderer.setStyle(this.divElement, 'backgroundColor', 'red');
    this.renderer.setStyle(this.divElement, 'color', '#fff');
  }
}
