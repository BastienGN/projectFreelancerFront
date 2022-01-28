import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Utilisateur } from '../models/utilisateur';
import { UtilisateurService } from '../services/utilisateur.service';

@Component({
  selector: 'app-free-lancer',
  templateUrl: './free-lancer.component.html',
  styleUrls: ['./free-lancer.component.scss']
})
export class FreeLancerComponent implements OnInit {

utilisateur:Utilisateur = new Utilisateur;
freelancers:any;
utilisateurService: UtilisateurService;
cv?: File;

constructor(/*@Inject(DOCUMENT) private _document: any*/private freelancerService: UtilisateurService, private appService: AppService) {}
 
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
    this.findAllFreeLancer();
  }
  findAllFreeLancer() {
    this.freelancerService.findByRole("freelancer").subscribe(data => { this.freelancers = data });
  }
  deleteFreeLancer(id: number) {
    this.freelancerService.delete(id).subscribe(() => { this.findAllFreeLancer() });
  }

  saveFreeLancer() {
    this.freelancerService.save(this.utilisateur).subscribe(
      () => { this.findAllFreeLancer(); this.utilisateur = new Utilisateur(); })}
      

  findOne(id: number) {
    this.freelancerService.findOne(id).subscribe(data => { this.utilisateur = data });
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

}



/*
function getStyle(arg0: string, el: HTMLElement) {
  throw new Error('Function not implemented.');
}

function rgbToHex(background: any) {
  throw new Error('Function not implemented.');
}*/

