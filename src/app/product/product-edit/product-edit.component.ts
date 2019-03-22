import { Component, OnInit } from '@angular/core';
import { Product } from '../product.class';
import { ProductService } from '../product.service';
import { Vendor } from '../../vendor/vendor.class';
import { VendorService } from '../../vendor/vendor.service';
import { ActivatedRoute, Router} from '@angular/router';



@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  
  
    vendors: Vendor[]
    product: Product;
  
  save(): void{
    console.log("product to change: ", this.product);
    this.productsvc.change(this.product)
    
    .subscribe(
      resp => {
        console.log("product", resp);
        this.router.navigateByUrl('/product/list');
            },
            err => {//error
              
                console.error(err);
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
        console.log(resp);
        this.product = resp;
      })
    }
  }
  