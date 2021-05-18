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

  @Output() showItemEvent = new EventEmitter<any>();
  @Output() deleteItemEvent = new EventEmitter<number>();
  @Output() filterEvent = new EventEmitter<any>();


  @Input() dataSource: any[];
  @Input() columns: CstCol[];
  @Input() filters: CstFilter[];
  @Input() search: string;

  searchFormControl = new FormControl('');

  expandFilters: boolean = true;

  filterList: CstFilter[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.searchFormControl.valueChanges.subscribe((newVal) => this.filterEvent.emit(newVal));
  }

  functionClickShow(anIndex: number): void {

  }

  functionClickDelete(anIndex: number): void {

  }

  outputFilter(aPropName: string, filterType: string, aValue: string): void {
    const aFilter = new CstFilter({propName: aPropName, type: filterType, value: aValue});

    const anIndex = this.filterList.indexOf(this.filterList.find(el => el.propName == aFilter.propName));
    if (0 <= anIndex) {
      this.filterList[anIndex] = aFilter;
    } else {
      this.filterList.push(aFilter);
    }

    this.filterEvent.next(this.filterList);
  }

  toggleFilter(): void {
    this.expandFilters = !this.expandFilters;
  }

  aFilterChanged(newVal: any): void {
    this.filterEvent.emit(this.searchFormControl.value);
  }
}
