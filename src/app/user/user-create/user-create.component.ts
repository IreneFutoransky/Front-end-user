import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  user:  User = new User('','','','','','');
  router: any;
  usersvc: any;
  display(): void { console.log(`from user-create.component.ts`, {User});}

  save(): void { 
    this.usersvc.create(this.user)
      
      .subscribe(        
        resp => {// success
                  console.log(resp);                  
                  this.router.navigateByUrl('/user/list');                
                },
                err => {//error
                  console.log(`well... this is not good`);
                    console.error(err);
                }
               );            
          }
      

      constructor() { }

      ngOnInit() {
      }
  }
 


