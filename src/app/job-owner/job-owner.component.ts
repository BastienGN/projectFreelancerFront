import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Event, Navigation, NavigationBehaviorOptions, NavigationExtras, Router, RouteReuseStrategy, RouterState, Routes, UrlCreationOptions, UrlHandlingStrategy, UrlSerializer, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Utilisateur } from '../models/utilisateur';

@Component({
  selector: 'app-job-owner',
  templateUrl: './job-owner.component.html',
  styleUrls: ['./job-owner.component.scss']
})
export class JobOwnerComponent implements OnInit{
  currentFileUpload: File;
  selectedFiles: any;
  utilisateur: any;
  utilisateurService: any;
  findAll: any;

  constructor(@Inject(DOCUMENT) private _document: any, private router:Router ) {}
  config: Routes;
  events: Observable<Event>;
  routerState: RouterState;
  errorHandler: (error: any) => any;
  malformedUriErrorHandler: (error: URIError, urlSerializer: UrlSerializer, url: string) => UrlTree;
  navigated: boolean;
  urlHandlingStrategy: UrlHandlingStrategy;
  routeReuseStrategy: RouteReuseStrategy;
  onSameUrlNavigation: 'reload' | 'ignore';
  paramsInheritanceStrategy: 'emptyOnly' | 'always';
  urlUpdateStrategy: 'deferred' | 'eager';
  relativeLinkResolution: 'legacy' | 'corrected';
  initialNavigation(): void {
    throw new Error('Method not implemented.');
  }
  setUpLocationChangeListener(): void {
    throw new Error('Method not implemented.');
  }
  get url(): string {
    throw new Error('Method not implemented.');
  }
  getCurrentNavigation(): Navigation {
    throw new Error('Method not implemented.');
  }
  resetConfig(config: Routes): void {
    throw new Error('Method not implemented.');
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  dispose(): void {
    throw new Error('Method not implemented.');
  }
  createUrlTree(commands: any[], navigationExtras?: UrlCreationOptions): UrlTree {
    throw new Error('Method not implemented.');
  }
  navigateByUrl(url: string | UrlTree, extras?: NavigationBehaviorOptions): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  navigate(commands: any[], extras?: NavigationExtras): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  serializeUrl(url: UrlTree): string {
    throw new Error('Method not implemented.');
  }
  parseUrl(url: string): UrlTree {
    throw new Error('Method not implemented.');
  }
  isActive(url: string | UrlTree, exact: boolean): boolean {
    throw new Error('Method not implemented.');
  }

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
  ngOnInit(): void {
  }

  editJobOwner(user:Utilisateur){
    localStorage.removeItem("editUserId");
    localStorage.setItem("editUserId",user.idUtilisateur.toString());
    this.router.navigate(['base/editUser', user.idUtilisateur]);
  }
  saveJobOwner(){
    this.currentFileUpload = this.selectedFiles?.item(0) as File; 
    this.utilisateurService.save(this.currentFileUpload, this.utilisateur).subscribe(
      () => {this.findAll(); this.utilisateur = new Utilisateur(); this.selectedFiles = undefined;}
    )
   }

}
function getStyle(arg0: string, el: HTMLElement) {
  throw new Error('Function not implemented.');
}

function rgbToHex(background: void) {
  throw new Error('Function not implemented.');
}

