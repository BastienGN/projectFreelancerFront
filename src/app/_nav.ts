import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Login / Register',
    url: '/login',
    icon: 'icon-drop'
  },
  {
    name: 'FreeLancers',
    url: '/base/freelancer',
    icon: 'icon-drop'
  },
  {
    name: 'JobOwner',
    url: '/base/jobowner',
    icon: 'icon-pencil'
  },
  {
    name: 'Projet',
    url: '/base/forms',
    icon: 'icon-pencil'
  },
  {
    name: 'Test',
    url: '/base/test',
    icon: 'icon-pencil'
  },
  {
    name: 'Candidature',
    url: '/base/candidature',
    icon: 'icon-pencil'
  },
  {
    name: 'Utilisateurs',
    url: '/base/utilisateurs',
    icon: 'icon-cursor',
    children: [
      {
        name: 'JobOwners',
        url: '/base/utilisateurs/jobowner',
        icon: 'icon-cursor'
      },
      {
        name: 'FreeLancers',
        url: '/base/utilisateurs/freelancer',
        icon: 'icon-cursor'
      },
    ]
  },
  {
    name: 'Evaluations',
    url: '/base/evaluations',
    icon: 'icon-star',
    children: [
      {
        name: 'Evaluation des Entreprises',
        url: '/base/evaluationEntreprise',
        icon: 'icon-star'
      },
      {
        name: 'Evaluation des Candidats',
        url: '/base/evaluationCandidat',
        icon: 'icon-star'
      },
    ]
  },
 
];
