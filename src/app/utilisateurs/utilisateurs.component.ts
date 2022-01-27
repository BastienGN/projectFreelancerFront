import { Component, OnInit } from '@angular/core';
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


  constructor(private utilisateurService:UtilisateurService) { }

  isCollapsed: boolean = false;
  iconCollapse: string = 'icon-arrow-up';

  ngOnInit(): void {
    this.findAllUtilisateurs();
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

}
