import { Component, OnInit } from '@angular/core';
import { EvaluationCandidat } from '../models/evaluation-candidat';
import { EvaluationCandidatService } from '../services/evaluation-candidat.service';

@Component({
  selector: 'app-evaluation-candidat',
  templateUrl: './evaluation-candidat.component.html',
  styleUrls: ['./evaluation-candidat.component.scss']
})
export class EvaluationCandidatComponent implements OnInit {
  evaluationCandidats:any;
  evaluationCandidat: EvaluationCandidat = new EvaluationCandidat();

  constructor(private evaluationCandidatService: EvaluationCandidatService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.evaluationCandidatService.findAll().subscribe(data => { this.evaluationCandidats = data });
  }
  deleteEvaluationCandidat(id: number) {
    this.evaluationCandidatService.delete(id).subscribe(() => { this.findAll() });
  }

  saveEvaluationCandidat() {
    this.evaluationCandidatService.save(this.evaluationCandidat).subscribe(
      () => { this.findAll(); this.evaluationCandidat = new EvaluationCandidat(); })}
      

  findOne(id: number) {
    this.evaluationCandidatService.findOne(id).subscribe(data => { this.evaluationCandidat = data });
  }
}

