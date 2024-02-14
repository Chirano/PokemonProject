import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColorByType]'
})
export class ColorByTypeDirective implements OnInit {
  @Input('appTypeBackground') weight?: number;
  constructor(private el: ElementRef, private renderer: Renderer2) { }

 ngOnInit() {
    let background;
    if (this.weight !== undefined && this.weight !== null) {
      if (this.weight <= 10) {
        background = "#CD7F32";
      }
      else if (this.weight < 70) {
        background = "#BCC6CC";
      }
      else {
        background = "#FFD700"
      }
    }
      else {
        background = "gray";
      }
      this.renderer.setStyle(this.el.nativeElement, 'color', background);
    }
  }

