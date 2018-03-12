import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
     RouterModule.forChild([
      {
        path: '',
        component: AuthComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'cadastrar-se',
        component: RegisterComponent
      },
      {
        path: 'recuperar-senha',
        component: RegisterComponent
      }
    ])
  ],
  exports:[
    RouterModule
  ]
})
export class AuthRoutingModule { }
