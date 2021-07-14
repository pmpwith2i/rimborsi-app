import {Component, Input, OnInit} from '@angular/core';
import {Giornata} from '../model/giornata';

@Component({
  selector: 'app-giornata-item',
  templateUrl: './giornata-item.component.html',
  styleUrls: ['./giornata-item.component.css']
})
export class GiornataItemComponent implements OnInit {

  @Input()
  giornata: Giornata;

  @Input()
  isSelected: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

  isAlert(): boolean {
    return this.isSelected && (this.giornata.giorno.getDay() == 0 || this.giornata.giorno.getDay() == 6);
  }
}
