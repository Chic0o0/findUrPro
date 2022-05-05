import { Component, OnInit } from '@angular/core';
import { BackTalkService } from 'src/app/services/back-talk.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private servicio: BackTalkService) { }

  ngOnInit(): void {
  }

  log(){
    let usuario = {
    email: "prueba@gmail.com",
    password: "12341234"
    };
    this.servicio.newUser(usuario).subscribe(datos=>{
    console.log(datos);
    });
    }
}
