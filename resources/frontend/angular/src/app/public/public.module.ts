import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicComponent } from './public.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    PublicComponent
  ],
  imports: [
    CommonModule,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent ,
    NavbarComponent
  ]
})
export class PublicModule { }
