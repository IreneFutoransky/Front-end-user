
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import { Request } from '../../request/request.class';
import { RequestService } from '../../request/request.service'; 
import { RequestlineService } from '../../requestline/requestline.service'; 
import { Requestline } from '../../requestline/requestline.class';


@Component({
  selector: 'app-review-approval',
  templateUrl: './review-approval.component.html',
  styleUrls: ['./review-approval.component.css']
})
export class ReviewApprovalComponent implements OnInit {


  request: Request;
  requestline: Requestline;

  prlnid: number;  
   
  searchCriteria: string = "";
  sortCriteria: string = "requestname";
  sortOrder: string = "asc";

  sortBy(column: string): void {
    if (this.sortCriteria === column) {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortCriteria = column;
      this.sortOrder = 'asc';
    }
  }
  constructor(
    private requestsvc: RequestService,
    private requestlinesvc: RequestlineService,
     private route: ActivatedRoute,
     private router:Router
     
  ) { }

  refreshscreen(id): void{
    this.requestsvc.get(id)
    .subscribe(resp => {
      console.log(resp),
      this.request = resp;
    })
  }


 /* delete(requestline: Requestline): void {
    //this.requestline.requestId = this.prlnid;
   
    this.requestlinesvc.remove(requestline)
    .subscribe(
      resp => {
        console.log("request line delete success", resp);
        this.refreshscreen(requestline.requestId);   
       
      },
      err => {
        console.error("request line delete failed", err);
      }
    );    
  }*/


  reject(request: Request): void {
    //this.requestline.requestId = this.prlnid;
   
    this.requestsvc.setRejected(request)
    .subscribe(
      resp => {
        console.log("status change to 'reject' success", resp);
        this.refreshscreen(request.id);   
       
      },
      err => {
        console.error("status change to 'reject' failed", err);
      }
    );    
  }

  approve(request: Request): void {
    //this.requestline.requestId = this.prlnid;
   
    this.requestsvc.setApproved(request)
    .subscribe(
      resp => {
        console.log("status change to 'approve' success", resp);
        this.refreshscreen(request.id);   
       
      },
      err => {
        console.error("status change to 'approve' failed", err);
      }
    );    
  }


  
  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.requestsvc.get(id)
    .subscribe(resp => {
      console.log(resp),
      this.request = resp;
    })
  }
}



