import { Component, OnInit } from '@angular/core';
import {RequestService} from '../request.service';
import { Request } from '../request.class';
import { ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-request-edit',
  templateUrl: 'request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent implements OnInit {
  request: Request;

save(): void{
  console.log("change this request: ", this.request);
  this.requestsvc.change(this.request)
  .subscribe(
    resp => {
      console.log("request", resp);
      this.router.navigateByUrl('/request/list');
          },
          err => {//error
            
              console.error(err);
          }
         );            
    }

  constructor(
    private requestsvc: RequestService,
    private route: ActivatedRoute,
    private router: Router
  ) { } 

  

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.requestsvc.get(id)
    .subscribe(
      resp => {//if success
      console.log(resp);
      this.request = resp; 

  },
  err => {console.error(err);
  }
    );
}

}
