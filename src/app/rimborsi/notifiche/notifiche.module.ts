import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NotificheComponent} from './notifiche.component';
import {NotificheRoutingModule} from './notifiche-routing.module';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [NotificheComponent],
  imports: [
    CommonModule,
    NotificheRoutingModule,
    SharedModule
  ]
})
export class NotificheModule {
}
