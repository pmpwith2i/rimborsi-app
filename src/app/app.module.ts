import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from './shared/shared.module';
import {AppRoutingModule} from './app-routing.module';
import {RimborsiModule} from './rimborsi/rimborsi.module';
import {CoreModule} from './core/core.module';
import {Constants} from './config/constants';
import '@angular/common/locales/global/it';
import {IstruttoreModule} from './istruttore/istruttore.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    RimborsiModule,
    IstruttoreModule,
    SharedModule,
    CoreModule
  ],
  providers: [Constants,
    {provide: LOCALE_ID, useValue: 'it-IT'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
