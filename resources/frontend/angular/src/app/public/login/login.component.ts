import { Component, OnInit } from '@angular/core';
import { BackTalkService } from 'src/app/services/back-talk.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //datosUser como variable que no se usa, donde va a caer la data
  // 
  constructor(private servicio: BackTalkService, private datosUser: JSON) {
    
  }

  ngOnInit(): void {
  }

  log(){
    let datos = document.querySelectorAll("input");

    let usuario = {
      email: datos[0].value,
      password: datos[1].value
    };

    console.log(usuario);

    this.servicio.loginUser(usuario).subscribe(datos=>{console.log(datos)});

    // Linea que pretende meter la data en datosUser, faltan parámetros
    // this.datosUser = this.servicio.loginUser(usuario).subscribe(datos=>{return datos});
  }

  showUser(){
    // Esto si, hay que estar logeado ? Si pero siempre muestra lo mismo estés o no logeado
    let datosUser = this.servicio.getUser();
    console.log(datosUser);
  }
}
