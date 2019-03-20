
export class Product {
    vendorId: number;
    partNumber: number;
    name: string;
    price: number;
    unit: string;
    photoPath: string;
    active: boolean;
     
    
        constructor(vendorId: number, partNumber: number, name: string,
            price: number, 
            unit: string, photoPath: string,  
            Active: boolean=false) {
        this.vendorId = 0;
        this.partNumber = partNumber;
        this.name = name;
        this.price = price;
        this.unit = unit;
        this.photoPath = photoPath;
        this.active = Active;
        
    }    
}  
