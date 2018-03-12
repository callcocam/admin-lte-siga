import { Component, OnInit } from "@angular/core";

import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";
import { SharedService } from "../../../services/shared.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  redirectAfterLogin = ["/admin/dashboard"];
  constructor(
    private router: Router,
    private formBilder: FormBuilder,
    private sharedService: SharedService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBilder.group({
      email: this.formBilder.control("", [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern(this.sharedService.email)
      ]),
      password: this.formBilder.control("", [
        Validators.required,
        Validators.minLength(5)
      ])
    });
  }

  login(data) {
    console.log(data)
    this.authService.login(data).subscribe(response => {
      this.authService.check = true;
      this.authService.jwtToken.token = response.result.token;
      this.authService.localStorage.setObject(
        this.authService.USER_KEY,
        response.result.user
      );
      this.router.navigate(this.redirectAfterLogin);
    });
  }
}
