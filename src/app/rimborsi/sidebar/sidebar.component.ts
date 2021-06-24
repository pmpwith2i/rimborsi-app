import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LOGO_PATH} from '../../../environments/environment';
import {SidebarRoute} from '../../shared/model/route';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  readonly logoPath: string = LOGO_PATH;
  public sidebarRoutes: SidebarRoute[] = [];

  @Output() linkSelected = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
    this.sidebarRoutes.push(new SidebarRoute({itemLink: 'dashboard', linkName: 'Dashboard', iconName: 'home'}));
    this.sidebarRoutes.push(new SidebarRoute({itemLink: 'user-info', linkName: 'I miei dati', iconName: 'person'}));
    this.sidebarRoutes.push(new SidebarRoute({itemLink: 'richieste', linkName: 'Richieste', iconName: 'info'}));
    this.sidebarRoutes.push(new SidebarRoute({itemLink: 'deleghe', linkName: 'Deleghe', iconName: 'description'}));
    this.sidebarRoutes.push(new SidebarRoute({itemLink: 'notifiche', linkName: 'Notifiche', iconName: 'notifications'}));
  }

  selectLink(): void {
    this.linkSelected.emit(true);
  }
}
