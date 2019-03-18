import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './user.class'


const url = "http://localhost:50402/api";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  list(): Observable<User[]> {
    return this.http.get(`${url}/users`) as Observable<User[]>;
  }

  get(id: string): Observable<User> {
    return this.http.get(`${url}/users/${id}`) as Observable<User>;
  }

  create(user: User): Observable<User>{
    return this.http.post(`${url}/users`, user) as Observable<User>;
  }

  change(user: User): Observable<any>{
    return this.http.put(`${url}/users/${user.Id}`, user) as Observable<any>;
  }

  remove(user: User): Observable<any>{
    return this.http.delete(`${url}/users/${user.Id}`) as Observable<any>;
  }


  constructor(private http: HttpClient) { }

   
}
