import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import { User} from '../user.class';
import { ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-user-edit',
  templateUrl: 'user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  user: User;

save(): void{
  console.log("User to change: ", this.user);
  this.usersvc.change(this.user)
  .subscribe(
    resp => {
      console.log("user", resp);
      this.router.navigateByUrl('/user/list');
          },
          err => {//error
            
              console.error(err);
          }
         );            
    }

  constructor(
    private usersvc: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { } 

  

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.usersvc.get(id)
    .subscribe(
      resp => {//if success
      console.log(resp);
      this.user = resp; 

  },
  err => {console.error(err);
  }
    );
}

}
