import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';


import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AdminComponent } from './routes/admin/admin.component';
import { CartComponent } from './routes/cart/cart.component';
import { FavoritesComponent } from './routes/favorites/favorites.component';
import { HomeComponent } from './routes/home/home.component';
import { CartService } from './services/cart.service';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './routes/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AdminComponent,
    CartComponent,
    FavoritesComponent,
    HomeComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [CartService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
