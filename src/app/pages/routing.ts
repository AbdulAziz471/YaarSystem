import { Routes } from '@angular/router';

const Routing: Routes = [
  {
    path: 'apps/roles',
    loadChildren: () => import('./role/role.module').then((m) => m.RoleModule),
  },

  {
    path: '',
    redirectTo: '/apps/roles',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'error/404',
  },
];

export { Routing };
