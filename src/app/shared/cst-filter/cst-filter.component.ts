import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CstFilter} from '../cst-table/classes/cst-filter';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-cst-filter',
  templateUrl: './cst-filter.component.html',
  styleUrls: ['./cst-filter.component.css']
})
export class CstFilterComponent implements OnInit {
  @Input() filter: CstFilter;
  @Output() modelChangeEvent = new EventEmitter<any>();
  formControlFilter = new FormControl('');

  constructor() {
  }

  ngOnInit(): void {
    this.formControlFilter.valueChanges.subscribe((newVal) => {
      this.filter.value = newVal;
      this.onModelChange(newVal);
    });
  }

  onModelChange(newVal: any): void {
    this.modelChangeEvent.emit(newVal);
  }
}
