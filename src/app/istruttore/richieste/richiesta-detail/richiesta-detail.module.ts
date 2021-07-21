import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RichiestaDetailComponent} from './richiesta-detail.component';
import {RichiestaDetailRoutingModule} from './richiesta-detail-routing.module';
import {SharedModule} from '../../../shared/shared.module';


@NgModule({
  declarations: [RichiestaDetailComponent],
  imports: [
    CommonModule,
    RichiestaDetailRoutingModule,
    SharedModule
  ]
})
export class RichiestaDetailModule {
}
