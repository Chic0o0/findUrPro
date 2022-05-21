import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components

import { HomeComponent } from './public/home/home.component';
import { LoginComponent } from './public/login/login.component';
import { LogoutComponent } from './public/logout/logout.component';
import { RegisterComponent } from './public/register/register.component';
import { ProfileComponent } from './public/profile/profile.component';
import { SearchComponent } from './public/search/search.component';
import { FavouritesComponent } from './public/favourites/favourites.component';

const routes: Routes = [
    {path: "login", component:LoginComponent},
    {path: "logout", component:LogoutComponent},
    {path: "register", component:RegisterComponent},
    {path: "profile", component:ProfileComponent},
    {path: "search", component:SearchComponent},
    {path: "favourites", component:FavouritesComponent},
    {path: "**", component:HomeComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
