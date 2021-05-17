import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-delega',
  templateUrl: './edit-delega.component.html',
  styleUrls: ['./edit-delega.component.css']
})
export class EditDelegaComponent implements OnInit {

  profileForm = this.fb.group({
      firstName: ['', Validators.required],
      secondName: ['', Validators.required],
      address: this.fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        zipCode: ['', Validators.required],
      }),
      email: ['', Validators.required],
      pec: ['', Validators.required],
      fiscalCode: ['', [Validators.required, Validators.minLength(10)]]
    }
  );

  province: string[] = ['Bologna', 'Ferrara', 'Crevalcore'];

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void{

  }
}
