// Angular Modules
import {Injectable} from '@angular/core';
// Application Classes
import {UrlBuilder} from '../../shared/elements/classes/url-builder';
import {QueryStringParameters} from '../../shared/elements/classes/query-string-parameters';
// Application Constants
import {Constants} from 'src/app/config/constants';

@Injectable()
export class ApiEndpointsService {
  constructor(
    // Application Constants
    private constants: Constants
  ) {
  }  /* #region URL CREATOR */

  // URL
  private createUrl(
    action: string,
    isMockAPI: boolean = true
  ): string {
    const urlBuilder: UrlBuilder = new UrlBuilder(
      isMockAPI ? this.constants.API_MOCK_ENDPOINT :
        this.constants.API_ENDPOINT,
      action
    );
    return urlBuilder.toString();
  }  // URL WITH QUERY PARAMS
  private createUrlWithQueryParameters(
    action: string,
    queryStringHandler?:
      (queryStringParameters: QueryStringParameters) => void
  ): string {
    const urlBuilder: UrlBuilder = new UrlBuilder(
      this.constants.API_ENDPOINT,
      action
    );
    // Push extra query string params
    if (queryStringHandler) {
      queryStringHandler(urlBuilder.queryString);
    }
    return urlBuilder.toString();
  }

  // URL WITH PATH VARIABLES
  private createUrlWithPathVariables(
    action: string,
    pathVariables: any[] = []
  ): string {
    let encodedPathVariablesUrl: string = '';
    // Push extra path variables
    for (const pathVariable of pathVariables) {
      if (pathVariable !== null) {
        encodedPathVariablesUrl +=
          `/${encodeURIComponent(pathVariable.toString())}`;
      }
    }
    const urlBuilder: UrlBuilder = new UrlBuilder(
      this.constants.API_ENDPOINT,
      `${action}${encodedPathVariablesUrl}`
    );
    return urlBuilder.toString();
  }

  public getDelegheEndPoint(): string {
    return this.createUrl('deleghe');
  }

  public getRichiesteEndPoint(): string {
    return this.createUrl('richieste');
  }

  public getRichiestaEndPoint(anId: number): string {
    return this.createUrl('richieste/' + anId);
  }

  getStoricoEndpoint(richiestaId: number): string {
    return this.createUrl('storico');
  }

  getNotificheEndPoint(): string {
    return this.createUrl('notifiche');
  }

  getSchedaEndPoint(anId: number): string {
    return this.createUrl('schede/' + anId);
  }

  getSetStatoEndPoint(anId: number, aState: number): string {
    return this.createUrl('richieste/' + anId + '/' + aState);
  }
}
