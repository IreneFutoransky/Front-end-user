import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Requestline } from '../requestline.class';
import { RequestlineService } from '../requestline.service'; 
import { Product } from '../../product/product.class';
import { ProductService } from '../../product/product.service';
 
@Component({
  selector: 'app-request-create',  
  templateUrl: './requestline-create.component.html',
  styleUrls: ['./requestline-create.component.css']
})
export class RequestlineCreateComponent implements OnInit {

  products: Product[];
  requestline:  Requestline = new Requestline(0,0,0,0);   

   
  product: Product; 

  prid: number;
 
  

  save(): void { 
    console.log("RequestLine b4 create:", this.requestline);
    // 
    this.requestline.requestId = this.prid;
    
    
    this.requestlinesvc.create(this.requestline)
     
      .subscribe(        
        resp => {// success
                  console.log(resp);                  
                  this.router.navigateByUrl(`/requestline/display/${this.requestline.requestId}`);                
                },
                err => {//error
                  
                    console.error(err);
                }
               );            
          }
      

      constructor(private requestlinesvc: RequestlineService,
         private router:Router,
         private route: ActivatedRoute,
        
         private productsvc: ProductService
          
         ) { }

       ngOnInit() {
        
        this.prid = this.route.snapshot.params.id;
        
          this.productsvc.list()
          .subscribe(resp => {
          console.log(resp);
          this.products = resp;
    })
  }
  }

