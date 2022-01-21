import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Test } from '../models/test';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  private baseURL= "http://localhost:8080/tests";
  constructor(private httpClient: HttpClient) { }

  public findAll(): Observable<any> {
    return this.httpClient.get(this.baseURL);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete(this.baseURL + "/" + id);
  }

  public save(test: Test): Observable<any>{
    return this.httpClient.post(this.baseURL, test);
    }
}
