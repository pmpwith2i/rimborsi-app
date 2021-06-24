import { Injectable } from '@angular/core';
import {ApiHttpService} from './api-http.service';
import {ApiEndpointsService} from './api-endpoints.service';

@Injectable({
  providedIn: 'root'
})
export class NotificheService {
  jsonNotifiche: any;

  constructor(
    private apiHttpService: ApiHttpService,
    private apiEndpointsService: ApiEndpointsService
  ) {
  }

  setNotificheCache(aJson: any): void {
    this.jsonNotifiche = aJson;
  }

  getAllNotifiche(): any {
    return this.apiHttpService
      .get(this.apiEndpointsService.getNotificheEndPoint());
  }

}
