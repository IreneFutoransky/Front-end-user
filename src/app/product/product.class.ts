
export class Product {
    id: number;
    vendorId: number;
    partNumber: string;
    name: string;
    price: number;
    unit: string;
    photoPath: string;
    active: boolean;
 
       
    
        constructor(id: number, vendorId: number, partNumber: string, name: string,
            price: number, 
            unit: string, photoPath: string,  
            Active: boolean=false) {
        this.id = 0;
        this.vendorId = 0;
        this.partNumber = partNumber;
        this.name = name;
        this.price = price;
        this.unit = "Each";
        this.photoPath = photoPath;
        this.active = Active;
        
    }    
}  
