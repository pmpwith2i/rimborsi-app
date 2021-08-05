import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DialogAnagraficaComponent, DialogIntegrazioniComponent, RichiestaDetailComponent} from './richiesta-detail.component';
import {RichiestaDetailRoutingModule} from './richiesta-detail-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import {MatChipsModule} from '@angular/material/chips';
import {MatCheckboxModule} from '@angular/material/checkbox';


@NgModule({
  declarations: [DialogAnagraficaComponent, RichiestaDetailComponent, DialogIntegrazioniComponent],
  imports: [
    CommonModule,
    RichiestaDetailRoutingModule,
    SharedModule,
    MatChipsModule,
    MatCheckboxModule,
  ]
})
export class RichiestaDetailModule {
}
