import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardsComponent } from './cards.component';
import { FormsComponent } from './forms.component';
import { SwitchesComponent } from './switches.component';
import { TablesComponent } from './tables.component';
import { TabsComponent } from './tabs.component';
import { CarouselsComponent } from './carousels.component';
import { CollapsesComponent } from './collapses.component';
import { PaginationsComponent } from './paginations.component';
import { PopoversComponent } from './popovers.component';
import { ProgressComponent } from './progress.component';
import { TooltipsComponent } from './tooltips.component';
import { NavbarsComponent } from './navbars/navbars.component';
import { JobOwnerComponent } from '../../job-owner/job-owner.component';
import { UtilisateursComponent } from '../../utilisateurs/utilisateurs.component';
import { FreeLancerComponent } from '../../free-lancer/free-lancer.component';
import { EditUserComponent } from '../../edit-user/edit-user.component';
import { ProjetComponent } from '../../projet/projet.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Base'
    },
    children: [
      {
        path: 'editUser/:id',
        component:EditUserComponent,
      },
      {
        path: 'forms',
        component:FormsComponent,
        data: {
          title: 'Projet'
        }
      },
      {
        path: 'jobowner',
        component: JobOwnerComponent,
        data: {
          title: 'JobOwner'
        }
      },
      {
        path: 'freelancer',
        component:FreeLancerComponent,
        data: {
          title: 'Freelancer'
        }
      },
      {
        path: 'projet',
        component: ProjetComponent,
        data: {
          title: 'Projet'
      }
    },{
        path: 'utilisateurs',
        component: UtilisateursComponent,
        data: {
          title: 'Utilisateur'
        },
        children:[
          {
            path: 'utilisateurs/jobowner',
            component: JobOwnerComponent,
            data: {
              title: 'JobOwner'
            }
          },{
            path: 'utilisateurs/freelancer',
            component: FreeLancerComponent,
            data: {
              title: 'FreeLancers'
            }
          }
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule {}
