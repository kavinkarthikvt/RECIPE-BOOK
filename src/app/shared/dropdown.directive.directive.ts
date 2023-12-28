import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdownDirective]'
})
export class DropdownDirectiveDirective {
  @HostBinding('class.open') isopen=false;

  @HostListener('click') toggleOpen(){
    this.isopen=!this.isopen
  }

  

}
