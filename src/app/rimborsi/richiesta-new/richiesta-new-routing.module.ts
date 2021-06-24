import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {RichiestaNewComponent} from './richiesta-new.component';

const routes: Routes = [
  {
    path: '', component: RichiestaNewComponent
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
export class RichiestaNewRoutingModule {
}
