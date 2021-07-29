import {Directive, ElementRef, Input, OnChanges} from '@angular/core';
import {Stato} from '../../config/richiestaConstants';

@Directive({
  selector: '[appBackgroundStato]'
})
export class BackgroundStatoDirective implements OnChanges {

  @Input()
  statoRichiesta: number;

  constructor(private el: ElementRef) {
  }

  ngOnChanges(): void {
    if (this.statoRichiesta === Stato.INVIATA) {
      this.el.nativeElement.style.backgroundColor = '#396898';
    }

    if (this.statoRichiesta === Stato.SOSPESA) {
      this.el.nativeElement.style.backgroundColor = '#ffbc00';
    }

    if (this.statoRichiesta === Stato.PRESENTATA) {
      this.el.nativeElement.style.backgroundColor = '#25a996';
    }

    if (this.statoRichiesta === Stato.RESPINTA) {
      this.el.nativeElement.style.backgroundColor = 'red';
    }

    if (this.statoRichiesta === Stato.IN_LIQUIDAZIONE) {
      this.el.nativeElement.style.backgroundColor = 'bluegrey';
    }

  }

}
