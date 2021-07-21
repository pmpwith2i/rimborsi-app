import {Component, OnInit} from '@angular/core';
import {SidebarRoute} from '../shared/model/route';
import {getIstruttoreSidebar} from '../config/constants';

@Component({
  selector: 'app-istruttore',
  templateUrl: './istruttore.component.html',
  styleUrls: ['./istruttore.component.css']
})
export class IstruttoreComponent implements OnInit {

  sidebarRoutes: SidebarRoute[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.sidebarRoutes = getIstruttoreSidebar();
  }

}
