import {Component, Input, OnInit} from '@angular/core';
import {Giornata} from '../../model/giornata';

@Component({
  selector: 'app-giornate-list',
  templateUrl: './giornate-list.component.html',
  styleUrls: ['./giornate-list.component.css']
})
export class GiornateListComponent implements OnInit {

  @Input()
  giornate: Giornata[];

  constructor() {
  }

  ngOnInit(): void {
  }

  onClickGiornata(anIndex: number): void {
    this.giornate[anIndex].selected = !this.giornate[anIndex].selected;
  }
}
