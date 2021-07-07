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
      tipoDatore: [''],
      tipoDelega: ['']
    }),
    infoLegale: this.formBuilder.group({
      nome: [''],
      cognome: [''],
      fiscalCode: [''],
      email: ['']
    }),
    infoDelega: this.formBuilder.group({
      nome: [''],
      cognome: [''],
      vat: [''],
      fiscalCode: ['']
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
