import {Injectable} from '@angular/core';
import {ApiEndpointsService} from './api-endpoints.service';
import {ApiHttpService} from './api-http.service';

@Injectable()
export class DelegheService {
  jsonDeleghe: any;

  constructor(
    private apiHttpService: ApiHttpService,
    private apiEndpointsService: ApiEndpointsService
  ) {
  }

  setDelegheCache(aJson: any): void {
    this.jsonDeleghe = aJson;
  }

  getAllDeleghe(): any {
    return this.apiHttpService
      .get(this.apiEndpointsService.getDelegheEndPoint());
  }

}
