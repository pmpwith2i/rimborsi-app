import {Component, EventEmitter, Inject, Input, LOCALE_ID, OnInit, Output} from '@angular/core';
import {CstCol} from './classes/cst-col';
import {formatDate} from '@angular/common';

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


  constructor(@Inject(LOCALE_ID) private locale: string) {
  }

  ngOnInit(): void {
  }

  clickShow(anId: number): void {
    this.showItemEvent.emit(anId);
  }

  functionClickDelete(anIndex: number): void {

  }

  colText(col: CstCol, item: any): string {
    if (col.propType === 'date') {
      return formatDate(item[col.propName], 'medium', this.locale);
    }

    if (col.propType === 'boolean') {
      return item[col.propName] === true ? 'Si' : 'No';
    }

    return item[col.propName];
  }
}
