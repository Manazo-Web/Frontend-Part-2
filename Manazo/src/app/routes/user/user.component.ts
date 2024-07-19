import { Component } from '@angular/core';
import { UserFormModel } from 'src/app/models/UserFormModel';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  user: UserFormModel | null = null;
  userId: string = 'some-user-id';
  
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getUserById(this.userId).subscribe(
      (data: UserFormModel) => {
        this.user = data;
        console.log('User data:', this.user);
      },
      (error) => {
        console.error('Error fetching user:', error);
      }
    );
  }
  fillForm(): void {
    if (this.user) {
      document.getElementById('inputUsername')!.setAttribute('value', this.user.regName);
      document.getElementById('inputFirstName')!.setAttribute('value', this.user.regAddress.street); // Пример
      document.getElementById('inputLastName')!.setAttribute('value', this.user.regSurname || '');
      document.getElementById('inputOrgName')!.setAttribute('value', this.user.regLogin);
      document.getElementById('inputLocation')!.setAttribute('value', this.user.regPassword);
      document.getElementById('inputEmailAddress')!.setAttribute('value', this.user.regEmail);
      document.getElementById('inputCardNumber')!.setAttribute('value', this.user.bankCards?.cardNumber || '');
      document.getElementById('inputPhone')!.setAttribute('value', this.user.regNumber.toString());
      document.getElementById('inputCountry')!.setAttribute('value', this.user.regAddress.country);
      document.getElementById('inputCity')!.setAttribute('value', this.user.regAddress.city);
      document.getElementById('inputStreet')!.setAttribute('value', this.user.regAddress.street);
    }
  }
}
