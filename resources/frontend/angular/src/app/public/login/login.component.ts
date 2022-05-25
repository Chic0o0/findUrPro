import { Component, OnInit } from '@angular/core';
import { BackTalkService } from 'src/app/services/back-talk.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private servicio: BackTalkService) {
    
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
    this.servicio.loginUser(usuario).subscribe(datos=>{
    console.log(datos);
    });
    }
}
