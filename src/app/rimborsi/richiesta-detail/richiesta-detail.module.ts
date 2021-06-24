import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RichiestaDetailComponent} from './richiesta-detail.component';
import {RichiestaDetailRoutingModule} from './richiesta-detail-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';
import { DatiFormComponent } from './dati-form/dati-form.component';


@NgModule({
  declarations: [RichiestaDetailComponent, DatiFormComponent],
    imports: [
        CommonModule,
        RichiestaDetailRoutingModule,
        SharedModule,
        ReactiveFormsModule
    ]
})
export class RichiestaDetailModule {
}