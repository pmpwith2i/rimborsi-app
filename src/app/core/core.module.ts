import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ApiHttpService} from './services/api-http.service';
import {ApiEndpointsService} from './services/api-endpoints.service';
import {DelegheService} from './services/deleghe.service';
import {UserInfoService} from './services/user-info.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [UserInfoService, ApiEndpointsService, ApiHttpService, DelegheService]
})
export class CoreModule {
}
