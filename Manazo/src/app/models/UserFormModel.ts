import { ProductFormModel } from "./ProductFormModel";

export class UserFormModel {
    public type: string = 'user';
    public id: string; // Assuming the Id is a string representation in TypeScript
    public regName: string;
    public regSurname?: string;
    public photo: string;
    public regLogin: string;
    public regPassword: string;
    public regEmail: string;
    public regNumber: number;
    public regAddress: Address = new Address();
    public cart?: OrderFormModel[];
    public wishlist?: OrderFormModel[];
    public bankCards?: BankCard;
  
    private isDeleted: boolean = false;
    public deleteMe(): void {
      this.isDeleted = true;
    }
  
    constructor() {
      this.id = ''; 
      this.regName = '';
      this.photo = '';
      this.regLogin = '';
      this.regPassword = '';
      this.regEmail = '';
      this.regNumber = 0;
    }
  }
  
  export class Address {
    public street: string;
    public city: string;
    public zipCode: string;
    public country: string;
  
    constructor() {
      this.street = '';
      this.city = '';
      this.zipCode = '';
      this.country = '';
    }
  }
  
  export class OrderFormModel {
    public product!: ProductFormModel;
    public quantity: number;
    public orderDT?: Date;
    public orderState: string = ''; 
  
    constructor() {
      this.quantity = 0;
      this.orderState = '';
    }
  
    public changeOrderState(newState: string): void {
      this.orderState = newState;
    }
  
    public setOrderDateTime(): void {
      this.orderDT = new Date();
    }
  
    public getPrice(): number {
      return this.product.price * this.quantity;
    }
  }
  
  export class BankCard {
    public cardNumber: string;
    public expiryDate: Date;
    public cvv: string;
  
    constructor(cardNumber: string, expiryDate: Date, cvv: string) {
      this.cardNumber = cardNumber;
      this.expiryDate = expiryDate;
      this.cvv = cvv;
    }
  }
  