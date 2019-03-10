import { Directive, HostBinding, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appCampo]'
})
export class CampoDirective implements OnInit {

  @HostBinding('style.backgroundColor') corFundo: string;

  constructor() { }

  ngOnInit() {
    this.corFundo = 'white';
  }

  @HostListener('mouseover') passarMouse() {
    this.corFundo = 'aliceBlue';
  }

  @HostListener('mouseout') retirarMouse() {
    this.corFundo = 'white';
  }



}
