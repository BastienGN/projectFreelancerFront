import { HttpClient } from '@angular/common/http';
import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../../app.service';
import { navItems } from '../../_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;

  constructor(private httpClient:HttpClient, private appService:AppService, private router:Router){}

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  logout(){
    this.httpClient.post("http://localhost:8080/logout",{}).subscribe(()=>{
      this.appService.authenticated=false;
      this.appService.isAdmin=false;
      this.appService.isJobowner=false;
      this.appService.isFreelancer=false;
      this.router.navigateByUrl('/login');
    })
  }
}
