import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../models/utilisateur';
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
 
 

  constructor(private utilisateurService: UtilisateurService) {}

  ngOnInit(): void {
    this.findAllJobowner();
  }

  findAllJobowner() {
    this.utilisateurService.findByRole("jobowner").subscribe(data => { this.jobowners = data });
  }
  deleteJobowner(id: number) {
    this.utilisateurService.delete(id).subscribe(() => { this.findAllJobowner() });
  }
  
  saveJobowner() {
    this.utilisateurService.save(this.utilisateur).subscribe(
      () => { this.findAllJobowner(); this.utilisateur = new Utilisateur(); })}
    

  findOne(id: number) {
    this.utilisateurService.findOne(id).subscribe(data => { this.utilisateur = data });
  }

  /*
  editJobOwner(user:Utilisateur){
    localStorage.removeItem("editUserId");
    localStorage.setItem("editUserId",user.idUtilisateur.toString());
    this.router.navigate(['base/editUser', user.idUtilisateur]);
  }
  */
}
