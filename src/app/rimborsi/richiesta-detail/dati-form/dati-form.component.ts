import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {DatiFinanziariPayload} from '../../../shared/model/dati-finanziari-payload';

@Component({
  selector: 'app-dati-form',
  templateUrl: './dati-form.component.html',
  styleUrls: ['./dati-form.component.css']
})
export class DatiFormComponent implements OnInit, OnChanges {

  @Input()
  datiFinanziari: DatiFinanziariPayload = new DatiFinanziariPayload({});

  @Input()
  isFormDisabled: boolean;

  retribuzioneFormControl: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.retribuzioneFormControl = this.formBuilder.group({
      giornate: [{value: 0, disabled: this.isFormDisabled}],
      giorniStipendio: [{value: 0, disabled: this.isFormDisabled}],
      lordoStipendio: [{value: 0, disabled: this.isFormDisabled}],
      rateoTredicesimaOre: [{value: 0, disabled: this.isFormDisabled}],
      rateoTredicesimaEuro: [{value: 0, disabled: this.isFormDisabled}],
      rateoQuattordicesimaOre: [{value: 0, disabled: this.isFormDisabled}],
      rateoQuattordicesimaEuro: [{value: 0, disabled: this.isFormDisabled}],
      rateoAltreMensilitaOre: [{value: 0, disabled: this.isFormDisabled}],
      rateoAltreMensilitaEuro: [{value: 0, disabled: this.isFormDisabled}],
      rateoPermessiOre: [{value: 0, disabled: this.isFormDisabled}],
      rateoPermessiEuro: [{value: 0, disabled: this.isFormDisabled}],
      rateoFerieOre: [{value: 0, disabled: this.isFormDisabled}],
      rateoFerieEuro: [{value: 0, disabled: this.isFormDisabled}],
      rateoExFestivitaOre: [{value: 0, disabled: this.isFormDisabled}],
      rateoExFestivitaEuro: [{value: 0, disabled: this.isFormDisabled}],
      rateoExFestivita2Ore: [{value: 0, disabled: this.isFormDisabled}],
      rateoExFestivita2Euro: [{value: 0, disabled: this.isFormDisabled}],
      isAltreModalita: [false],
      isBaseMensile: [true]
    });
  }

  isCheckedAltreModalita(): boolean {
    return this.retribuzioneFormControl.value.isAltreModalita;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (null != this.datiFinanziari) {
      this.setDatiFinanziari();
    }

    if (this.isFormDisabled) {
      this.retribuzioneFormControl.disable();
    }
  }

  setFormValue(aName: string, aValue: any): void {
    if (null == aValue || aValue == undefined) {
      return;
    }
    this.retribuzioneFormControl.controls[aName].setValue(aValue);
  }

  private setDatiFinanziari(): void {
    this.setFormValue('giornate', this.datiFinanziari.numeroGiornate);
    this.setFormValue('giorniStipendio', this.datiFinanziari.stipendioLordoGiorni);
    this.setFormValue('lordoStipendio', this.datiFinanziari.stipendioLordoEuro);
    this.setFormValue('rateoTredicesimaOre', this.datiFinanziari.rateo13Ore);
    this.setFormValue('rateoTredicesimaEuro', this.datiFinanziari.rateo13Euro);
    this.setFormValue('rateoQuattordicesimaOre', this.datiFinanziari.rateo13Ore);
    this.setFormValue('rateoQuattordicesimaEuro', this.datiFinanziari.rateo14Euro);
    this.setFormValue('rateoAltreMensilitaOre', this.datiFinanziari.rateoAltreOre);
    this.setFormValue('rateoAltreMensilitaEuro', this.datiFinanziari.rateoAltreEuro);
    this.setFormValue('rateoPermessiOre', this.datiFinanziari.rateoPermessiOre);
    this.setFormValue('rateoPermessiEuro', this.datiFinanziari.rateoPermessiEuro);
    this.setFormValue('rateoExFestivitaOre', this.datiFinanziari.rateoFestivitaOre);
    this.setFormValue('rateoExFestivitaEuro', this.datiFinanziari.rateoFestivitaEuro);
    this.setFormValue('rateoExFestivita2Ore', this.datiFinanziari.rateoFestivita2Ore);
    this.setFormValue('rateoExFestivita2Euro', this.datiFinanziari.rateoFestivita2Euro);
  }
}
