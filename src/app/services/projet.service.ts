import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Projet } from '../models/projet';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {
  private baseURL= "http://localhost:8080/projets";
  constructor(private httpClient: HttpClient) { }

  public findAll(): Observable<any> {
    return this.httpClient.get(this.baseURL);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete(this.baseURL + "/" + id);
  }

  public save(projet: Projet): Observable<any>{
    return this.httpClient.post(this.baseURL, projet);
    }

   public findOne(idP: number):Observable<any>{
     return this.httpClient.get(this.baseURL+ "/" + idP);
   } 
}
