import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'FreeLancer',
    url: '/base/freelancer',
    icon: 'icon-drop'
  },
  {
    name: 'JobOwner',
    url: '/base/jobowner',
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
    name: 'Projets',
    url: '/base/projets',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'JobOwners',
        url: '/base/projets/jobowners',
        icon: 'icon-puzzle'
      },
      {
        name: 'FreeLancers',
        url: '/base/projets/freelancers',
        icon: 'icon-puzzle'
      },
    ]
  },
  {
    name: 'Evaluations',
    url: '/base/evaluations',
    icon: 'icon-star',
    children: [
      {
        name: 'Entreprises',
        url: '/base/evaluations/evaluationEntreprises',
        icon: 'icon-star'
      },
      {
        name: 'FreeLancers',
        url: '/base/evaluations/evaluationFreelancers',
        icon: 'icon-star'
      },
    ]
  },
 
];
