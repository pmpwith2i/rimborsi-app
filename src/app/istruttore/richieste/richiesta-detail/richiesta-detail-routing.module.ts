import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {RichiestaDetailComponent} from './richiesta-detail.component';

const routes: Routes = [
  {
    path: '', component: RichiestaDetailComponent
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
export class RichiestaDetailRoutingModule {
}
