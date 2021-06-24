import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-dati-form',
  templateUrl: './dati-form.component.html',
  styleUrls: ['./dati-form.component.css']
})
export class DatiFormComponent implements OnInit {

  richiestaFormControl = this.formBuilder.group({
    datiFinanziari: this.formBuilder.group({
      giornate: [0],
      giorniStipendio: [0],
      lordoStipendio: [0],
      rateoTredicesimaOre: [1],
      rateoTredicesimaEuro: [{value: 0, disabled: true}],
      rateoQuattordicesimaOre: [1],
      rateoQuattordicesimaEuro: [{value: 0, disabled: true}],
      rateoAltreMensilitaOre: [1],
      rateoAltreMensilitaEuro: [{value: 0, disabled: true}],
      rateoPermessiOre: [1],
      rateoPermessiEuro: [{value: 0, disabled: true}],
      rateoFerieOre: [1],
      rateoFerieEuro: [{value: 0, disabled: true}],
      rateoExFestivitaOre: [1],
      rateoExFestivitaEuro: [{value: 0, disabled: true}],
      rateoExFestivita2Ore: [1],
      rateoExFestivita2Euro: [{value: 0, disabled: true}],
      totale: [0],
      modalitaRimborso: [null],
      iban: ['...'],
    })
  });

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
  }

}