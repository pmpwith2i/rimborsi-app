import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-delega-edit',
  templateUrl: './delega-edit.component.html',
  styleUrls: ['./delega-edit.component.css']
})
export class DelegaEditComponent implements OnInit {

  delegaFormControl = this.formBuilder.group({
    infoTipologia: this.formBuilder.group({
      tipoDatore: ['Azienda Privata'],
      tipoDelega: ['Incaricato']
    }),
    infoLegale: this.formBuilder.group({
      nome: ['Mario'],
      cognome: ['Rossi'],
      fiscalCode: ['MRORSSSJSJDISOD'],
      email: ['mario.rossi@miamail.com']
    }),
    infoAzienda: this.formBuilder.group({
      name: [''],
      fiscalCode: [''],
      vat: [''],
      emailAzienda: ['mario.rossi@miaazienda.com'],
      telAzienda: [33333333333]
    }),
    address: this.formBuilder.group({
      street: [''],
      zipCode: [''],
      city: [''],
      state: ['']
    })
  });

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
  }

}
