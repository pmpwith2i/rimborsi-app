import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ApiHttpService} from './services/api-http.service';
import {ApiEndpointsService} from './services/api-endpoints.service';
import {DelegheService} from './services/deleghe.service';
import {UserInfoService} from './services/user-info.service';
import {HttpClientModule} from '@angular/common/http';
import {RichiesteService} from './services/richieste.service';
import {NotificheService} from './services/notifiche.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [UserInfoService, ApiEndpointsService, ApiHttpService, DelegheService, RichiesteService, NotificheService]
})
export class CoreModule {
}
