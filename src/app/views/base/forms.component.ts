import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { Projet } from '../../models/projet';
import { ProjetService } from '../../services/projet.service';

@Component({
  templateUrl: 'forms.component.html'
})
export class FormsComponent implements OnInit {
  projets: any;
  projet: Projet = new Projet();


  constructor(private projetService: ProjetService, private appService: AppService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.projetService.findAll().subscribe(data => { this.projets = data });
  }
  deleteProjet(id: number) {
    this.projetService.delete(id).subscribe(() => { this.findAll() });
  }

  saveProjet() {
    this.projetService.save(this.projet).subscribe(
      () => { this.findAll(); this.projet = new Projet(); })}
      

  findOne(id: number) {
    this.projetService.findOne(id).subscribe(data => { this.projet = data });
  }

  authenticated(){
    return this.appService.authenticated;
  }
  log(){
    if(this.appService.isFreelancer==true){
      return true;
    }
    else{
      return false;
    }
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