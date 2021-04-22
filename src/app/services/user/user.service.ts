import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = environment.baseURL + 'auth/';

  constructor(
      private http: HttpClient
  ) { }

  all(id: string) {
    return this.http.get(this.userUrl + 'all/' + id);
  }

  match(id: string) {
    return this.http.get(this.userUrl + 'matches/' + id);
  }

  single(id: string) {
    return this.http.get(this.userUrl + '/' + id);
  }
}
