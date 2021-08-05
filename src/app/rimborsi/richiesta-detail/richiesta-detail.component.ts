import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {History} from '../../shared/model/history';
import {RichiesteService} from '../../core/services/richieste.service';
import {FormBuilder} from '@angular/forms';
import {Giornata} from '../../shared/model/giornata';
import {Richiesta} from '../../shared/model/richiesta';
import {ActivatedRoute} from '@angular/router';
import {DatiFinanziariPayload} from '../../shared/model/dati-finanziari-payload';
import {ContributiPayload} from '../../shared/model/contributi-payload';
import {IntegrazioniPayload} from '../../shared/model/integrazioni-payload';
import {getIsDisabledFormByStato, Stato} from '../../config/richiestaConstants';
import {MatDialog} from '@angular/material/dialog';
import {ModalGiornateComponent} from '../../shared/elements/modal-giornate/modal-giornate.component';
import {IschedeFinanziarie} from '../../shared/model/scheda-finanziaria';


@Component({
  selector: 'app-richiesta-detail',
  templateUrl: './richiesta-detail.component.html',
  styleUrls: ['./richiesta-detail.component.css']
})
export class RichiestaDetailComponent implements OnInit, OnChanges {
  histories: History[];
  giornate: Giornata[];
  datiFinanziari: DatiFinanziariPayload;
  contributi: ContributiPayload;
  richiestaIntegrazioni: IntegrazioniPayload;
  viewGiornate = false;
  overlayShow = false;
  viewResume = false;
  richiesta: Richiesta = new Richiesta({});
  isFormDisabled = false;
  schedeFinanziarie: Array<IschedeFinanziarie> = [];


  constructor(private matDialog: MatDialog, private route: ActivatedRoute, private richiesteService: RichiesteService, private formBuilder: FormBuilder) {
  }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params.id;
      if (null == id) {
        // TODO: Funzione not found
      } else {
        this.richiesteService.getRichiesta(id).subscribe(data => {
          this.richiesta = new Richiesta(data.richiesta);
          this.datiFinanziari = new DatiFinanziariPayload(data.datiFinanziari);
          this.contributi = new ContributiPayload(data.contributi);
          this.richiestaIntegrazioni = new IntegrazioniPayload(data.richiestaIntegrazioni);
          this.schedeFinanziarie = data.schede as IschedeFinanziarie[];
          if (data.richiestaIntegrazioni.allegato) {
            this.richiestaIntegrazioni.setAllegato(data.richiestaIntegrazioni.allegato);
          }
          this.initRichiesta();
        });
      }
    });
    this.getStorico();
    this.getGiornate();
  }

  initRichiesta(): void {
    if (null != this.richiesta) {
      this.isFormDisabled = getIsDisabledFormByStato(this.richiesta.stato);
    }
    console.log(this.isFormDisabled);
  }

  ngOnChanges(changes: SimpleChanges): void {
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

  toggleViewNewScheda(): void {
    this.matDialog.open(ModalGiornateComponent, {
      data: {
        giornate: this.richiesteService.getGiornateDisponibili([])
      }
    });
  }

  onChangeScheda(anId: number): void {
    this.richiesteService.getScheda(anId).subscribe(data => {
      this.datiFinanziari = new DatiFinanziariPayload(data.datiFinanziari);
      this.contributi = new ContributiPayload(data.contributi);
    });
  }

  isInviata(): boolean {
    return this.richiesta.stato == Stato.INVIATA;
  }

  isSospesa(): boolean {
    return this.richiesta.stato == Stato.SOSPESA;
  }

  inviaIntegrazioni(): void {
    this.richiesteService.setStatoRichiesta(this.richiesta.id, Stato.PRESENTATA).subscribe(data => {
      if (data) {
        this.richiesta.stato = Stato.PRESENTATA;
      }
    });
  }
}
