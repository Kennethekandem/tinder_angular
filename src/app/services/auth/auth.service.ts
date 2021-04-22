import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authUrl = environment.baseURL + 'auth';
  constructor(
      private http: HttpClient,
      private router: Router
  ) { }

  login(user : any) {
    return this.http.post(this.authUrl + '/login', user);
  }

  loggedIn() {
    return !!localStorage.getItem('accessToken');
  }

  getToken() {
    return localStorage.getItem('accessToken');
  }

  register(formData : any) {
    return this.http.post(this.authUrl + '/register', formData);
  }
}
