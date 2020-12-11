/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { OrderStatus } from '../models/order-status';

/**
 * Order Status Controller
 */
@Injectable({
  providedIn: 'root',
})
class OrderStatusControllerService extends __BaseService {
  static readonly listUsingGET3Path = '/api/order-status';
  static readonly getUsingGET3Path = '/api/order-status/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * list
   * @return OK
   */
  listUsingGET3Response(): __Observable<__StrictHttpResponse<Array<OrderStatus>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/order-status`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<OrderStatus>>;
      })
    );
  }
  /**
   * list
   * @return OK
   */
  listUsingGET3(): __Observable<Array<OrderStatus>> {
    return this.listUsingGET3Response().pipe(
      __map(_r => _r.body as Array<OrderStatus>)
    );
  }

  /**
   * get
   * @param id id
   * @return OK
   */
  getUsingGET3Response(id: number): __Observable<__StrictHttpResponse<OrderStatus>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/order-status/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<OrderStatus>;
      })
    );
  }
  /**
   * get
   * @param id id
   * @return OK
   */
  getUsingGET3(id: number): __Observable<OrderStatus> {
    return this.getUsingGET3Response(id).pipe(
      __map(_r => _r.body as OrderStatus)
    );
  }
}

module OrderStatusControllerService {
}

export { OrderStatusControllerService }
