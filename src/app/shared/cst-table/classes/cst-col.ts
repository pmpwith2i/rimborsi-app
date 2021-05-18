export class CstCol {
  readonly name: string;
  readonly propName: string;
  readonly isFilterEnabled: boolean;
  readonly propType: string;
  readonly colType: 'standard' | 'chips';
  backgroundFunction: any;

  constructor(anObj: any) {
    this.name = anObj.name;
    this.propName = anObj.propName;
    this.isFilterEnabled = anObj.isFilterEnabled;
    this.propType = anObj.propType;
    this.colType = anObj.colType || 'standard';
    if (anObj.funcValueParams) {
      this.backgroundFunction = anObj.backgroundFunction;
    }
  }
}
