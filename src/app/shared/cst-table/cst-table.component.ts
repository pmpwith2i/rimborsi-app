import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CstCol} from './classes/cst-col';
import {CstFilter} from './classes/cst-filter';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-cst-table',
  templateUrl: './cst-table.component.html',
  styleUrls: ['./cst-table.component.css']
})
export class CstTableComponent implements OnInit {

  @Output() showItemEvent = new EventEmitter<number>();
  @Output() deleteItemEvent = new EventEmitter<number>();


  @Input() dataSource: any[];
  @Input() columns: CstCol[];


  constructor() {
  }

  ngOnInit(): void {
  }

  clickShow(anId: number): void {
    this.showItemEvent.emit(anId);
  }

  functionClickDelete(anIndex: number): void {

  }

}
