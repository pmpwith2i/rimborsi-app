import {Component, Input, OnInit} from '@angular/core';
import {TotaleItem} from '../../model/totale-item';

@Component({
  selector: 'app-totale-list',
  templateUrl: './totale-list.component.html',
  styleUrls: ['./totale-list.component.css']
})
export class TotaleListComponent implements OnInit {

  @Input()
  totaleItems: TotaleItem[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
