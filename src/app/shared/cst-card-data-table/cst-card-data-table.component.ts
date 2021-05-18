import {Component, Input, OnInit} from '@angular/core';
import {CstCol} from '../cst-table/classes/cst-col';

@Component({
  selector: 'app-cst-card-data-table',
  templateUrl: './cst-card-data-table.component.html',
  styleUrls: ['./cst-card-data-table.component.css']
})
export class CstCardDataTableComponent implements OnInit {

  @Input() dataSource: any[];
  @Input() columns: CstCol[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
