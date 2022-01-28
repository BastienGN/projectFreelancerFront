import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { Role } from '../models/role';
import { Utilisateur } from '../models/utilisateur';
import { RoleService } from '../services/role.service';
import { UtilisateurService } from '../services/utilisateur.service';

@Component({
  selector: 'app-job-owner',
  templateUrl: './job-owner.component.html',
  styleUrls: ['./job-owner.component.scss']
})
export class JobOwnerComponent implements OnInit{
  currentFileUpload: File;
  selectedFiles: any;
  utilisateur: Utilisateur=new Utilisateur;
  jobowners: any;
  roles:Role[];
 
 

  constructor(private utilisateurService: UtilisateurService, private appService:AppService,private router: Router, private roleService: RoleService) {}

  ngOnInit(): void {
    this.findAllJobowner();
    this.loadRole();
  }

  loadRole(){
    this.roleService.findAll().subscribe(data => {this.roles = data;})
  }

  findAllJobowner() {
    this.utilisateurService.findByRole("jobowner").subscribe(data => { this.jobowners = data });
  }
  deleteJobowner(id: number) {
    this.utilisateurService.delete(id).subscribe(() => { this.findAllJobowner() });
  }
  
  saveJobowner() {
    this.utilisateurService.save(this.utilisateur).subscribe(
      () => { this.findAllJobowner(); this.utilisateur = new Utilisateur()})}
    

  findOne(id: number) {
    this.utilisateurService.findOne(id).subscribe(data => { this.utilisateur = data });
  }

  authenticated(){
    return this.appService.authenticated;
  }
  log(){
    if(this.appService.isAdmin==false){
      return true;
    }
    else{
      return false;
    }
  }

  /*
  editJobOwner(user:Utilisateur){
    localStorage.removeItem("editUserId");
    localStorage.setItem("editUserId",user.idUtilisateur.toString());
    this.router.navigate(['base/editUser', user.idUtilisateur]);
  }
  */
}
