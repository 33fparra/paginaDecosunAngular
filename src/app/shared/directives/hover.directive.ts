import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ccHover]'
})
export class HoverDirective {
  @HostBinding('class.hovering') private ishovering: boolean = false;
  constructor() { }
    
    @HostListener('mouseover') onMouseOver() {
      this.ishovering = true;
    }
  
    @HostListener('mouseout') onMouseOut() {
      this.ishovering = false;
    }
}
