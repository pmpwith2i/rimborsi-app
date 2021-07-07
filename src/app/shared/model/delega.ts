export class Delega {
  id: number;
  fiscalCode: string;
  datoreLavoro: string;
  tipoDelega: string;
  name: string;
  dataInizio: Date;
  dataFine: Date;
  verificata: boolean;

  constructor(anObj: any) {
    this.id = anObj.id;

    this.fiscalCode = anObj.fiscalCode;
    this.datoreLavoro = anObj.datoreLavoro;
    this.tipoDelega = anObj.tipoDelega;
    this.name = anObj.name;
    this.dataInizio = anObj.dataInizio;
    this.dataFine = anObj.dataFine;
    this.verificata = anObj.verificata;
  }

  search(searchStr: string = ''): boolean {
    if (searchStr.length === 0) {
      return true;
    }

    if (this.fiscalCode.toLowerCase().includes(searchStr.toLowerCase())) {
      return true;
    }

    if (this.name.toLowerCase().includes(searchStr.toLowerCase())) {
      return true;
    }
    return false;
  }
}
