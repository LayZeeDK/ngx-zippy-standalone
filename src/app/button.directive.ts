import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appButton]',
  standalone: true,
})
export class ButtonDirective {
  @Output()
  appClick = new EventEmitter<void>();

  @HostListener('click')
  onClick() {
    console.log('Click');
    this.appClick.emit();
  }
}
