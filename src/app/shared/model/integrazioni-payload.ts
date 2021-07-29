import {AllegatoPayload} from './allegato-payload';

export class IntegrazioniPayload {
  id: number;
  nota: string;
  allegato: AllegatoPayload;


  constructor(anObj: any) {
    this.id = anObj.id;
    this.nota = anObj.nota;
    this.allegato = anObj.allegato;
  }

  setAllegato(anObj: any): void {
    this.allegato = new AllegatoPayload(anObj);
  }
}
