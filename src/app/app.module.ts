import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from './shared/shared.module';
import {AppRoutingModule} from './app-routing.module';
import {RimborsiModule} from './rimborsi/rimborsi.module';
import {CoreModule} from './core/core.module';
import {Constants} from './config/constants';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    RimborsiModule,
    SharedModule,
    CoreModule
    ],
  providers: [Constants],
  bootstrap: [AppComponent]
})
export class AppModule {
}
