import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {DelegaEditComponent} from './delega-edit.component';

const routes: Routes = [
  {
    path: '', component: DelegaEditComponent
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
export class DelegaEditRoutingModule {
}
