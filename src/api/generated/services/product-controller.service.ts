/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Product } from '../models/product';

/**
 * Product Controller
 */
@Injectable({
  providedIn: 'root',
})
class ProductControllerService extends __BaseService {
  static readonly listUsingGET1Path = '/api/products';
  static readonly createUsingPOST1Path = '/api/products';
  static readonly getUsingGET1Path = '/api/products/id/{id}';
  static readonly getUsingGET2Path = '/api/products/{name}';

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
  listUsingGET1Response(): __Observable<__StrictHttpResponse<Array<Product>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/products`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Product>>;
      })
    );
  }
  /**
   * list
   * @return OK
   */
  listUsingGET1(): __Observable<Array<Product>> {
    return this.listUsingGET1Response().pipe(
      __map(_r => _r.body as Array<Product>)
    );
  }

  /**
   * create
   * @param product product
   * @return Created
   */
  createUsingPOST1Response(product: Product): __Observable<__StrictHttpResponse<Product>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = product;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/products`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Product>;
      })
    );
  }
  /**
   * create
   * @param product product
   * @return Created
   */
  createUsingPOST1(product: Product): __Observable<Product> {
    return this.createUsingPOST1Response(product).pipe(
      __map(_r => _r.body as Product)
    );
  }

  /**
   * get
   * @param id id
   * @return OK
   */
  getUsingGET1Response(id: number): __Observable<__StrictHttpResponse<Product>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/products/id/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Product>;
      })
    );
  }
  /**
   * get
   * @param id id
   * @return OK
   */
  getUsingGET1(id: number): __Observable<Product> {
    return this.getUsingGET1Response(id).pipe(
      __map(_r => _r.body as Product)
    );
  }

  /**
   * get
   * @param name name
   * @return OK
   */
  getUsingGET2Response(name: string): __Observable<__StrictHttpResponse<Product>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/products/${encodeURIComponent(name)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Product>;
      })
    );
  }
  /**
   * get
   * @param name name
   * @return OK
   */
  getUsingGET2(name: string): __Observable<Product> {
    return this.getUsingGET2Response(name).pipe(
      __map(_r => _r.body as Product)
    );
  }
}

module ProductControllerService {
}

export { ProductControllerService }
