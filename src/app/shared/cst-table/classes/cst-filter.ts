export class CstFilter {
  readonly propName;
  readonly name;
  readonly type: 'select' | 'date';
  readonly params;
  readonly iconName;
  value;

  constructor(anObj: any) {
    this.propName = anObj.propName;
    this.type = anObj.type;
    this.value = anObj.value;
    this.name = anObj.name;
    this.params = anObj.params;
    this.iconName = anObj.filterIcon;
  }
}
