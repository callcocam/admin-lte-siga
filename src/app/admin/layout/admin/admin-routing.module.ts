import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContentComponent } from './dashboard/content/content.component';
import { AdminComponent } from './admin.component';
import { AuthGuardRouterService } from '../auth/services/auth-guard-router.service';
import { AuthGuestRouterService } from '../auth/services/auth-guest-router.service';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'admin',
        component: AdminComponent,
        children: [
          {
            path: '',
            redirectTo: 'dashboard',
            pathMatch: 'full'
          },
          {
            path: 'dashboard',
            component: ContentComponent,
            data: { breadcrumb: 'DashBoard'}
          },
          {
            path: 'operacional/cidades',
            loadChildren: "./operacional/citys/city.module#CityModule",
            canActivate: [AuthGuardRouterService],
            data: { breadcrumb: 'Cidades'}
          },
         
        ],
        canActivate: [AuthGuardRouterService],
        data: { breadcrumb: 'Admin'}
      },
      {
        path: 'admin/auth',
        loadChildren: "../auth/auth.module#AuthModule",
        canActivate: [AuthGuestRouterService]
      },
      { path: '**', component: NotFoundComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
