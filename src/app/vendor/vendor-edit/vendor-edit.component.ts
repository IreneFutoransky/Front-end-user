import { Component, OnInit } from '@angular/core';
import {VendorService} from '../vendor.service';
import { Vendor } from '../vendor.class';
import { ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-vendor-edit',
  templateUrl: 'vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})


export class VendorEditComponent implements OnInit {
  
  vendor: Vendor;

save(): void{
  console.log("vendor to change: ", this.vendor);
  this.vendorsvc.change(this.vendor)
  
  .subscribe(
    resp => {
      console.log("vendor", resp);
      this.router.navigateByUrl('/vendor/list');
          },
          err => {//error
            
              console.error(err);
          }
         );            
    }

  constructor(
    private vendorsvc: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ) { } 

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.vendorsvc.get(id)     
    .subscribe(resp => {
      console.log(resp);
      this.vendor = resp;
    })
  }
}
