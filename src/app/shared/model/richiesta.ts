export class Richiesta {
  id: number;
  stato: number;
  codice: number;
  volontario: string;
  datoreLavoro: string;
  tipoDatore: string;
  evento: string;
  dataInizio: Date;
  dataFine: Date;
  giorni: number;
  importo: number;

  constructor(anObj: any) {
    this.id = anObj.id;
    this.dataInizio = anObj.dataInizio;
    this.codice = anObj.codice;
    this.dataFine = anObj.dataFine;
    this.stato = anObj.stato;
    this.evento = anObj.evento;
    this.giorni = anObj.giorni;
    this.importo = anObj.importo;
    this.volontario = anObj.volontario;
    this.datoreLavoro = anObj.datoreLavoro;
    this.tipoDatore = anObj.tipoDatore;
  }

  search(searchStr: string = ''): boolean {
    if (searchStr.length === 0) {
      return true;
    }

    if (this.volontario.toLowerCase().includes(searchStr.toLowerCase())) {
      return true;
    }

    if (this.datoreLavoro.toLowerCase().includes(searchStr.toLowerCase())) {
      return true;
    }
    return false;
  }
}
