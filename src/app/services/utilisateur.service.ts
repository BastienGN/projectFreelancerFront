import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Utilisateur } from '../models/utilisateur';
import { Role } from '../models/role';
import { Candidature } from '../models/candidature';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  private baseURL= "http://localhost:8080/utilisateurs";
  private baseURL2= "http://localhost:8080/util";
  private baseURL3= "http://localhost:8080/utilisateurscandidature";
  private baseURL4= "http://localhost:8080/freelancersprojets";
  private baseURL5= "http://localhost:8080/moyennefreelancer";
  private baseURL6= "http://localhost:8080/moyennejobowner";
  private baseURL7= "http://localhost:8080/nombrefreelancer";
  private baseURL8= "http://localhost:8080/nombrejobowner";

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

    public findOne(idU: number):Observable<any>{
      return this.httpClient.get(this.baseURL + "/" + idU);
    }

    public findByIdUtilisateurAndUsername(idU: number, username: string):Observable<any>{
      return this.httpClient.get(this.baseURL+ "/" + idU + "/" + username);
    }

    public findByRole(libelle_role: string): Observable<any>{
      return this.httpClient.get(this.baseURL2 + "/" + libelle_role);
    }

    public findUtilisateurByCandidature(idU: number): Observable<any>{
      return this.httpClient.get(this.baseURL3+ "/" + idU);
    }

    public findFreelancerByProject(idF: number): Observable<any>{
      return this.httpClient.get(this.baseURL4 + "/" + idF);
    }

    public findMoyenneByFreeLancer(idF: number): Observable<any>{
      return this.httpClient.get(this.baseURL5 + "/" + idF);
    }

    public findMoyenneByJobOwner(idJ: number): Observable<any>{
      return this.httpClient.get(this.baseURL6 + "/" + idJ);
    }

    public nombreFreelancer(): Observable<any>{
      return this.httpClient.get(this.baseURL7);
    }

    public nombreJobOwner(): Observable<any>{
      return this.httpClient.get(this.baseURL8);
    }

}
