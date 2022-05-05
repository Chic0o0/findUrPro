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
      name: "hoge",
      email: "hoge@example.com",
      password: "password",
      password_confirmation: "password",
    };
    this.servicio.newUser(usuario).subscribe(datos=>{
    console.log(datos);
    });
    }
}
