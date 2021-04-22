import { Component, OnInit } from '@angular/core';
import { UserService } from "../../../services/user/user.service";

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css']
})
export class SideComponent implements OnInit {

  allMatches: any = [];
  users: any = [];
  user = JSON.parse(<string>localStorage.getItem('user'));

  constructor(
      private service: UserService
  ) { }

  ngOnInit(): void {
    this.matches();
  }

  matches() {
    this.service
        .match(this.user._id)
        .subscribe((response: any) => {
          this.allMatches = response.data;

          this.allMatches.map((match : any) => {
            let id = match._id;

            this.service
                .single(id)
                .subscribe((response: any) => {
                  this.users.push(response.data);
                })
          })
        })
  }
}
