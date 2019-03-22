import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';



@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {

  vendor:  Vendor = new Vendor('','','','','','','','');
 
  

  save(): void { 
    this.vendorsvc.create(this.vendor)
      
      .subscribe(        
        resp => {// success
                  console.log(resp);                  
                  this.router.navigateByUrl('/vendor/list');                
                },
                err => {//error
                  console.log(`well... this is not good`);
                    console.error(err);
                }
               );            
          }
      

      constructor(private vendorsvc: VendorService,
         private router:Router
         ) { }

      ngOnInit() {
      }
  }