import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-panel-right',
  templateUrl: './panel-right.component.html',
  styleUrls: ['./panel-right.component.css']
})
export class PanelRightComponent implements OnInit {
  @Input()
  panelTitle: string;

  constructor() { }

  ngOnInit(): void {
  }

}
