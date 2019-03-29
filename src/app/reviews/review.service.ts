import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Request} from '../request/request.class'

const url = "http://localhost:50402/api";


@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  
  list(): Observable<Request[]> {
    return this.http.get(`${url}/requests`) as Observable<Request[]>;
  }

  constructor(private http: HttpClient) { }

}
