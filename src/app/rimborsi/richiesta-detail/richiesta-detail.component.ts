import {Component, OnInit} from '@angular/core';
import {History} from '../../shared/model/history';
import {RichiesteService} from '../../core/services/richieste.service';
import {FormBuilder} from '@angular/forms';
import {Giornata} from '../../shared/model/giornata';

@Component({
  selector: 'app-richiesta-detail',
  templateUrl: './richiesta-detail.component.html',
  styleUrls: ['./richiesta-detail.component.css']
})
export class RichiestaDetailComponent implements OnInit {
  richiestaName: string;
  histories: History[];
  giornate: Giornata[];
  viewGiornate = false;


  constructor(private richiesteService: RichiesteService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.richiestaName = '394858';
    this.getStorico();
    this.getGiornate();
  }

  getGiornate(): void {
    this.giornate = this.richiesteService.getGiornateDisponibili([]);
  }

  getStorico(): void {
    this.richiesteService.getStoricoRichiesta(1).subscribe(data => {
      this.histories = [];
      data.forEach(el => {
        const item = new History(el);
        this.histories.push(item);
      });
      this.richiesteService.setRichiesteCache(data);
    });
  }

  toggleViewGiornate(): void{
    this.viewGiornate = !this.viewGiornate;
  }
}
