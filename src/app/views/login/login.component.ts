import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  credentials = {username: '', password: ''}
  constructor(private appService:AppService, private httpClient: HttpClient,private router:Router){}
  login(){
    console.log("username="+this.credentials.username);
    console.log("password="+this.credentials.password);
    this.appService.authenticate(this.credentials,()=>{this.router.navigateByUrl("/dashboard")});
    return false;
  }

  RedirectJobOwner(){
    this.router.navigateByUrl("/base/jobowner");
  }

  RedirectFreelancer(){
    this.router.navigateByUrl("/base/freelancer");
  }
 }
