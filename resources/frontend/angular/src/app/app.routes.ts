import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './public/public.component';
import { HomeComponent } from './public/home/home.component';
import { LoginComponent } from './public/login/login.component';
import { RegisterComponent } from './public/register/register.component';

const routes:Routes= [
    {path: "public ", component:PublicComponent},
    {path: "login", component:LoginComponent},
    {path: "register", component:RegisterComponent},
    {path: "**", component:HomeComponent}, 

]

export const APP_ROUTING = RouterModule.forRoot(routes);