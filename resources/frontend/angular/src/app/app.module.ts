import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// Servicios

//Rutas

//import { APP_ROUTING } from './app.routes';

//Componentes

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './public/home/home.component';
import { LoginComponent } from './public/login/login.component';
import { RegisterComponent } from './public/register/register.component';
import { LogoutComponent } from './public/logout/logout.component';
import { NavbarComponent } from './public/navbar/navbar.component';
import { ProfileComponent } from './public/profile/profile.component';
import { SearchComponent } from './public/search/search.component';
import { FavouritesComponent } from './public/favourites/favourites.component';
import { AboutusComponent } from './public/aboutus/aboutus.component';
import { ContactComponent } from './public/contact/contact.component';
import { FooterComponent } from './public/footer/footer.component';
import { UpdateProfileComponent } from './public/update-profile/update-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    NavbarComponent,
    ProfileComponent,
    SearchComponent,
    FavouritesComponent,
    AboutusComponent,
    ContactComponent,
    FooterComponent,
    UpdateProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    // APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
