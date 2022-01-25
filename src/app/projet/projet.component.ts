import { Component, OnInit } from '@angular/core';
import { Projet } from '../models/projet';
import { ProjetService } from '../services/projet.service';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.scss']
})
export class ProjetComponent implements OnInit {
  projets: any;
  projet: Projet= new Projet();


  constructor(private projetService: ProjetService) { }

  ngOnInit(): void {
  }

  findAll(){
    this.projetService.findAll().subscribe(data =>{this.projets = data});
  }

}
