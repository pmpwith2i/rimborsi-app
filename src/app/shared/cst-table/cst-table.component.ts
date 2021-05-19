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
  @Output() filterEvent = new EventEmitter<any>();


  @Input() dataSource: any[];
  @Input() columns: CstCol[];
  @Input() filters: CstFilter[];
  @Input() search: string;

  searchFormControl = new FormControl('');

  expandFilters: boolean = true;

  constructor() {
  }

  ngOnInit(): void {
    this.searchFormControl.valueChanges.subscribe((newVal) => this.filterEvent.emit(newVal));
  }

  clickShow(anId: number): void {
    this.showItemEvent.emit(anId);
  }

  functionClickDelete(anIndex: number): void {

  }

  toggleFilter(): void {
    this.expandFilters = !this.expandFilters;
  }

  aFilterChanged(newVal: any): void {
    this.emitFilterEvent();
  }

  clearFilter(): void {
    this.searchFormControl.setValue('');
    this.filters.forEach(el => el.value = null);
    this.emitFilterEvent();
  }

  private emitFilterEvent(): void{
    this.filterEvent.emit(this.searchFormControl.value);
  }
}
