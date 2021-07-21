import {Component, OnInit} from '@angular/core';
import {History} from '../../../shared/model/history';
import {Giornata} from '../../../shared/model/giornata';
import {RichiesteService} from '../../../core/services/richieste.service';
import {FormBuilder} from '@angular/forms';
import {RetribuzioneItem} from '../../../shared/model/retribuzione-item';
import {ContributoItem} from '../../../shared/model/contributo-item';
import {TotaleItem} from '../../../shared/model/totale-item';

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
  overlayShow = false;
  viewResume = false;
  retribuzioneItems: RetribuzioneItem[] = [];
  contributiItems: ContributoItem[] = [];
  totaleItems: TotaleItem[] = [];


  constructor(private richiesteService: RichiesteService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.richiestaName = '394858';
    this.getStorico();
    this.getGiornate();
    this.getRetribuzioneItems();
    this.getContributiItems();
    this.getTotaliItems();
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

  toggleViewGiornate(): void {
    this.viewGiornate = !this.viewGiornate;
    if (this.viewGiornate) {
      this.overlayShow = true;
    }
  }

  toggleViewResume(): void {
    this.viewResume = !this.viewResume;
    if (this.viewResume) {
      this.overlayShow = true;
    }
  }

  toggleOverlay(): void {
    this.overlayShow = !this.overlayShow;
    if (!this.overlayShow) {
      this.viewGiornate = false;
      this.viewResume = false;
    }
  }

  private getRetribuzioneItems(): void {
    this.retribuzioneItems = [];
    this.retribuzioneItems.push(new RetribuzioneItem({name: 'Stipendio Lordo', amount: 88.78, tot: 1}));
    this.retribuzioneItems.push(new RetribuzioneItem({name: 'Rateo 13/a ore', amount: 7.40, tot: 0.67}));
    this.retribuzioneItems.push(new RetribuzioneItem({name: 'Rateo 14/a ore', amount: 7.40, tot: 0.67}));
    this.retribuzioneItems.push(new RetribuzioneItem({name: 'Rateo Altre Mensilità ore', amount: 0, tot: 0}));
    this.retribuzioneItems.push(new RetribuzioneItem({name: 'Rateo Permessi retribuiti', amount: 1.33, tot: 0.12}));
    this.retribuzioneItems.push(new RetribuzioneItem({name: 'Rateo Ferie', amount: 6.10, tot: 0.55}));
    this.retribuzioneItems.push(new RetribuzioneItem({name: 'Rateo Ex Festività', amount: 1.11, tot: 0.10}));
    this.retribuzioneItems.push(new RetribuzioneItem({name: 'Rateo Ex festività 2/6 e 4/11', amount: 0, tot: 0}));
  }

  private getContributiItems(): void {
    this.contributiItems = [];
    this.contributiItems.push(new ContributoItem({name: 'INPS', tot: 30.68, amount: 34.30}));
    this.contributiItems.push(new ContributoItem({name: 'INAIL', tot: 6.33, amount: 7.10}));
    this.contributiItems.push(new ContributoItem({name: 'Altri Enti', tot: 0, amount: 0}));
    this.contributiItems.push(new ContributoItem({name: 'TFR', tot: 0, amount: 0}));
  }

  private getTotaliItems(): void {
    this.totaleItems = [];
    this.totaleItems.push({name: 'Totale contributi', amount: 41.40});
    this.totaleItems.push({name: 'Totale costo complessivo', amount: 153.53});
  }
}
