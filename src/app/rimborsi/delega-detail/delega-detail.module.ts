import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DelegaDetailComponent} from './delega-detail.component';
import {DelegaDetailRoutingModule} from './delega-detail-routing.module';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [DelegaDetailComponent],
    imports: [
        CommonModule,
        DelegaDetailRoutingModule,
        ReactiveFormsModule
    ],
  exports: [DelegaDetailComponent]
})
export class DelegaDetailModule {
}
