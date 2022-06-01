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
      surname: datos[1].value,
      email: datos[2].value,
      number: datos[3].value,
      CP: datos[4].value,
      adress: datos[5].value,
      city: datos[6].value,
      country: datos[7].value,
      password: datos[8].value,
      password_confirmation: datos[9].value,
      pro:datos[10].checked
    };

    console.log(usuario);
    this.servicio.addUser(usuario)
    .subscribe(datos=>{console.log(datos);});
  }
}
