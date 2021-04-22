import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../services/auth/auth.service";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  user = {};
  loginData: any = {};

  form: any = FormGroup;

  constructor(
      private service: AuthService,
      private router: Router,
      private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

      this.form = this.formBuilder.group({
          name: [''],
          email: [''],
          phone: [''],
          password: [''],
          age: [''],
          gender: [''],
          location: [''],
          profile_photo: [''],
      })
  }

    profilePhoto(event : any) {
        const profile = event.target.files[0];
        this.form.get('profile_photo').setValue(profile);
    }

  add() {

      const formData = new FormData();

      formData.append('name', this.form.get('name').value);
      formData.append('email', this.form.get('email').value);
      formData.append('phone', this.form.get('phone').value);
      formData.append('password', this.form.get('password').value);
      formData.append('age', this.form.get('age').value);
      formData.append('gender', this.form.get('gender').value);
      formData.append('location', this.form.get('location').value);
      formData.append('profile_photo', this.form.get('profile_photo').value);

      this.service
          .register(formData)
          .subscribe((response: any) => {
              this.user = response.data._doc;
              this.getUser();
              localStorage.setItem('accessToken', response.data.accessToken);
              this.router.navigate(['/home']);
          })
  }

  login() {
    this.service
        .login(this.loginData)
        .subscribe((data: any) => {

            this.user = data.data._doc;
            this.getUser();
              localStorage.setItem('accessToken', data.data.accessToken);
              this.router.navigate(['/home']);
            },
            error => {

            })
  }

  getUser() {
      localStorage.setItem('user', JSON.stringify(this.user));
  }
}
