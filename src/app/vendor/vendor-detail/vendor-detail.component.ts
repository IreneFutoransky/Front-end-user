import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { VendorService} from  '../vendor.service';
import { Vendor } from '../vendor.class';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {

  vendor: Vendor;

  
  delete(): void {
    this.vendorsvc.remove(this.vendor)
    .subscribe(
      resp => {
        console.log("user delete success", resp);
        this.router.navigateByUrl("/vendor/list");
      },
      err => {
        console.error("user delete failed", err);
      }
    );
  }


  constructor(private vendorsvc: VendorService,
    private route: ActivatedRoute,
    private router: Router) { }


  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.vendorsvc.get(id)     
    .subscribe(resp => {
      console.log(resp);
      this.vendor = resp;
    })
  }
}

