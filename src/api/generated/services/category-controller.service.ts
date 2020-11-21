/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Category } from '../models/category';

/**
 * Category Controller
 */
@Injectable({
  providedIn: 'root',
})
class CategoryControllerService extends __BaseService {
  static readonly listUsingGETPath = '/api/category';
  static readonly createUsingPOSTPath = '/api/category';
  static readonly getUsingGETPath = '/api/category/{id}';
  static readonly updateUsingPUTPath = '/api/category/{id}';

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
  listUsingGETResponse(): __Observable<__StrictHttpResponse<Array<Category>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/category`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Category>>;
      })
    );
  }
  /**
   * list
   * @return OK
   */
  listUsingGET(): __Observable<Array<Category>> {
    return this.listUsingGETResponse().pipe(
      __map(_r => _r.body as Array<Category>)
    );
  }

  /**
   * create
   * @param category category
   * @return Created
   */
  createUsingPOSTResponse(category: Category): __Observable<__StrictHttpResponse<Category>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = category;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/category`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Category>;
      })
    );
  }
  /**
   * create
   * @param category category
   * @return Created
   */
  createUsingPOST(category: Category): __Observable<Category> {
    return this.createUsingPOSTResponse(category).pipe(
      __map(_r => _r.body as Category)
    );
  }

  /**
   * get
   * @param id id
   * @return OK
   */
  getUsingGETResponse(id: number): __Observable<__StrictHttpResponse<Category>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/category/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Category>;
      })
    );
  }
  /**
   * get
   * @param id id
   * @return OK
   */
  getUsingGET(id: number): __Observable<Category> {
    return this.getUsingGETResponse(id).pipe(
      __map(_r => _r.body as Category)
    );
  }

  /**
   * update
   * @param params The `CategoryControllerService.UpdateUsingPUTParams` containing the following parameters:
   *
   * - `products[0].regularPrice`:
   *
   * - `products[0].quantity`:
   *
   * - `products[0].name`:
   *
   * - `products[0].image`:
   *
   * - `products[0].id`:
   *
   * - `products[0].description`:
   *
   * - `products[0].categories[0].parentId`:
   *
   * - `products[0].categories[0].name`:
   *
   * - `products[0].categories[0].id`:
   *
   * - `parentId`:
   *
   * - `name`:
   *
   * - `id`: id
   *
   * @return OK
   */
  updateUsingPUTResponse(params: CategoryControllerService.UpdateUsingPUTParams): __Observable<__StrictHttpResponse<Category>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.products0RegularPrice != null) __params = __params.set('products[0].regularPrice', params.products0RegularPrice.toString());
    if (params.products0Quantity != null) __params = __params.set('products[0].quantity', params.products0Quantity.toString());
    if (params.products0Name != null) __params = __params.set('products[0].name', params.products0Name.toString());
    if (params.products0Image != null) __params = __params.set('products[0].image', params.products0Image.toString());
    if (params.products0Id != null) __params = __params.set('products[0].id', params.products0Id.toString());
    if (params.products0Description != null) __params = __params.set('products[0].description', params.products0Description.toString());
    if (params.products0Categories0ParentId != null) __params = __params.set('products[0].categories[0].parentId', params.products0Categories0ParentId.toString());
    if (params.products0Categories0Name != null) __params = __params.set('products[0].categories[0].name', params.products0Categories0Name.toString());
    if (params.products0Categories0Id != null) __params = __params.set('products[0].categories[0].id', params.products0Categories0Id.toString());
    if (params.parentId != null) __params = __params.set('parentId', params.parentId.toString());
    if (params.name != null) __params = __params.set('name', params.name.toString());
    if (params.id != null) __params = __params.set('id', params.id.toString());
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/category/${encodeURIComponent(params.id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Category>;
      })
    );
  }
  /**
   * update
   * @param params The `CategoryControllerService.UpdateUsingPUTParams` containing the following parameters:
   *
   * - `products[0].regularPrice`:
   *
   * - `products[0].quantity`:
   *
   * - `products[0].name`:
   *
   * - `products[0].image`:
   *
   * - `products[0].id`:
   *
   * - `products[0].description`:
   *
   * - `products[0].categories[0].parentId`:
   *
   * - `products[0].categories[0].name`:
   *
   * - `products[0].categories[0].id`:
   *
   * - `parentId`:
   *
   * - `name`:
   *
   * - `id`: id
   *
   * @return OK
   */
  updateUsingPUT(params: CategoryControllerService.UpdateUsingPUTParams): __Observable<Category> {
    return this.updateUsingPUTResponse(params).pipe(
      __map(_r => _r.body as Category)
    );
  }
}

module CategoryControllerService {

  /**
   * Parameters for updateUsingPUT
   */
  export interface UpdateUsingPUTParams {
    products0RegularPrice?: number;
    products0Quantity?: number;
    products0Name?: string;
    products0Image?: ArrayBuffer;
    products0Id?: number;
    products0Description?: string;
    products0Categories0ParentId?: number;
    products0Categories0Name?: string;
    products0Categories0Id?: number;
    parentId?: number;
    name?: string;

    /**
     * id
     */
    id?: number;
  }
}

export { CategoryControllerService }
