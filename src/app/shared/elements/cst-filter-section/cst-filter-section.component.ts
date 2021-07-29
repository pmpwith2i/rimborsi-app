import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CstFilter} from '../cst-table/classes/cst-filter';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-cst-filter-section',
  templateUrl: './cst-filter-section.component.html',
  styleUrls: ['./cst-filter-section.component.css']
})
export class CstFilterSectionComponent implements OnInit {

  @Output() filterEvent = new EventEmitter<any>();
  @Input() filters: CstFilter[];
  @Input() search: string;

  searchFormControl = new FormControl('');

  expandFilters = true;

  constructor() {
  }

  ngOnInit(): void {
    this.searchFormControl.valueChanges.subscribe((newVal) => this.filterEvent.emit(newVal));
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

  private emitFilterEvent(): void {
    this.filterEvent.emit(this.searchFormControl.value);
  }

}
