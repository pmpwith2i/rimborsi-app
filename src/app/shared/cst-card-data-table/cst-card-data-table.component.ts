import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CstCol} from '../cst-table/classes/cst-col';

@Component({
  selector: 'app-cst-card-data-table',
  templateUrl: './cst-card-data-table.component.html',
  styleUrls: ['./cst-card-data-table.component.css']
})
export class CstCardDataTableComponent implements OnInit {

  @Input() dataSource: any[];
  @Input() columns: CstCol[];

  @Output() showItemEvent = new EventEmitter<any>();
  @Output() deleteItemEvent = new EventEmitter<any>();
  constructor() {
  }

  ngOnInit(): void {
  }

  showFunction(anId: any): void{
    this.showItemEvent.emit(anId);
  }

  deleteFunction(anId: any):void {
    this.deleteItemEvent.emit(anId);
  }
}
