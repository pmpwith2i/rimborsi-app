export class History {
  data: Date;
  motivo: string;
  nota: string;

  constructor(anObj: any) {
    this.data = anObj.data;
    this.motivo = anObj.motivo;
    this.nota = anObj.nota;
  }
}
