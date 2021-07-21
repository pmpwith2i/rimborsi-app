import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IstruttoreRoutingModule} from './istruttore-routing.module';
import { IstruttoreComponent } from './istruttore.component';
import {SharedModule} from '../shared/shared.module';
import { RichiesteComponent } from './richieste/richieste.component';


@NgModule({
  declarations: [IstruttoreComponent, RichiesteComponent],
  imports: [
    CommonModule,
    IstruttoreRoutingModule,
    SharedModule
  ]
})
export class IstruttoreModule {
}
