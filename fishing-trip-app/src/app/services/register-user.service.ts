import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {

  constructor(
    private http: HttpClient
  ) { }

  register(name: string, email: string, password: string) : Observable<HttpResponse<User>> {
    return this.http.post<HttpResponse<User>>('api/users',
    {
      name: name, 
      email: email, 
      password: password
    });
  }
}
