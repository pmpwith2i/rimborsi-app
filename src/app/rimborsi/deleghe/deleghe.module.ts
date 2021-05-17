import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DelegheComponent} from './deleghe.component';
import {DelegheRoutingModule} from './deleghe-routing-module';
import {MatIconModule} from '@angular/material/icon';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [DelegheComponent],
  imports: [
    CommonModule,
    DelegheRoutingModule,
    MatIconModule,
    SharedModule
  ]
})
export class DelegheModule {
}
