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
    })
  });

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
  }

}
