export class CstCol {
  readonly name: string;
  readonly propName: string;
  readonly isFilterEnabled: boolean;
  readonly propType: 'string' | 'number' | 'boolean' | 'date';
  readonly colType: 'standard' | 'chips';
  pipe?: string;
  backgroundFunction: any;

  constructor(anObj: any) {
    this.name = anObj.name;
    this.propName = anObj.propName;
    this.isFilterEnabled = anObj.isFilterEnabled;
    this.propType = anObj.propType;
    this.colType = anObj.colType || 'standard';
    this.backgroundFunction = anObj.backgroundFunction || null;
    this.pipe = anObj.pipe;
  }
}
