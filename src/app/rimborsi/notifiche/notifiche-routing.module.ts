import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {NotificheComponent} from './notifiche.component';

const routes: Routes = [
  {
    path: '', component: NotificheComponent
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
export class NotificheRoutingModule {
}
