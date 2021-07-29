export class AllegatoPayload {
  name: string;
  link: string;
  date: Date;


  constructor(anObj: any) {
    this.name = anObj.nome;
    this.link = anObj.link;
    this.date = anObj.date;
  }
}
