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
  static readonly listUsingGET4Path = '/api/products';
  static readonly createUsingPOST3Path = '/api/products';
  static readonly listByCategoryUsingGETPath = '/api/products/cat/{categoryId}';
  static readonly getUsingGET4Path = '/api/products/id/{id}';
  static readonly getUsingGET5Path = '/api/products/{name}';

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
  listUsingGET4Response(): __Observable<__StrictHttpResponse<Array<Product>>> {
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
  listUsingGET4(): __Observable<Array<Product>> {
    return this.listUsingGET4Response().pipe(
      __map(_r => _r.body as Array<Product>)
    );
  }

  /**
   * create
   * @param product product
   * @return Created
   */
  createUsingPOST3Response(product: Product): __Observable<__StrictHttpResponse<Product>> {
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
  createUsingPOST3(product: Product): __Observable<Product> {
    return this.createUsingPOST3Response(product).pipe(
      __map(_r => _r.body as Product)
    );
  }

  /**
   * listByCategory
   * @param categoryId categoryId
   * @return OK
   */
  listByCategoryUsingGETResponse(categoryId: number): __Observable<__StrictHttpResponse<Array<Product>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/products/cat/${encodeURIComponent(categoryId)}`,
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
   * listByCategory
   * @param categoryId categoryId
   * @return OK
   */
  listByCategoryUsingGET(categoryId: number): __Observable<Array<Product>> {
    return this.listByCategoryUsingGETResponse(categoryId).pipe(
      __map(_r => _r.body as Array<Product>)
    );
  }

  /**
   * get
   * @param id id
   * @return OK
   */
  getUsingGET4Response(id: number): __Observable<__StrictHttpResponse<Product>> {
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
  getUsingGET4(id: number): __Observable<Product> {
    return this.getUsingGET4Response(id).pipe(
      __map(_r => _r.body as Product)
    );
  }

  /**
   * get
   * @param name name
   * @return OK
   */
  getUsingGET5Response(name: string): __Observable<__StrictHttpResponse<Product>> {
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
  getUsingGET5(name: string): __Observable<Product> {
    return this.getUsingGET5Response(name).pipe(
      __map(_r => _r.body as Product)
    );
  }
}

module ProductControllerService {
}

export { ProductControllerService }
