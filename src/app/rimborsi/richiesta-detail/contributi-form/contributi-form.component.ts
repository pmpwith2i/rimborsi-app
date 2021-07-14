import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-contributi-form',
  templateUrl: './contributi-form.component.html',
  styleUrls: ['./contributi-form.component.css']
})
export class ContributiFormComponent implements OnInit {

  contributi = this.formBuilder.group({
    inps: [1],
    inail: [2],
    altri: [3],
    subtotale: [100]
  });

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
  }

}
