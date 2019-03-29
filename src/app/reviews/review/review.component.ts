import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../review.service';
import { Review } from '../review.class';
import { Request } from '../../request/request.class';
import { RequestService } from '../../request/request.service';



@Component({
  selector: 'app-request-list',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  requests: Request [];
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
  constructor(private requestsvc: RequestService
    ) { }
  ngOnInit() {
    this.requestsvc.listReview()
      .subscribe(resp => {
        console.log(resp);
        this.requests = resp;
      });
  }

}

