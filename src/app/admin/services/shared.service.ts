import { Injectable } from '@angular/core';
import { JwtTokenService } from '../layout/auth/services/jwt-token.service';
declare var AdminLTE: any;
@Injectable()
export class SharedService {
  public AdminLTE = AdminLTE;
  public email = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  public number = /^[0-9]*$/
  public token;
  constructor(private jwtToken: JwtTokenService) { 
    this.token = jwtToken.token;
    this.selected = this.defaultBindingsStatus[0]
  }
  getToken(){
    return {token:this.token}
  }
 public defaultBindingsStatus = [
    { value: 1, label: 'Ativo' },
    { value: 2, label: 'Inativo' },
    { value: 3, label: 'Lixeira' }
];
public selected;;
}
