import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Utilisateur } from '../models/utilisateur';
import { UtilisateurService } from '../services/utilisateur.service';

@Component({
  selector: 'app-free-lancer',
  templateUrl: './free-lancer.component.html',
  styleUrls: ['./free-lancer.component.scss']
})
export class FreeLancerComponent implements OnInit {

freelancer:Utilisateur = new Utilisateur;
freelancers:any;
utilisateurService: UtilisateurService;
cv?: File;

constructor(/*@Inject(DOCUMENT) private _document: any*/private freelancerService: UtilisateurService) {}
 
/*
  public themeColors(): void {
    Array.from(this._document.querySelectorAll('.theme-color')).forEach((el: HTMLElement) => {
      const background = getStyle('background-color', el);
      const table = this._document.createElement('table');
      table.innerHTML = `
        <table class="w-100">
          <tr>
            <td class="text-muted">HEX:</td>
            <td class="font-weight-bold">${rgbToHex(background)}</td>
          </tr>
          <tr>
            <td class="text-muted">RGB:</td>
            <td class="font-weight-bold">${background}</td>
          </tr>
        </table>
      `;
      el.parentNode.appendChild(table);
    });
  }
  */
  ngOnInit(): void {
    this.findAll();
  }
  findAll() {
    this.freelancerService.findAll().subscribe(data => { this.freelancers = data });
  }
  deleteFreeLancer(id: number) {
    this.freelancerService.delete(id).subscribe(() => { this.findAll() });
  }

  saveFreeLancer() {
    this.freelancerService.save(this.cv,this.freelancer).subscribe(
      () => { this.findAll(); this.freelancer = new Utilisateur(); })}
      

  findOne(id: number) {
    this.freelancerService.findOne(id).subscribe(data => { this.freelancer = data });
  }

}
/*
function getStyle(arg0: string, el: HTMLElement) {
  throw new Error('Function not implemented.');
}

function rgbToHex(background: any) {
  throw new Error('Function not implemented.');
}*/

