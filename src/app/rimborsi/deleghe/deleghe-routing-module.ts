import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {DelegheComponent} from './deleghe.component';

const routes: Routes = [
  {
    path: '', component: DelegheComponent
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
export class DelegheRoutingModule {
}
