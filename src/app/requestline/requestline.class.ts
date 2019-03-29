export class Requestline {
        id:       number;
        requestId: number;
        productId: number;
        quantity: number;         
        active: boolean;
        
        constructor(id: number, requestId: number, productId: number,
                 quantity: number,                 
                active: boolean=false) {
            this.id = 0;
            this.requestId = requestId;
            this.productId = productId;
            this.quantity = quantity;                
            this.active = active;
    
        }    
    }  