import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components

import { PublicComponent } from './public/public.component';
import { HomeComponent } from './public/home/home.component';
import { LoginComponent } from './public/login/login.component';
import { LogoutComponent } from './public/logout/logout.component';
import { RegisterComponent } from './public/register/register.component';

const routes: Routes = [
    {path: "public", component:PublicComponent},
    {path: "login", component:LoginComponent},
    {path: "logout", component:LogoutComponent},
    {path: "register", component:RegisterComponent},
    {path: "**", component:HomeComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
