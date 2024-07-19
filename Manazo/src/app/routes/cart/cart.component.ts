import { Component, OnInit } from '@angular/core';
import { UserFormModel, OrderFormModel } from 'src/app/models/UserFormModel';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit{
  userCart: OrderFormModel[] = []; 

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    const userId = 'your-user-id'; 
    this.getUserCart(userId);
  }

  getUserCart(userId: string): void {
    this.cartService.getUserCart(userId)
      .subscribe(
        (cartItems) => {
          this.userCart = cartItems ?? [];
          console.log('Корзина пользователя:', this.userCart);
        },
        (error) => {
          console.error('Ошибка при получении корзины пользователя:', error);
        }
      );
  }
  updateQuantity(index: number, quantity: number) {
    if (quantity > 0) {
      //this.cartItems[index].quantity = quantity;
    }
  }

  removeItem(index: number) {
    //this.cartItems.splice(index, 1);
  }

  //getTotalPrice(): number {
    //return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  //}

  checkout() {
   
    alert('Оформление заказа пока не реализовано.');
  }
}
