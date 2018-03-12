import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { JwtTokenService } from '../layout/auth/services/jwt-token.service';

@Injectable()
export class DefaultRequestOptionsService {

  

  constructor(private jwtToken:JwtTokenService) { }

  public httpOptions;
   merge(queryString?:any) {
       this.httpOptions = {
           headers: new HttpHeaders({
             'Content-Type':  'application/json',
             'Authorization':`Bearer ${this.jwtToken.token}`
           }),
           params: queryString
         }
      return this.httpOptions;
   }

}
