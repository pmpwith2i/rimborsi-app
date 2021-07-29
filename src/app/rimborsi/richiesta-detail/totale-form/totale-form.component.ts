import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-totale-form',
  templateUrl: './totale-form.component.html',
  styleUrls: ['./totale-form.component.css']
})
export class TotaleFormComponent implements OnInit, OnChanges {

  totaleForm: FormGroup;

  @Input()
  isFormDisabled = false;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.totaleForm = this.formBuilder.group({
      totale: [{value: 0, disabled: this.isFormDisabled}],
      subtotaleRetribuzioni: [{value: 0, disabled: this.isFormDisabled}],
      subtotaleContributi: [{value: 0, disabled: this.isFormDisabled}]
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.isFormDisabled) {
      this.totaleForm.disable();
    }
  }

}
