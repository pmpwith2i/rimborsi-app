import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RimborsiComponent} from './rimborsi.component';
import {SharedModule} from '../shared/shared.module';
import {SidebarComponent} from './sidebar/sidebar.component';
import {NavigationComponent} from './navigation/navigation.component';
import {RimborsiRoutingModule} from './rimborsi-routing.module';
import {MatIconModule} from '@angular/material/icon';
import { SidebarItemComponent } from './sidebar/sidebar-item/sidebar-item.component';


@NgModule({
  declarations: [RimborsiComponent, SidebarComponent, NavigationComponent, SidebarItemComponent],
  imports: [
    CommonModule,
    SharedModule,
    CommonModule,
    RimborsiRoutingModule,
    MatIconModule,
  ],
  exports: [
    RimborsiComponent,
  ]
})
export class RimborsiModule {
}
