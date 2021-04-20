import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../services/auth/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  loginData: any = {};

  constructor(
      private service: AuthService,
      private router: Router
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.service
        .login(this.loginData)
        .subscribe((data: any) => {
              localStorage.setItem('accessToken', data.data.accessToken);
              this.router.navigate(['/home']);
            },
            error => {

            })
  }

}
