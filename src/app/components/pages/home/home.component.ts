import { Component, OnInit } from '@angular/core';
import { UserService } from "../../../services/user/user.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: any = [];
  getUser: any = {};
  user = JSON.parse(<string>localStorage.getItem('user'));

  constructor(
      private service: UserService
  ) { }

  ngOnInit(): void {
    this.all();
    this.single()
  }

  all() {

    this.service
        .all(this.user._id)
        .subscribe((response: any) => {
          this.users = response.data;
        })
  }

  single() {
    console.log("hello");
    this.getUser = this.users[Math.floor(Math.random() * this.users.length)];
  }
}
