import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {DelegaDetailComponent} from './delega-detail.component';

const routes: Routes = [
  {
    path: '', component: DelegaDetailComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DelegaDetailRoutingModule {
}
