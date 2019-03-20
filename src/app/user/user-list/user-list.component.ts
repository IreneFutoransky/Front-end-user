import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../user.class';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];
  searchCriteria: string = "";

  constructor(private usersvc: UserService,
    private login: LoginComponent) { }

  ngOnInit() {

    this.usersvc.list()
    .subscribe(resp => {
      console.log(resp);
      this.users = resp;
    });


  }

}
