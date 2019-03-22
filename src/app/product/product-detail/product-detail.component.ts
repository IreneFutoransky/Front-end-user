import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { ProductService} from  '../product.service';
import { Product } from '../product.class';
 

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  delete(): void {
    this.productsvc.remove(this.product)
    .subscribe(
      resp => {
        console.log("product delete success", resp);
        this.router.navigateByUrl("/product/list");
      },
      err => {
        console.error("product delete failed", err);
      }
    );
  }

  constructor(
    private productsvc: ProductService,
     private route: ActivatedRoute,
     private router: Router
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.productsvc.get(id)
    .subscribe(resp => {
      console.log(resp),
      this.product = resp;
    })
  }

}
