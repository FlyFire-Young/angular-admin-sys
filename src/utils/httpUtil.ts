import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';

@Injectable()
export class HTTP {

  constructor(private http: HttpClient) {

  }

  get<T>(url: string, params: any, token?: string): Observable<T> {
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-type', 'application/json; charset=UTF-8');
    // headers.append('x-auth-token', token);
    headers.append('Access-Control-Allow-Origin', '*');
    return this.http.get<T>(url, {
      params: params,
      headers: headers,
    });
  }

  post<T>(url: string, params: any, token?: string): Observable<T> {
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-type', 'application/json; charset=UTF-8');
    // headers.append('x-auth-token', token);
    headers.append('Access-Control-Allow-Origin', '*');
    return this.http.post<T>(url, params, {
      headers: headers
    });
  }
}
