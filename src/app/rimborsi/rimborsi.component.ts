import {Component, OnInit} from '@angular/core';
import {getVolontarioRoutesSidebar} from '../config/constants';
import {SidebarRoute} from '../shared/model/route';

@Component({
  selector: 'app-rimborsi',
  templateUrl: './rimborsi.component.html',
  styleUrls: ['./rimborsi.component.css']
})
export class RimborsiComponent implements OnInit {

  sidebarRoutes: SidebarRoute[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.sidebarRoutes = getVolontarioRoutesSidebar();
  }

}
