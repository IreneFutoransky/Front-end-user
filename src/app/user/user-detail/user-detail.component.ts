import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { UserService} from  '../user.service';
import { User } from '../user.class';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: User;

  delete(): void {
    this.usersvc.remove(this.user)
    .subscribe(
      resp => {
        console.log("user delete success", resp);
        this.router.navigateByUrl("/user/list");
      },
      err => {
        console.error("user delete failed", err);
      }
    );
  }

  constructor(private usersvc: UserService,
     private route: ActivatedRoute,
     private router: Router,
     private login: LoginComponent) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.usersvc.get(id)
    .subscribe(resp => {
      console.log(resp),
      this.user = resp;
    })
  }

}
