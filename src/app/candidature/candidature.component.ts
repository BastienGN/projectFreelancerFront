import { Component, OnInit } from '@angular/core';
import { Candidature } from '../models/candidature';
import { CandidatureService } from '../services/candidature.service';
import { ProjetService } from '../services/projet.service';

@Component({
  selector: 'app-candidature',
  templateUrl: './candidature.component.html',
  styleUrls: ['./candidature.component.scss']
})
export class CandidatureComponent implements OnInit {
  candidatures:any;
  candidature: Candidature;
  projets:Array<string>;

  constructor(private candidatureService: CandidatureService, private projetService: ProjetService) {
    this.projets=[];
    this.findAllProjet();
    this.candidature=new Candidature();
    this.candidature.projet=[];
  }

  ngOnInit(): void {
    this.findAll();  
  }

  findAllProjet(){
    this.projetService.findAll().subscribe((projets:Array<string>) => { this.projets = projets; console.log(this.projets) });
  }

  findAll() {
    this.candidatureService.findAll().subscribe(data => { this.candidatures = data });
  }
  deleteCandidature(id: number) {
    this.candidatureService.delete(id).subscribe(() => { this.findAll() });
  }

  saveCandidature() {
    this.candidatureService.save(this.candidature).subscribe(
      () => { this.findAll(); this.candidature = new Candidature(); })}
      

  findOne(id: number) {
    this.candidatureService.findOne(id).subscribe(data => { this.candidature = data });
  }

}