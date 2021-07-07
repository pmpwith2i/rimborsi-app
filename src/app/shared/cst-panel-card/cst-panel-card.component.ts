import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cst-panel-card',
  templateUrl: './cst-panel-card.component.html',
  styleUrls: ['./cst-panel-card.component.css']
})
export class CstPanelCardComponent implements OnInit {
  @Input()
  cardTitle: string;

  constructor() { }

  ngOnInit(): void {
  }

}
