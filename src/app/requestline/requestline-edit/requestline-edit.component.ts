

import { Component, OnInit } from '@angular/core';
import {RequestlineService} from '../requestline.service';
import { Requestline} from '../requestline.class';
import { ActivatedRoute, Router} from '@angular/router';
import { ProductService } from '../../product/product.service';
import { Product } from '../../product/product.class';


@Component({
  selector: 'app-requestline-edit',
  templateUrl: './requestline-edit.component.html',
  styleUrls: ['./requestline-edit.component.css']
})
export class RequestlineEditComponent implements OnInit {
  requestline: Requestline;
  products: Product[];
  product: Product; 
save(): void{
  console.log("Request line to change: ", this.requestline);
  this.requestlinesvc.change(this.requestline)
  .subscribe(
    resp => {
      console.log("requestline", resp);
      this.router.navigateByUrl(`/requestline/display/${this.requestline.requestId}`);
          },
          err => {//error
            
              console.error(err);
          }
         );            
    }

  constructor(
    private requestlinesvc: RequestlineService,
    private route: ActivatedRoute,
    private router: Router,
    private productsvc: ProductService
  ) { } 

  

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.requestlinesvc.get(id)
    .subscribe(
      resp => {//if success
      console.log(resp);
      this.requestline = resp;})
      
      this.productsvc.list()
      .subscribe(resp => {
      console.log(resp);
      this.products = resp;})
      

  }}
