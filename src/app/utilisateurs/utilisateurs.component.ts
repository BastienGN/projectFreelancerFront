import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { Utilisateur } from '../models/utilisateur';
import { UtilisateurService } from '../services/utilisateur.service';

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.scss']
})
export class UtilisateursComponent implements OnInit {

  utilisateur: Utilisateur=new Utilisateur;
  utilisateurs:any;
  cv?: File;
  jobowner: Utilisateur=new Utilisateur();
  jobowners: any;
  freelancer: Utilisateur=new Utilisateur();
  freelancers:any;
  // router2:Router;


  constructor(private utilisateurService:UtilisateurService,public router: Router, private appService: AppService) { }

  isCollapsed: boolean = false;
  iconCollapse: string = 'icon-arrow-up';

  ngOnInit(): void {
    console.log(this.router.url);
    this.findAllUtilisateurs();
    this.findAllFreeLancer();
    this.findAllJobowner();
  }
  findAllUtilisateurs() {
    this.utilisateurService.findAll().subscribe(data => { this.utilisateurs = data });
  }
  deleteUtilisateur(id: number) {
    this.utilisateurService.delete(id).subscribe(() => { this.findAllUtilisateurs() });
  }

  saveUtilisateur() {
    this.utilisateurService.save(this.utilisateur).subscribe(
      () => { this.findAllUtilisateurs(); this.utilisateur = new Utilisateur(); })}
      
  findAllFreeLancer() {
        this.utilisateurService.findByRole("freelancer").subscribe(data => { this.freelancers = data });
      }
  deleteFreeLancer(id: number) {
        this.utilisateurService.delete(id).subscribe(() => { this.findAllFreeLancer() });
      }
  findAllJobowner() {
        this.utilisateurService.findByRole("jobowner").subscribe(data => { this.jobowners = data });
      }
  deleteJobowner(id: number) {
        this.utilisateurService.delete(id).subscribe(() => { this.findAllJobowner() });
      }
      


  findOne(id: number) {
    this.utilisateurService.findOne(id).subscribe(data => { this.utilisateur = data });
  }

  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
    this.iconCollapse = this.isCollapsed ? 'icon-arrow-down' : 'icon-arrow-up';
  }

  authenticated(){
    return this.appService.authenticated;
  }
  logAdmin(){
    if(this.appService.isAdmin==false){
      return true;
    }
    else{
      return false;
    }
  }

}
