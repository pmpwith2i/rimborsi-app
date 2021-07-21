import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {IstruttoreComponent} from './istruttore.component';

export const routes: Routes = [
    {
      path: 'istruttore', component: IstruttoreComponent, children: [{
        path: 'dashboard', loadChildren: () =>
          import('../rimborsi/dashboard/dashboard.module').then(m =>
            m.DashboardModule)
      }, {
        path: 'richieste', loadChildren: () =>
          import('./richieste/richieste.module').then(m =>
            m.RichiesteModule)
      },
        {
          path: 'richieste/:id',
          loadChildren: () => import('./richieste/richiesta-detail/richiesta-detail.module').then(m => m.RichiestaDetailModule)
        }]
    }
  ]
;

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class IstruttoreRoutingModule {
}
