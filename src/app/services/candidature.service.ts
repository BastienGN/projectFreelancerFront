import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Candidature } from '../models/candidature';

@Injectable({
  providedIn: 'root'
})
export class CandidatureService {
  private baseURL = "http://localhost:8080/candidatures";
  private baseURL2 = "http://localhost:8080/cands";
  constructor(private httpClient: HttpClient) { }

  public findAll(): Observable<any> {
    return this.httpClient.get(this.baseURL);
  }

  public findOne(idC:number):Observable<any>{
    return this.httpClient.get(this.baseURL + "/" + idC);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete(this.baseURL + "/" + id);
  }

  public save(candidature: Candidature): Observable<any>{
    return this.httpClient.post(this.baseURL, candidature);
  }
  
  public findCandidatureByUsername(username: string):Observable<any>{
    return this.httpClient.get(this.baseURL2 + "/" + username);
  }
}
