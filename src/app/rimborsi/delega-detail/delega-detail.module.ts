import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DelegaDetailComponent} from './delega-detail.component';
import {DelegaDetailRoutingModule} from './delega-detail-routing.module';


@NgModule({
  declarations: [DelegaDetailComponent],
  imports: [
    CommonModule,
    DelegaDetailRoutingModule
  ],
  exports: [DelegaDetailComponent]
})
export class DelegaDetailModule {
}
