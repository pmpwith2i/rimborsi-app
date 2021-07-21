import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LOGO_PATH} from '../../../environments/environment';
import {SidebarRoute} from '../model/route';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  readonly logoPath: string = LOGO_PATH;

  @Input()
  public sidebarRoutes: SidebarRoute[];

  @Output() linkSelected = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {}

  selectLink(): void {
    this.linkSelected.emit(true);
  }

}
