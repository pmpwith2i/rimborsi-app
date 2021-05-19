import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-delega-detail',
  templateUrl: './delega-detail.component.html',
  styleUrls: ['./delega-detail.component.css']
})
export class DelegaDetailComponent implements OnInit {
  delegaFormControl = this.formBuilder.group({
    infoTipologia: this.formBuilder.group({
      tipoDatore: [''],
      tipoDelega: ['']
    })
  });

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
  }

}
