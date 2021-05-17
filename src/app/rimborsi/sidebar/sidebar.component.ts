import {Component, OnInit} from '@angular/core';
import {LOGO_PATH} from '../../../environments/environment';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  readonly logoPath: string = LOGO_PATH;

  constructor() {
  }

  ngOnInit(): void {
  }

}
