import { Injectable } from '@angular/core';
 
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Requestline} from './requestline.class'


const url = "http://localhost:50402/api";




@Injectable({
  providedIn: 'root'
})
export class RequestlineService {
  list(): Observable<Requestline[]> {
    return this.http.get(`${url}/requestlines`) as Observable<Requestline[]>;
  }

  get(id: string): Observable<Requestline> {
    return this.http.get(`${url}/requestlines/${id}`) as Observable<Requestline>;}

  

  
  create(requestline: Requestline): Observable<any>{
   return this.http.post(`${url}/requestlines`, requestline) as Observable<any>;
  
  }

  remove(requestline: Requestline): Observable<any>{
    return this.http.delete(`${url}/requestlines/${requestline.id}`) as Observable<any>;
  }


  change(requestline: Requestline): Observable<any>{
    return this.http.put(`${url}/requestlines/${requestline.id}`, requestline) as Observable<any>;
  }
 


  constructor(private http: HttpClient) { }
}
