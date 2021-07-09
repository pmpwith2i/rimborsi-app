import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-totale-form',
  templateUrl: './totale-form.component.html',
  styleUrls: ['./totale-form.component.css']
})
export class TotaleFormComponent implements OnInit {

  totaleForm = this.formBuilder.group({
    totale: [0],
    modalitaRimborso: [null],
    iban: ['...'],
  });

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
  }

}
