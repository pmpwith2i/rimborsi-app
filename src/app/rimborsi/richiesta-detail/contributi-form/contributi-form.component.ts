import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ContributiPayload} from '../../../shared/model/contributi-payload';

@Component({
  selector: 'app-contributi-form',
  templateUrl: './contributi-form.component.html',
  styleUrls: ['./contributi-form.component.css']
})
export class ContributiFormComponent implements OnInit, OnChanges {

  @Input()
  contributi: ContributiPayload = new ContributiPayload({});

  @Input()
  isFormDisabled = false;

  contributiForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.contributiForm = this.formBuilder.group({
      inps: [{value: 0, disabled: this.isFormDisabled}],
      inpsPercentuale: [{value: 0, disabled: this.isFormDisabled}],
      inail: [{value: 0, disabled: this.isFormDisabled}],
      inailPercentuale: [{value: 0, disabled: this.isFormDisabled}],
      altri: [{value: 0, disabled: this.isFormDisabled}],
      altriNome: [{value: 0, disabled: this.isFormDisabled}],
      altriPercentuale: [{value: 0, disabled: this.isFormDisabled}]
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (null != this.contributi) {
      this.setContributi();
    }

    if (this.isFormDisabled) {
      this.contributiForm.disable();
    }
  }

  setFormValue(aName: string, aValue: any): void {
    this.contributiForm.controls[aName].setValue(aValue);
  }

  private setContributi(): void {
    this.setFormValue('inps', this.contributi.inpsEuro);
    this.setFormValue('inpsPercentuale', this.contributi.inpsPerc);
    this.setFormValue('inail', this.contributi.inailEuro);
    this.setFormValue('inailPercentuale', this.contributi.inailPerc);
    this.setFormValue('altri', this.contributi.altriEuro);
    this.setFormValue('altriNome', this.contributi.altriNome);
    this.setFormValue('altriPercentuale', this.contributi.altriPerc);
  }
}
