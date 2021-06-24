export class Notifica {
  private id: number;
  private notifica: string;
  private volontario: string;
  private datoreLavoro: string;
  private tipoDatore: string;
  private evento: string;
  private dataInizio: Date;
  private dataFine: Date;
  private giorni: number;

  public constructor(anObj: any) {
    this.id = anObj.id;
    this.notifica = anObj.notifica;
    this.volontario = anObj.volontario;
    this.datoreLavoro = anObj.datoreLavoro;
    this.tipoDatore = anObj.tipoDatore;
    this.evento = anObj.evento;
    this.dataInizio = anObj.dataInizio;
    this.dataFine = anObj.dataFine;
    this.giorni = anObj.giorni;
  }
}
