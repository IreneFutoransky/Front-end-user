export class Vendor { 
    id:    number;
    code: string;
    name: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    phone: string;
    email: string;
    isPreferred: boolean;     
    active: boolean;
    
        constructor(code: string, name: string, address: string,  city: string, 
            state: string, zip: string, 
            phone: string, email: string, isPreferred: boolean = false, 
            active: boolean=false) {
        this.id = 0;
        this.code = code;
        this.name = name;
        this.address = address;        
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone = phone;
        this.email = email;
        this.isPreferred = isPreferred;       
        this.active = active;

    }    
}  