export class DatiFinanziariPayload {
  id: number;
  idRichiesta: number;
  numeroGiornate: number;
  stipendioLordoGiorni: number;
  stipendioLordoEuro: number;
  rateo13Ore: number;
  rateo13Euro: number;
  rateo14Ore: number;
  rateo14Euro: number;
  rateoAltreOre: number;
  rateoAltreEuro: number;
  rateoPermessiOre: number;
  rateoPermessiEuro: number;
  rateoFerieOre: number;
  rateoFerieEuro: number;
  rateoFestivitaOre: number;
  rateoFestivitaEuro: number;
  rateoFestivita2Ore: number;
  rateoFestivita2Euro: number;


  constructor(anObj: any) {
    this.id = anObj.id;
    this.idRichiesta = anObj.idRichiesta;
    this.numeroGiornate = anObj.numeroGiornate;
    this.stipendioLordoGiorni = anObj.stipendioLordoGiorni;
    this.stipendioLordoEuro = anObj.stipendioLordoEuro;
    this.rateo13Ore = anObj.rateo13Ore;
    this.rateo13Euro = anObj.rateo13Euro;
    this.rateo14Ore = anObj.rateo14Ore;
    this.rateo14Euro = anObj.rateo14Euro;
    this.rateoAltreOre = anObj.rateoAltreOre;
    this.rateoAltreEuro = anObj.rateoAltreEuro;
    this.rateoPermessiOre = anObj.rateoPermessiOre;
    this.rateoPermessiEuro = anObj.rateoPermessiEuro;
    this.rateoFerieOre = anObj.rateoFerieOre;
    this.rateoFerieEuro = anObj.rateoFerieEuro;
    this.rateoFestivitaOre = anObj.rateoFestivitaOre;
    this.rateoFestivitaEuro = anObj.rateoFestivitaEuro;
    this.rateoFestivita2Ore = anObj.rateoFestivita2Ore;
    this.rateoFestivita2Euro = anObj.rateoFestivita2Euro;
  }
}
