import {Component, OnInit} from '@angular/core';
import {ResumeItemElement} from './resume-list-item/element';

@Component({
  selector: 'app-richiesta-resume',
  templateUrl: './richiesta-resume.component.html',
  styleUrls: ['./richiesta-resume.component.css']
})
export class RichiestaResumeComponent implements OnInit {

  retribuzioni: ResumeItemElement[] = [];
  contributi: ResumeItemElement[] = [];
  totali: ResumeItemElement[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.createRetribuzioneList();
    this.createContributiList();
    this.createTotaliList();
  }

  private createRetribuzioneList(): void {

    this.retribuzioni = [];
    this.retribuzioni.push(new ResumeItemElement({itemName: 'Numero Giornate', itemEl: 0}));
    this.retribuzioni.push(
      new ResumeItemElement({itemName: 'Numero Giornate', itemEl: '0h', itemSecondEl: '100€'})
    );
    this.retribuzioni.push(
      new ResumeItemElement({itemName: 'Stipendio Lordo Giorni', itemEl: '0h', itemSecondEl: '100€'})
    );
    this.retribuzioni.push(
      new ResumeItemElement({itemName: 'Rateo 13/a', itemEl: '0h', itemSecondEl: '100€'})
    );
    this.retribuzioni.push(
      new ResumeItemElement({itemName: 'Rateo 14/a', itemEl: '0h', itemSecondEl: '100€'})
    );
    this.retribuzioni.push(
      new ResumeItemElement({itemName: 'Rateo Altre mensilità', itemEl: '0h', itemSecondEl: '100€'})
    );
    this.retribuzioni.push(
      new ResumeItemElement({itemName: 'Rateo Permessi Retribuiti', itemEl: '0h', itemSecondEl: '100€'})
    );
    this.retribuzioni.push(
      new ResumeItemElement({itemName: 'Rateo Ferie', itemEl: '0h', itemSecondEl: '100€'})
    );
    this.retribuzioni.push(
      new ResumeItemElement({itemName: 'Rateo Ex Festività', itemEl: '0h', itemSecondEl: '100€'})
    );
  }

  private createContributiList(): void {
    this.contributi.push(
      new ResumeItemElement({itemName: 'INAIL', itemEl: '', itemSecondEl: '0€'})
    );
    this.contributi.push(
      new ResumeItemElement({itemName: 'INPS', itemEl: '', itemSecondEl: '0€'})
    );
    this.contributi.push(
      new ResumeItemElement({itemName: 'Altri', itemEl: '', itemSecondEl: '0€'})
    );
  }

  private createTotaliList(): void{
    this.totali.push(
      new ResumeItemElement({itemName: 'Totale', itemEl: '', itemSecondEl: '0€'})
    );
    this.totali.push(
      new ResumeItemElement({itemName: 'Modalità Di Pagamento', itemEl: '', itemSecondEl: 'IBAN'})
    );
    this.totali.push(
      new ResumeItemElement({itemName: 'IBAN', itemEl: '', itemSecondEl: 'XXXXXX'})
    );
  }
}
