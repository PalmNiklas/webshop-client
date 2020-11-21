/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { User } from '../models/user';

/**
 * User Controller
 */
@Injectable({
  providedIn: 'root',
})
class UserControllerService extends __BaseService {
  static readonly listUsingGET2Path = '/api/users';
  static readonly createUsingPOST2Path = '/api/users';
  static readonly loginUsingPOSTPath = '/api/users/login';
  static readonly getUsingGET3Path = '/api/users/{id}';
  static readonly updateUsingPUT1Path = '/api/users/{id}';

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
  listUsingGET2Response(): __Observable<__StrictHttpResponse<Array<User>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/users`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<User>>;
      })
    );
  }
  /**
   * list
   * @return OK
   */
  listUsingGET2(): __Observable<Array<User>> {
    return this.listUsingGET2Response().pipe(
      __map(_r => _r.body as Array<User>)
    );
  }

  /**
   * create
   * @param user user
   * @return Created
   */
  createUsingPOST2Response(user: User): __Observable<__StrictHttpResponse<User>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = user;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/users`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<User>;
      })
    );
  }
  /**
   * create
   * @param user user
   * @return Created
   */
  createUsingPOST2(user: User): __Observable<User> {
    return this.createUsingPOST2Response(user).pipe(
      __map(_r => _r.body as User)
    );
  }

  /**
   * login
   * @param user user
   * @return OK
   */
  loginUsingPOSTResponse(user: User): __Observable<__StrictHttpResponse<User>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = user;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/users/login`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<User>;
      })
    );
  }
  /**
   * login
   * @param user user
   * @return OK
   */
  loginUsingPOST(user: User): __Observable<User> {
    return this.loginUsingPOSTResponse(user).pipe(
      __map(_r => _r.body as User)
    );
  }

  /**
   * get
   * @param id id
   * @return OK
   */
  getUsingGET3Response(id: number): __Observable<__StrictHttpResponse<User>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/users/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<User>;
      })
    );
  }
  /**
   * get
   * @param id id
   * @return OK
   */
  getUsingGET3(id: number): __Observable<User> {
    return this.getUsingGET3Response(id).pipe(
      __map(_r => _r.body as User)
    );
  }

  /**
   * update
   * @param params The `UserControllerService.UpdateUsingPUT1Params` containing the following parameters:
   *
   * - `user`: user
   *
   * - `id`: id
   *
   * @return OK
   */
  updateUsingPUT1Response(params: UserControllerService.UpdateUsingPUT1Params): __Observable<__StrictHttpResponse<User>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.user;

    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/users/${encodeURIComponent(params.id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<User>;
      })
    );
  }
  /**
   * update
   * @param params The `UserControllerService.UpdateUsingPUT1Params` containing the following parameters:
   *
   * - `user`: user
   *
   * - `id`: id
   *
   * @return OK
   */
  updateUsingPUT1(params: UserControllerService.UpdateUsingPUT1Params): __Observable<User> {
    return this.updateUsingPUT1Response(params).pipe(
      __map(_r => _r.body as User)
    );
  }
}

module UserControllerService {

  /**
   * Parameters for updateUsingPUT1
   */
  export interface UpdateUsingPUT1Params {

    /**
     * user
     */
    user: User;

    /**
     * id
     */
    id: number;
  }
}

export { UserControllerService }
