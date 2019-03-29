import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { RequestService} from  '../request.service';
import { Request } from '../request.class';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {

  request: Request;

  
  delete(): void {
    this.requestsvc.remove(this.request)
    .subscribe(
      resp => {
        console.log("request delete success", resp);
        this.router.navigateByUrl("/request/list");
      },
      err => {
        console.error("request delete failed", err);
      }
    );
  }

  review(): void {
    this.requestsvc.setReviewOrApproved(this.request)
    .subscribe(
      resp => {
        console.log("request change status success", resp);
        this.router.navigateByUrl("/request/list");
      },
      err => {
        console.error("request change status failed", err);
      }
    );
  }


  constructor(private requestsvc: RequestService,
    private route: ActivatedRoute,
    private router: Router) { }


  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.requestsvc.get(id)     
    .subscribe(resp => {
      console.log(resp);
      this.request = resp;
    })
  }
}


