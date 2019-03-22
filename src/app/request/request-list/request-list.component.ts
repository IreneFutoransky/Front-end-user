import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { Request } from '../request.class';


@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

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
    this.requestsvc.list()
      .subscribe(resp => {
        console.log(resp);
        this.requests = resp;
      });
  }

}

