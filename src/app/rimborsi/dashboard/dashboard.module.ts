import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {SharedModule} from '../../shared/shared.module';
import { NotificationListComponent } from './notification-list/notification-list.component';
import { NotificationItemComponent } from './notification-list/notification-item/notification-item.component';
import { RichiesteListComponent } from './richieste-list/richieste-list.component';
import { RichiesteItemComponent } from './richieste-list/richieste-item/richieste-item.component';


@NgModule({
  declarations: [DashboardComponent, NotificationListComponent, NotificationItemComponent, RichiesteListComponent, RichiesteItemComponent,],
  imports: [
    DashboardRoutingModule,
    CommonModule,
    SharedModule,
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule {
}
