import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RichiestaDetailComponent} from './richiesta-detail.component';
import {RichiestaDetailRoutingModule} from './richiesta-detail-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';
import {DatiFormComponent} from './dati-form/dati-form.component';
import { ContributiFormComponent } from './contributi-form/contributi-form.component';
import { TotaleFormComponent } from './totale-form/totale-form.component';
import {MatCheckboxModule} from '@angular/material/checkbox';


@NgModule({
  declarations: [RichiestaDetailComponent, DatiFormComponent, ContributiFormComponent, TotaleFormComponent],
    imports: [
        CommonModule,
        RichiestaDetailRoutingModule,
        SharedModule,
        ReactiveFormsModule,
        MatCheckboxModule
    ]
})
export class RichiestaDetailModule {
}
