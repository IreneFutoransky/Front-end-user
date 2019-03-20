import { Component, OnInit } from '@angular/core';
import { VendorService } from '../vendor.service';
import { Vendor } from '../vendor.class';

import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {

  vendors: Vendor[];
  

  constructor(private vendorsvc: VendorService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

    this.vendorsvc.list()
    .subscribe(resp => {
      console.log(resp);
      this.vendors = resp;
    })
  }

}
