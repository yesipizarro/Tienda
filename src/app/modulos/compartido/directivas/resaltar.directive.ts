import { AfterContentChecked, Directive, DoCheck, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appErrorTooltip]'
})
export class ErrorTooltipDirective implements OnInit, DoCheck {
  @Input() parent: string = '';
  bounding: DOMRect;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.calcularPosicion();
  }

  ngDoCheck() {
    this.calcularPosicion()
  }

  calcularPosicion() {
    const bounding = document.getElementById(this.parent)?.getBoundingClientRect()!;
    if (bounding.top === this.bounding?.top && bounding.left === this.bounding?.left) return;
    this.bounding = bounding;
    this.renderer.addClass(this.el.nativeElement, 'alerta');
    this.renderer.setStyle(this.el.nativeElement, 'top', `${this.bounding.top}px`);
    this.renderer.setStyle(this.el.nativeElement, 'left', `${this.bounding.left + this.bounding.width + 10}px`);
  }
}
