import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { EvaluationCandidat } from '../models/evaluation-candidat';
@Injectable({
  providedIn: 'root'
})
export class EvaluationCandidatService {
  private baseURL= "http://localhost:8080/evaluationCandidats";
  private baseURL2= "http://localhost:8080/ec";
  constructor(private httpClient: HttpClient) { }

  public findAll(): Observable<any> {
    return this.httpClient.get(this.baseURL);
  }

  public findOne(idEC:number):Observable<any>{
    return this.httpClient.get(this.baseURL + "/" + idEC);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete(this.baseURL + "/" + id);
  }

  public save(evaluationCandidat: EvaluationCandidat): Observable<any>{
    return this.httpClient.post(this.baseURL, evaluationCandidat);
  }

  public findAllNote(username: string):Observable<any>{
    return this.httpClient.get(this.baseURL2 + "/" + username);
  }
}
