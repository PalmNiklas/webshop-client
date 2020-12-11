/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { OrderRes } from '../models/order-res';
import { OrderReq } from '../models/order-req';
import { OrderItemReq } from '../models/order-item-req';

/**
 * Order Controller
 */
@Injectable({
  providedIn: 'root',
})
class OrderControllerService extends __BaseService {
  static readonly listUsingGET1Path = '/api/orders';
  static readonly createUsingPOST1Path = '/api/orders';
  static readonly getActiveOrderUsingGETPath = '/api/orders/activeOrder/{userId}';
  static readonly addItemToOrderUsingPUTPath = '/api/orders/addItem/{orderId}';
  static readonly getUsingGET1Path = '/api/orders/{id}';
  static readonly updateUsingPUT1Path = '/api/orders/{id}';

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
  listUsingGET1Response(): __Observable<__StrictHttpResponse<Array<OrderRes>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/orders`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<OrderRes>>;
      })
    );
  }
  /**
   * list
   * @return OK
   */
  listUsingGET1(): __Observable<Array<OrderRes>> {
    return this.listUsingGET1Response().pipe(
      __map(_r => _r.body as Array<OrderRes>)
    );
  }

  /**
   * create
   * @param order order
   * @return Created
   */
  createUsingPOST1Response(order: OrderReq): __Observable<__StrictHttpResponse<OrderRes>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = order;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/orders`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<OrderRes>;
      })
    );
  }
  /**
   * create
   * @param order order
   * @return Created
   */
  createUsingPOST1(order: OrderReq): __Observable<OrderRes> {
    return this.createUsingPOST1Response(order).pipe(
      __map(_r => _r.body as OrderRes)
    );
  }

  /**
   * getActiveOrder
   * @param userId userId
   * @return OK
   */
  getActiveOrderUsingGETResponse(userId: number): __Observable<__StrictHttpResponse<OrderRes>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/orders/activeOrder/${encodeURIComponent(userId)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<OrderRes>;
      })
    );
  }
  /**
   * getActiveOrder
   * @param userId userId
   * @return OK
   */
  getActiveOrderUsingGET(userId: number): __Observable<OrderRes> {
    return this.getActiveOrderUsingGETResponse(userId).pipe(
      __map(_r => _r.body as OrderRes)
    );
  }

  /**
   * addItemToOrder
   * @param params The `OrderControllerService.AddItemToOrderUsingPUTParams` containing the following parameters:
   *
   * - `orderId`: orderId
   *
   * - `item`: item
   *
   * @return OK
   */
  addItemToOrderUsingPUTResponse(params: OrderControllerService.AddItemToOrderUsingPUTParams): __Observable<__StrictHttpResponse<OrderRes>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.item;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/orders/addItem/${encodeURIComponent(params.orderId)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<OrderRes>;
      })
    );
  }
  /**
   * addItemToOrder
   * @param params The `OrderControllerService.AddItemToOrderUsingPUTParams` containing the following parameters:
   *
   * - `orderId`: orderId
   *
   * - `item`: item
   *
   * @return OK
   */
  addItemToOrderUsingPUT(params: OrderControllerService.AddItemToOrderUsingPUTParams): __Observable<OrderRes> {
    return this.addItemToOrderUsingPUTResponse(params).pipe(
      __map(_r => _r.body as OrderRes)
    );
  }

  /**
   * get
   * @param id id
   * @return OK
   */
  getUsingGET1Response(id: number): __Observable<__StrictHttpResponse<OrderRes>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/orders/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<OrderRes>;
      })
    );
  }
  /**
   * get
   * @param id id
   * @return OK
   */
  getUsingGET1(id: number): __Observable<OrderRes> {
    return this.getUsingGET1Response(id).pipe(
      __map(_r => _r.body as OrderRes)
    );
  }

  /**
   * update
   * @param params The `OrderControllerService.UpdateUsingPUT1Params` containing the following parameters:
   *
   * - `order`: order
   *
   * - `id`: id
   *
   * @return OK
   */
  updateUsingPUT1Response(params: OrderControllerService.UpdateUsingPUT1Params): __Observable<__StrictHttpResponse<OrderRes>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.order;

    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/orders/${encodeURIComponent(params.id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<OrderRes>;
      })
    );
  }
  /**
   * update
   * @param params The `OrderControllerService.UpdateUsingPUT1Params` containing the following parameters:
   *
   * - `order`: order
   *
   * - `id`: id
   *
   * @return OK
   */
  updateUsingPUT1(params: OrderControllerService.UpdateUsingPUT1Params): __Observable<OrderRes> {
    return this.updateUsingPUT1Response(params).pipe(
      __map(_r => _r.body as OrderRes)
    );
  }
}

module OrderControllerService {

  /**
   * Parameters for addItemToOrderUsingPUT
   */
  export interface AddItemToOrderUsingPUTParams {

    /**
     * orderId
     */
    orderId: number;

    /**
     * item
     */
    item: OrderItemReq;
  }

  /**
   * Parameters for updateUsingPUT1
   */
  export interface UpdateUsingPUT1Params {

    /**
     * order
     */
    order: OrderReq;

    /**
     * id
     */
    id: number;
  }
}

export { OrderControllerService }
