
export class Request {
    id:       number;
    userId: number;
    description: string;
    justification: string;
    deliveryMode: string;
    reviewDate: string;
    status: string;
    total: number;     
    active: boolean;
    
        constructor(userId: number = 0, description: string = '',
             deliveryMode: string, 
            reviewDate: string, status: string = 'NEW', total: number = 0, 
            Active: boolean=false) {
         
        this.userId = userId;
        this.description = description;
        this.deliveryMode = deliveryMode;
        this.reviewDate = reviewDate;
        this.status = status;
        this.total = total;
        this.reviewDate = reviewDate;        
        this.active = Active;

    }    
}  