import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  showPassword = false;
  username = new FormControl("", [Validators.required]);
  password = new FormControl("", [Validators.required, Validators.minLength(6)])
  rememberMe = new FormControl(false);

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  getErrorMessage(control: FormControl) {
    if (control.valid)
      return "";

    if (control.hasError("required")) {
      return `This field is required.`;
    } else if (control.hasError("minlength")) {
      let error = control.errors["minlength"];
      return `This field has a length requirement: ${error.actualLength}/${error.requiredLength}.`;
    }
  }

  login() {
    console.log("login requested.");
    this.loginService.login(this.username.value, this.password.value, this.rememberMe.value).subscribe(wtf => {
      console.log(wtf);
      this.router.navigateByUrl("/");
    });
  }
}
