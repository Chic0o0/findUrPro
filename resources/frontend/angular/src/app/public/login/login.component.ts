import { Component, OnInit } from '@angular/core';
import { BackTalkService } from 'src/app/services/back-talk.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userData:any={};

  constructor(private servicio: BackTalkService, private router:Router) {
    
  }

  ngOnInit(): void {
  }

  log(){
    let datos = document.querySelectorAll("input");

    let usuario = {
      email: datos[0].value,
      password: datos[1].value
    };

    this.servicio.loginUser(usuario).subscribe(datosUser=>{this.userData = datosUser});
    this.router.navigate(['profile']);
    
    // This works, tarda un poco mas creo que porque esta usando el middleware
    //redirigir luego a profile y usar las variables

    // This does not work
    //Necsito sacar datosUser a una variable de alguna forma para manejar los datos

    // Linea que pretende meter la data en datosUser, faltan parámetros (???)
    // this.datosUser = this.servicio.loginUser(usuario).subscribe(datos=>{return datos});

  }
}
