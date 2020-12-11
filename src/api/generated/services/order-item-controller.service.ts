/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { OrderItemRes } from '../models/order-item-res';
import { OrderItemReq } from '../models/order-item-req';

/**
 * Order Item Controller
 */
@Injectable({
  providedIn: 'root',
})
class OrderItemControllerService extends __BaseService {
  static readonly listUsingGET2Path = '/api/order-item';
  static readonly createUsingPOST2Path = '/api/order-item';
  static readonly getUsingGET2Path = '/api/order-item/{id}';
  static readonly updateUsingPUT2Path = '/api/order-item/{id}';

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
  listUsingGET2Response(): __Observable<__StrictHttpResponse<Array<OrderItemRes>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/order-item`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<OrderItemRes>>;
      })
    );
  }
  /**
   * list
   * @return OK
   */
  listUsingGET2(): __Observable<Array<OrderItemRes>> {
    return this.listUsingGET2Response().pipe(
      __map(_r => _r.body as Array<OrderItemRes>)
    );
  }

  /**
   * create
   * @param orderItem orderItem
   * @return Created
   */
  createUsingPOST2Response(orderItem: OrderItemReq): __Observable<__StrictHttpResponse<OrderItemRes>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = orderItem;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/order-item`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<OrderItemRes>;
      })
    );
  }
  /**
   * create
   * @param orderItem orderItem
   * @return Created
   */
  createUsingPOST2(orderItem: OrderItemReq): __Observable<OrderItemRes> {
    return this.createUsingPOST2Response(orderItem).pipe(
      __map(_r => _r.body as OrderItemRes)
    );
  }

  /**
   * get
   * @param id id
   * @return OK
   */
  getUsingGET2Response(id: number): __Observable<__StrictHttpResponse<OrderItemRes>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/order-item/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<OrderItemRes>;
      })
    );
  }
  /**
   * get
   * @param id id
   * @return OK
   */
  getUsingGET2(id: number): __Observable<OrderItemRes> {
    return this.getUsingGET2Response(id).pipe(
      __map(_r => _r.body as OrderItemRes)
    );
  }

  /**
   * update
   * @param params The `OrderItemControllerService.UpdateUsingPUT2Params` containing the following parameters:
   *
   * - `orderItem`: orderItem
   *
   * - `id`: id
   *
   * @return OK
   */
  updateUsingPUT2Response(params: OrderItemControllerService.UpdateUsingPUT2Params): __Observable<__StrictHttpResponse<OrderItemRes>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.orderItem;

    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/order-item/${encodeURIComponent(params.id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<OrderItemRes>;
      })
    );
  }
  /**
   * update
   * @param params The `OrderItemControllerService.UpdateUsingPUT2Params` containing the following parameters:
   *
   * - `orderItem`: orderItem
   *
   * - `id`: id
   *
   * @return OK
   */
  updateUsingPUT2(params: OrderItemControllerService.UpdateUsingPUT2Params): __Observable<OrderItemRes> {
    return this.updateUsingPUT2Response(params).pipe(
      __map(_r => _r.body as OrderItemRes)
    );
  }
}

module OrderItemControllerService {

  /**
   * Parameters for updateUsingPUT2
   */
  export interface UpdateUsingPUT2Params {

    /**
     * orderItem
     */
    orderItem: OrderItemReq;

    /**
     * id
     */
    id: number;
  }
}

export { OrderItemControllerService }
