import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  public get(url: string): Observable<any> {
    return this.http.get(url); // GET a http://localhost:3000/users
  }

  public post(url:string, body:any): Observable<any> {
    return this.http.post(url, body); // POST a http://localhost:3000/users
  }
}
