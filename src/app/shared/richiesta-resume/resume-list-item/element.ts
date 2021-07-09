export class ResumeItemElement {
  itemName: string;
  itemEl: string;
  itemSecondEl: string;

  constructor(anObj: any) {
    this.itemName = anObj.itemName;
    this.itemEl = anObj.itemEl;
    this.itemSecondEl = anObj.itemSecondEl;
  }
}
