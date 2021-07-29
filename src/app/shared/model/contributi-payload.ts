export class ContributiPayload {
  id: number;
  idRichiesta: number;
  inpsPerc: number;
  inpsEuro: number;
  inailPerc: number;
  inailEuro: number;
  altriPerc: number;
  altriNome: string;
  altriEuro: number;
  tfrPerc: number;
  tfrEuro: number;


  constructor(anObj: any) {
    this.id = anObj.id;
    this.idRichiesta = anObj.idRichiesta;
    this.inpsPerc = anObj.inpsPerc;
    this.inpsEuro = anObj.inpsEuro;
    this.inailPerc = anObj.inailPerc;
    this.inailEuro = anObj.inailEuro;
    this.altriPerc = anObj.altriPerc;
    this.altriNome = anObj.altriNome;
    this.altriEuro = anObj.altriEuro;
    this.tfrPerc = anObj.tfrPerc;
    this.tfrEuro = anObj.tfrEuro;
  }
}
