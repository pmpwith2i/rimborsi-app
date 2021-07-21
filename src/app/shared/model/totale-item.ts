export class TotaleItem {
  name: string;
  amount: number;

  public constructor(anObj: any) {
    this.name = anObj.name;
    this.amount = anObj.amount;
  }

}
