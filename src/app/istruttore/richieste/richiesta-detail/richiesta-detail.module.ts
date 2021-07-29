import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DialogIntegrazioniComponent, RichiestaDetailComponent} from './richiesta-detail.component';
import {RichiestaDetailRoutingModule} from './richiesta-detail-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import {MatChipsModule} from '@angular/material/chips';


@NgModule({
  declarations: [RichiestaDetailComponent, DialogIntegrazioniComponent],
  imports: [
    CommonModule,
    RichiestaDetailRoutingModule,
    SharedModule,
    MatChipsModule,
  ]
})
export class RichiestaDetailModule {
}
