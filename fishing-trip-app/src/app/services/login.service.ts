import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  login(email: string, password: string) : Observable<HttpResponse<Login>> {
    let base = this.http.post<HttpResponse<Login>>(
      "/api/users/login",
      {
        email: email,
        password: password
      }
    )

    return base;
  }
}
