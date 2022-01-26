import { Component, OnInit } from '@angular/core';
import { Candidature } from '../models/candidature';
import { CandidatureService } from '../services/candidature.service';

@Component({
  selector: 'app-candidature',
  templateUrl: './candidature.component.html',
  styleUrls: ['./candidature.component.scss']
})
export class CandidatureComponent implements OnInit {
  candidatures:any;
  candidature: Candidature = new Candidature();

  constructor(private candidatureService: CandidatureService) { }

  ngOnInit(): void {
    this.findAll();
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
