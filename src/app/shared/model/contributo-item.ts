export class ContributoItem {
  name: string;
  amount: number;
  tot: number;

  public constructor(anObj: any) {
    this.name = anObj.name;
    this.amount = anObj.amount;
    this.tot = anObj.tot;
  }

}
