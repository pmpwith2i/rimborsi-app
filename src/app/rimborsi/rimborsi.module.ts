import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RimborsiComponent} from './rimborsi.component';
import {SharedModule} from '../shared/shared.module';
import {RimborsiRoutingModule} from './rimborsi-routing.module';
import {MatIconModule} from '@angular/material/icon';
import {DelegaEditComponent} from './delega-edit/delega-edit.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [RimborsiComponent, DelegaEditComponent],
  imports: [
    CommonModule,
    SharedModule,
    CommonModule,
    RimborsiRoutingModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  exports: [
    RimborsiComponent,
  ]
})
export class RimborsiModule {
}
