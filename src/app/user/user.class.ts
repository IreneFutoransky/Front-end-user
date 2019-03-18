
export class User {
    Id:       number;
    Username: string;
    Password: string;
    Firstname: string;
    Lastname: string;
    Phone: string;
    Email: string;
    isReviewer: boolean;
    isAdmin: boolean;
    Active: boolean;
    
        constructor(Username: string, Password: string, Firstname: string, Lastname: string, 
            Phone: string, Email: string, isReviewer: boolean = false, isAdmin: boolean = false, 
            Active: boolean=false) {
        this.Id = 0;
        this.Username = Username;
        this.Password = Password;
        this.Firstname = Firstname;
        this.Lastname = Lastname;
        this.Phone = Phone;
        this.Email = Email;
        this.isReviewer = isReviewer;
        this.isAdmin= isAdmin;
        this.Active = Active;

    }    
}  



