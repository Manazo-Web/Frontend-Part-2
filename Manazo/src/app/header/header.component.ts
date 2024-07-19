import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../services/search.service';

import { AuthService } from '../services/auth.service';
import { UserFormModel } from 'src/app/models/UserFormModel';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  registrationData: UserFormModel = new UserFormModel();

  constructor(private router: Router,private searchService: SearchService,private authService: AuthService) {}

  searchString: string = '';

  LogLogin:string = '';
  LogPassword:string = '';

  RegName:string = '';
  RegSurname:string = '';
  RegNumber:string = '';
  RegEmail:string = '';
  RegLogin:string = '';
  RegPassword:string = '';
  RegPhoto: File | null = null;;

  RegCountry:string = '';
  RegCity:string = '';
  RegStreet:string = '';
  RegZipcode:string = '';
  
  RegCreditCard:string = '';

  userClick()
  {
    this.router.navigate(['user']);
  }
  cartClick(){
    
    this.router.navigate(['cart']);
  }
  favoritesClick(){
    this.router.navigate(['favorites']);
  }
  LogClick() {
    
    const login = this.LogLogin;
    const password = this.LogPassword;

    
    const url = `/api/db/GetUser/user?login=${login}&password=${password}`;

    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('LogClick:', error));
}
RegClick() {
        const url = 'тут будет ссылка/api/db/AddUser';

        const data = {
            RegLogin: this.RegLogin,
            RegEmail: this.RegEmail,
            RegName: this.RegName,
            RegNumber: this.RegNumber,
            RegPassword: this.RegPassword,
            RegSurname: this.RegSurname,
            RegPhoto: this.RegPhoto,
    
            RegCreditCard:this.RegCreditCard,
    
            RegCountry: this.RegCountry,
            RegCity:this.RegCity,
            RegStreet:this.RegStreet,
            RegZipcode:this.RegZipcode
        };
    
        this.authService.addUser(this.registrationData)
        .subscribe(
          response => {
            console.log('Registration successful', response);
            // Обработка успешной регистрации, например, перенаправление на страницу входа
          },
          error => {
            console.error('Registration error', error);
            // Обработка ошибки регистрации, например, отображение сообщения об ошибке
          }
        );
    }

  sendSearchString() {
    this.searchService.updateSearchString(this.searchString);
    this.router.navigate(['search']);
  }
}
