import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RecoverComponent } from './recover/recover.component';
import { AuthRoutingModule } from './auth-routing.module';
import { JwtTokenService } from './services/jwt-token.service';
import { SharedModule } from '../../share.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    AuthRoutingModule
  ],
  declarations: [AuthComponent,LoginComponent,RegisterComponent,RecoverComponent],
  exports: [AuthComponent,LoginComponent,RegisterComponent,RecoverComponent],
  providers: []
})
export class AuthModule { }
