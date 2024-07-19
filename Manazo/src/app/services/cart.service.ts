import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderFormModel } from 'src/app/models/UserFormModel'; // Путь к модели пользователя

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = 'http://your-backend-api-url/api/user'; // URL вашего API для пользователя

  constructor(private http: HttpClient) { }

  getUserCart(userId: string): Observable<OrderFormModel[] | undefined> {
    return this.http.get<OrderFormModel[] | undefined>(`${this.apiUrl}/GetItem?id=${userId}`);
  }
}
