
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
    
        constructor(id: number, userId: number, description: string,
             deliveryMode: string, 
            reviewDate: string, status: string, total: number = 0, 
            Active: boolean=false) {
        this.id = 0;
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