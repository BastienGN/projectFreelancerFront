import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { EvaluationEntreprise } from '../models/evaluation-entreprise';

@Injectable({
  providedIn: 'root'
})
export class EvaluationEntrepriseService {
  private baseURL= "http://localhost:8080/evaluationEntreprises";
  constructor(private httpClient: HttpClient) { }

  public findAll(): Observable<any> {
    return this.httpClient.get(this.baseURL);
  }

  public findOne(idEE: number):Observable<any>{
     return this.httpClient.get(this.baseURL + "/" + idEE);
   }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete(this.baseURL + "/" + id);
  }

  public save(evaluationEntreprise: EvaluationEntreprise): Observable<any>{
    return this.httpClient.post(this.baseURL, evaluationEntreprise);
    }
}
