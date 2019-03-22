import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Product } from '../product.class';
import { ProductService } from '../product.service';
import { Vendor } from '../../vendor/vendor.class';
import { VendorService } from '../../vendor/vendor.service';



@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  vendors: Vendor[];
  product:  Product = new Product(0,0,'','',0,'','');
  vendor: Vendor;
  route: any;
 
  

  save(): void { 
    this.productsvc.create(this.product)
      
      .subscribe(        
        resp => {// success
                  console.log(resp);                  
                  this.router.navigateByUrl('/product/list');                
                },
                err => {//error
                  console.log(`well... this is not good`);
                    console.error(err);
                }
               );            
          }
      

      constructor(private productsvc: ProductService,
         private router:Router,
         private vendorsvc: VendorService
         ) { }

         ngOnInit() {
           
          this.vendorsvc.list()
    .subscribe(resp => {
      console.log(resp);
      this.vendors = resp;
    })
  }

}