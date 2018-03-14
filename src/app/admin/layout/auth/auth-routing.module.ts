import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuestRouterService } from './services/auth-guest-router.service';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuardRouterService } from './services/auth-guard-router.service';

@NgModule({
  imports: [
     RouterModule.forChild([
      {
        path: '',
        component: AuthComponent,
        canActivate: [AuthGuestRouterService]
      },
      {
        path: 'login',
        component: LoginComponent,
        canActivate: [AuthGuestRouterService]
      },
      {
        path: 'cadastrar-se',
        component: RegisterComponent,
        canActivate: [AuthGuestRouterService]
      },
      {
        path: 'recuperar-senha',
        component: RegisterComponent,
        canActivate: [AuthGuestRouterService]
      },
      {
        path: 'sair',
        component: LogoutComponent,
        canActivate: [AuthGuardRouterService]
      }
    ])
  ],
  exports:[
    RouterModule
  ]
})
export class AuthRoutingModule { }
