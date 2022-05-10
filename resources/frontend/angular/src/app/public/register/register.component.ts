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
    let usuario = {
      name: "peter",
      email: "a@prueba.com",
      password: "12341234",
      password_confirmation: "12341234",
    };
    this.servicio.addUser(usuario).subscribe(datos=>{
    console.log(datos);
    });
    }
}
