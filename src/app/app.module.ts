import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from './shared/shared.module';
import {AppRoutingModule} from './app-routing.module';
import {RimborsiModule} from './rimborsi/rimborsi.module';
import { SidebarLinkComponent } from './sidebar/sidebar-link/sidebar-link.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarLinkComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    RimborsiModule,
    SharedModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
