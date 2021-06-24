import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {RimborsiComponent} from './rimborsi.component';

export const routes: Routes = [
    {
      path: 'rimborsi', component: RimborsiComponent, children: [
        {
          path: 'dashboard', loadChildren: () =>
            import('./dashboard/dashboard.module').then(m =>
              m.DashboardModule)
        },
        {
          path: 'user-info', loadChildren: () =>
            import('./user-info/user-info.module').then(m =>
              m.UserInfoModule)
        },
        {
          path: 'deleghe', loadChildren: () =>
            import('./deleghe/deleghe.module').then(m => m.DelegheModule)
        },
        {
          path: 'deleghe/:id', loadChildren: () => import('./delega-detail/delega-detail.module').then(m => m.DelegaDetailModule)
        },
        {
          path: 'deleghe/edit/:id', loadChildren: () => import('./delega-edit/delega-edit.module').then(m => m.DelegaEditModule)
        },
        {
          path: 'richieste', loadChildren: () =>
            import('./richieste/richieste.module').then(m => m.RichiesteModule)
        },
        {
          path: 'richieste/new', loadChildren: () =>
            import('./richiesta-new/richiesta-new.module').then(m => m.RichiestaNewModule)
        },
        {
          path: 'richieste/:id', loadChildren: () => import('./richiesta-detail/richiesta-detail.module').then(m => m.RichiestaDetailModule)
        },
        {
          path: 'notifiche', loadChildren: () =>
            import('./notifiche/notifiche.module').then(m => m.NotificheModule)
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
export class RimborsiRoutingModule {
}
