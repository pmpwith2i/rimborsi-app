import {Component, Input, OnInit} from '@angular/core';
import {History} from '../../../shared/model/history';
import {Giornata} from '../../../shared/model/giornata';
import {RichiesteService} from '../../../core/services/richieste.service';
import {RetribuzioneItem} from '../../../shared/model/retribuzione-item';
import {ContributoItem} from '../../../shared/model/contributo-item';
import {TotaleItem} from '../../../shared/model/totale-item';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {ActivatedRoute} from '@angular/router';
import {Richiesta} from '../../../shared/model/richiesta';
import {IschedeFinanziarie} from '../../../shared/model/scheda-finanziaria';
import {ModalGiornateComponent} from '../../../shared/elements/modal-giornate/modal-giornate.component';

@Component({
  selector: 'app-richiesta-detail',
  templateUrl: './richiesta-detail.component.html',
  styleUrls: ['./richiesta-detail.component.css']
})
export class RichiestaDetailComponent implements OnInit {
  histories: History[];
  giornate: Giornata[];
  viewGiornate = false;
  overlayShow = false;
  viewResume = false;
  retribuzioneItems: RetribuzioneItem[] = [];
  contributiItems: ContributoItem[] = [];
  totaleItems: TotaleItem[] = [];
  richiesta: Richiesta = new Richiesta({});
  iban: string;
  tipologiaPagamento: string;
  schedeFinanziarie: Array<IschedeFinanziarie> = [];


  constructor(private route: ActivatedRoute,
              private matDialog: MatDialog,
              private richiesteService: RichiesteService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params.id;
      if (null == id) {
        // TODO: Funzione not found
      } else {
        this.richiesteService.getRichiesta(id).subscribe(data => {
          this.richiesta = new Richiesta(data.richiesta);
          this.iban = data.infoPagamento.iban;
          this.tipologiaPagamento = data.infoPagamento.tipologiaPagamento;
          this.schedeFinanziarie = data.schede as IschedeFinanziarie[];
        });
      }
    });

    // TODO: TUTTA QUESTA PARTE E' MOCKATA
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

  requestIntegration(): void {
    this.matDialog.open(DialogIntegrazioniComponent);
  }

  toggleViewNewScheda(): void {
    this.matDialog.open(ModalGiornateComponent, {
      data: {
        giornate: this.richiesteService.getGiornateDisponibili([])
      }
    });
  }


  onChangeScheda(anId: number): void {
    this.richiesteService.getScheda(anId).subscribe(data => {
      //TODO: FUNZIONE SCHEDA FINANZIARIA ISTRUTTORE
    });
  }
}

@Component({
  selector: 'app-dialog-integrazioni',
  templateUrl: 'dialog-integrazioni.html',
})
export class DialogIntegrazioniComponent {
  @Input()
  richiestaText = 'Lorem Ipsum Dolor Sit Amet';

  constructor(
    public dialogRef: MatDialogRef<DialogIntegrazioniComponent>) {
  }

  onClose(): void {
    this.dialogRef.close();
  }

  onConfirm(): void {
    this.dialogRef.close();
  }
}
