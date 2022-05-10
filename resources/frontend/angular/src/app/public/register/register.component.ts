import { Component, OnInit } from '@angular/core';
import { BackTalkService } from 'src/app/services/back-talk.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private servicio: BackTalkService) { }

  ngOnInit(): void {
  }

  add(){
    let datos = document.querySelectorAll("input");
    let usuario = {
      name: datos[0].value,
      email: datos[1].value,
      password: datos[2].value,
      password_confirmation: datos[3].value,
    };
    console.log(usuario);
    this.servicio.addUser(usuario).subscribe(datos=>{
    console.log(datos);
    });
    }
}
