import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {RichiesteComponent} from './richieste.component';

const routes: Routes = [
  {
    path: '', component: RichiesteComponent
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
export class RichiesteRoutingModule {
}
