import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserFormModel } from 'src/app/models/UserFormModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://your-api-endpoint'; // Замените на реальный URL вашего API

  constructor(private http: HttpClient) { }

  getUser(regLogin: string, regPassword: string): Observable<UserFormModel> {
    const params = new HttpParams()
      .set('RegLogin', regLogin)
      .set('RegPassword', regPassword);

    return this.http.get<UserFormModel>(`${this.apiUrl}/GetUser`, { params });
  }

  addUser(user: UserFormModel): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(`${this.apiUrl}/AddUser`, user, { headers });
  }

  getUserById(id: string): Observable<UserFormModel> {
    const params = new HttpParams().set('id', id);
    return this.http.get<UserFormModel>(`${this.apiUrl}/GetUser`, { params });
  }
}
