import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { EvaluationCandidat } from '../models/evaluation-candidat';
@Injectable({
  providedIn: 'root'
})
export class EvaluationCandidatService {
  private baseURL= "http://localhost:8080/evaluationCandidats";
  constructor(private httpClient: HttpClient) { }

  public findAll(): Observable<any> {
    return this.httpClient.get(this.baseURL);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete(this.baseURL + "/" + id);
  }

  public save(evaluationCandidat: EvaluationCandidat): Observable<any>{
    return this.httpClient.post(this.baseURL, evaluationCandidat);
    }
}
