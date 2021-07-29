import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'tipoPagamento'})
export class TipoPagamentoPipe implements PipeTransform {
  transform(value: string): string {
    if (value == 'ACCR') {
      return 'Accredito su C/C bancario';
    }
  }
}
