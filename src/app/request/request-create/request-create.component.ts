import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Request } from '../request.class';
import { RequestService } from '../request.service'; 


@Component({
  selector: 'app-request-create',  
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {

   
  request:  Request = new Request(0,0,'','','','', 0);
  
  route: any;
 
  

  save(): void { 
    
    this.requestsvc.create(this.request)
      
      .subscribe(        
        resp => {// success
                  console.log(resp);                  
                  this.router.navigateByUrl('/request/list');                
                },
                err => {//error
                  
                    console.error(err);
                }
               );            
          }
      

      constructor(private requestsvc: RequestService,
         private router:Router
          
         ) { }

         ngOnInit() {
           
          
    }
  }

