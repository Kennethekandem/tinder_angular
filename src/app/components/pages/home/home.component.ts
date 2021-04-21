import { Component, OnInit } from '@angular/core';
import { UserService } from "../../../services/user/user.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: any = [];
  user: any = {};
  id = JSON.parse(<string>localStorage.getItem('user_id'));

  constructor(
      private service: UserService
  ) { }

  ngOnInit(): void {
    this.all();
  }

  all() {

    this.service
        .all(this.id)
        .subscribe((response: any) => {
          this.users = response.data;
        })
  }

  single() {
    this.user = this.users[Math.floor(Math.random() * this.users.length)];
  }
}
