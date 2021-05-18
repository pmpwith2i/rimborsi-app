export class SidebarRoute {
  public linkName: string;
  public itemLink: string;
  public iconName: string;

  constructor (anObj : any) {
    this.linkName = anObj.linkName;
    this.itemLink = anObj.itemLink;
    this.iconName = anObj.iconName;
  }
}
