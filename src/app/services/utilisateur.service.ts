import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Utilisateur } from '../models/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  private baseURL= "http://localhost:8080/utilisateurs";
  constructor(private httpClient: HttpClient) { }

  public findAll(): Observable<any> {
    return this.httpClient.get(this.baseURL);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete(this.baseURL + "/" + id);
  }

  public save(cv:File, utilisateur: Utilisateur): Observable<any>{
    const formData: FormData = new FormData();
    formData.append('nomUtilisateur', utilisateur.nomUtilisateur);
    formData.append('prenomUtilisateur', utilisateur.prenomUtilisateur);
    formData.append('username',utilisateur.username);
    formData.append('password',utilisateur.password);
    formData.append('adresseMail', utilisateur.adresseMail);
    formData.append('telephone', utilisateur.telephone);
    formData.append('note', utilisateur.note);
    formData.append('cv',cv);
    const req = new HttpRequest('POST',this.baseURL,formData, {reportProgress: true, responseType: 'text'});
    return this.httpClient.request(req);
    } 
}
