import { Injectable } from '@angular/core';
import { timer } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(username: string, password: string, rememberMe: boolean) {
    return timer(1000).pipe(map(t => {
      return {
        username: username,
        password: password,
        rememberMe: rememberMe
      }
    }));
  }
}
