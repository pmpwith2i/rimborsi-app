import {Pipe, PipeTransform} from '@angular/core';
import {getStatoByNumber} from '../../config/richiestaConstants';

@Pipe({name: 'dinamycDataPipe'})
export class DinamycDataPipe implements PipeTransform {
  transform(value: any, modifier: string): string {
    if (modifier == 'statoRichiesta') {
      return getStatoByNumber(value);
    }
  }
}
