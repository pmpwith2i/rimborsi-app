import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  date: string;
  dayOfWeek: string;
  days = ['Domenica', 'Lunedi', 'Martedi', 'Mercoledi', 'Giovedi', 'Venerdi', 'Sabato'];


  private optionsLocale = {year: 'numeric', month: 'long', day: 'numeric'};

  constructor() {
  }

  ngOnInit(): void {
    this.date = new Date().toLocaleDateString('it-IT', this.optionsLocale);
    this.dayOfWeek = this.days[new Date().getDay()];
  }

}
