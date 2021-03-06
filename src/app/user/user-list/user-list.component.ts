import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.class';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];
  searchCriteria: string = "";
  sortCriteria: string = "username";
  sortOrder: string = "asc";

  sortBy(column: string): void {
    if (this.sortCriteria === column) {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortCriteria = column;
      this.sortOrder = 'asc';
    }
  }
  constructor(private usersvc: UserService
  ) { }
  ngOnInit() {
    this.usersvc.list()
      .subscribe(resp => {
        console.log(resp);
        this.users = resp;
      });
  }

}
