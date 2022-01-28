import { BrowserModule } from '@angular/platform-browser';
import { Injectable, NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { IconModule, IconSetModule, IconSetService } from '@coreui/icons-angular';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule, routes } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';
import { JobOwnerComponent } from './job-owner/job-owner.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { FreeLancerComponent } from './free-lancer/free-lancer.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ProjetService } from './services/projet.service';
import { HttpClientModule, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TestComponent } from './test/test.component';
import { FormsModule } from '@angular/forms';
import { CandidatureComponent } from './candidature/candidature.component';
import { EvaluationEntrepriseComponent } from './evaluation-entreprise/evaluation-entreprise.component';
import { EvaluationCandidatComponent } from './evaluation-candidat/evaluation-candidat.component';
import { RouterModule } from '@angular/router';
import { AppService } from './app.service';

@Injectable()
export class XhrInterceptor implements HttpInterceptor {
intercept(req:HttpRequest<any>, next: HttpHandler){
  const xhr=req.clone({
    headers: req.headers.set('X-Requested-With','XMLHttpRequest')
  });
  return next.handle(xhr);
}
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    IconModule,
    IconSetModule.forRoot(),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    JobOwnerComponent,
    UtilisateursComponent,
    FreeLancerComponent,
    EditUserComponent,
    TestComponent,
    CandidatureComponent,
    EvaluationEntrepriseComponent,
    EvaluationCandidatComponent
  ],
  providers: [
    AppService,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    IconSetService,
    {provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi:true},
    ProjetService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

