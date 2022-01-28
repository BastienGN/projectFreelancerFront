import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { EvaluationEntreprise } from '../models/evaluation-entreprise';
import { EvaluationEntrepriseService } from '../services/evaluation-entreprise.service';

@Component({
  selector: 'app-evaluation-entreprise',
  templateUrl: './evaluation-entreprise.component.html',
  styleUrls: ['./evaluation-entreprise.component.scss']
})
export class EvaluationEntrepriseComponent implements OnInit {
  evaluationEntreprises:any;
  evaluationEntreprise: EvaluationEntreprise = new EvaluationEntreprise();

  constructor(private evaluationEntrepriseService: EvaluationEntrepriseService, private appService: AppService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.evaluationEntrepriseService.findAll().subscribe(data => { this.evaluationEntreprises = data });
  }
  deleteEvaluationEntreprise(id: number) {
    this.evaluationEntrepriseService.delete(id).subscribe(() => { this.findAll() });
  }

  saveEvaluationEntreprise() {
    this.evaluationEntrepriseService.save(this.evaluationEntreprise).subscribe(
      () => { this.findAll(); this.evaluationEntreprise = new EvaluationEntreprise(); })}
      

  findOne(id: number) {
    this.evaluationEntrepriseService.findOne(id).subscribe(data => { this.evaluationEntreprise = data });
  }

  authenticated(){
    return this.appService.authenticated;
  }
  log(){
    if(this.appService.isJobowner==true){
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
