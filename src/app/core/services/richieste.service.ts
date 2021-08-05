import {Injectable} from '@angular/core';
import {ApiEndpointsService} from './api-endpoints.service';
import {ApiHttpService} from './api-http.service';
import {Giornata} from '../../shared/model/giornata';

@Injectable()
export class RichiesteService {
  jsonRichieste: any;

  constructor(
    private apiHttpService: ApiHttpService,
    private apiEndpointsService: ApiEndpointsService
  ) {
  }

  setRichiesteCache(aJson: any): void {
    this.jsonRichieste = aJson;
  }

  getAllRichieste(): any {
    return this.apiHttpService
      .get(this.apiEndpointsService.getRichiesteEndPoint());
  }

  getRichiesta(anId: number): any {
    return this.apiHttpService.get(this.apiEndpointsService.getRichiestaEndPoint(anId));
  }

  getStoricoRichiesta(richiestaId: number): any {
    return this.apiHttpService.get(this.apiEndpointsService.getStoricoEndpoint(richiestaId));
  }

  getScheda(anId: number): any {
    return this.apiHttpService.get(this.apiEndpointsService.getSchedaEndPoint(anId));
  }

  getGiornateDisponibili(codiciAttestato: string[]): Giornata[] {
    const obj = [{id: 1, giorno: new Date(), codiceEvento: 'AJHJKKLO', oreAssenza: 8},
      {id: 2, giorno: new Date('10/10/2021'), codiceEvento: 'ANCJHLIU', oreAssenza: 8, selected: true},
      {id: 3, giorno: new Date('11/10/2021'), codiceEvento: 'ANCJHLIU', oreAssenza: 8},
      {id: 4, giorno: new Date('12/10/2021'), codiceEvento: 'ANCJHLIU', oreAssenza: 8, selected: true},
      {id: 4, giorno: new Date('12/10/2021'), codiceEvento: 'ANCJHLIU', oreAssenza: 8},
      {id: 4, giorno: new Date('12/10/2021'), codiceEvento: 'ANCJHLIU', oreAssenza: 8},
      {id: 4, giorno: new Date('12/10/2021'), codiceEvento: 'ANCJHLIU', oreAssenza: 8},
      {id: 4, giorno: new Date('12/10/2021'), codiceEvento: 'ANCJHLIU', oreAssenza: 8},
      {id: 4, giorno: new Date('12/10/2021'), codiceEvento: 'ANCJHLIU', oreAssenza: 8},
      {id: 4, giorno: new Date('12/10/2021'), codiceEvento: 'ANCJHLIU', oreAssenza: 8},
      {id: 4, giorno: new Date('12/10/2021'), codiceEvento: 'ANCJHLIU', oreAssenza: 8},
      {id: 4, giorno: new Date('12/10/2021'), codiceEvento: 'ANCJHLIU', oreAssenza: 8}];
    const datasource: Giornata[] = [];
    obj.forEach(el => {
      datasource.push(new Giornata(el));
    });
    return datasource;
  }

  setStatoRichiesta(anId: number, aState: number): any {
    return this.apiHttpService.patch(this.apiEndpointsService.getSetStatoEndPoint(anId, aState), {});
  }

}
