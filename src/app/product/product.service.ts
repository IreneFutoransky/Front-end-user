import { Injectable } from '@angular/core';
 
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from './product.class'

const url = "http://localhost:50402/api";




@Injectable({
  providedIn: 'root'
})
export class ProductService {
  list(): Observable<Product[]> {
    return this.http.get(`${url}/products`) as Observable<Product[]>;
  }

  get(id: string): Observable<Product> {
    return this.http.get(`${url}/products/${id}`) as Observable<Product>;
  }
  constructor(private http: HttpClient) { }
}
