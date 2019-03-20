import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../user/user.class'

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(users: User[], criteria: string): User [] {
    if(criteria =="")
      return users;
    let arrOut: User[] = [];
    for(let user of users){
      if(user.Username.toLowerCase().includes(criteria.toLowerCase())){

        arrOut.push(user);
        continue;
      }
      if(user.Firstname.toLowerCase().includes(criteria.toLowerCase())){

        arrOut.push(user);
        continue;
      }
      if(user.Lastname.toLowerCase().includes(criteria.toLowerCase())){

        arrOut.push(user);
        continue;
      }
      if(user.Phone.toLowerCase().includes(criteria.toLowerCase())){

        arrOut.push(user);
        continue;
      }
      if(user.Email.toLowerCase().includes(criteria.toLowerCase())){

        arrOut.push(user);
        continue;
      }
     
    }
      
    
    return arrOut;
  }
  }

