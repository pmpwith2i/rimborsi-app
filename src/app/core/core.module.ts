import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PersonalDataService} from './personal-data.service';
import {ApiHttpService} from './services/api-http.service';
import {ApiEndpointsService} from './services/api-endpoints.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [PersonalDataService, ApiEndpointsService, ApiHttpService]
})
export class CoreModule {
}
