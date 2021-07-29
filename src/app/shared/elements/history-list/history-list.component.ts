import {Component, Input, OnInit} from '@angular/core';
import {History} from '../../model/history';

@Component({
  selector: 'app-history-list',
  templateUrl: './history-list.component.html',
  styleUrls: ['./history-list.component.css']
})
export class HistoryListComponent implements OnInit {

  @Input()
  histories: History[];

  constructor() { }

  ngOnInit(): void {
  }

}
