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
  static readonly listUsingGET5Path = '/api/users';
  static readonly createUsingPOST4Path = '/api/users';
  static readonly loginUsingPOSTPath = '/api/users/login';
  static readonly getUsingGET6Path = '/api/users/{id}';
  static readonly updateUsingPUT3Path = '/api/users/{id}';

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
  listUsingGET5Response(): __Observable<__StrictHttpResponse<Array<User>>> {
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
  listUsingGET5(): __Observable<Array<User>> {
    return this.listUsingGET5Response().pipe(
      __map(_r => _r.body as Array<User>)
    );
  }

  /**
   * create
   * @param user user
   * @return Created
   */
  createUsingPOST4Response(user: User): __Observable<__StrictHttpResponse<User>> {
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
  createUsingPOST4(user: User): __Observable<User> {
    return this.createUsingPOST4Response(user).pipe(
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
  getUsingGET6Response(id: number): __Observable<__StrictHttpResponse<User>> {
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
  getUsingGET6(id: number): __Observable<User> {
    return this.getUsingGET6Response(id).pipe(
      __map(_r => _r.body as User)
    );
  }

  /**
   * update
   * @param params The `UserControllerService.UpdateUsingPUT3Params` containing the following parameters:
   *
   * - `user`: user
   *
   * - `id`: id
   *
   * @return OK
   */
  updateUsingPUT3Response(params: UserControllerService.UpdateUsingPUT3Params): __Observable<__StrictHttpResponse<User>> {
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
   * @param params The `UserControllerService.UpdateUsingPUT3Params` containing the following parameters:
   *
   * - `user`: user
   *
   * - `id`: id
   *
   * @return OK
   */
  updateUsingPUT3(params: UserControllerService.UpdateUsingPUT3Params): __Observable<User> {
    return this.updateUsingPUT3Response(params).pipe(
      __map(_r => _r.body as User)
    );
  }
}

module UserControllerService {

  /**
   * Parameters for updateUsingPUT3
   */
  export interface UpdateUsingPUT3Params {

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
