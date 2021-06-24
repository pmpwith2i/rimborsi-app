export class Giornata {
  id: number;
  giorno: Date;
  codiceEvento: string;
  oreAssenza: number;
  selected: boolean;

  constructor(anObj: any) {
    this.id = anObj.id;
    this.giorno = anObj.giorno;
    this.codiceEvento = anObj.codiceEvento;
    this.oreAssenza = anObj.oreAssenza;
    this.selected = anObj.selected;
  }
}
