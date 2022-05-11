import { Component, OnInit } from '@angular/core';
import { BackTalkService } from 'src/app/services/back-talk.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private servicio: BackTalkService) { }

  ngOnInit(): void {
  }

  logout(){
    let usuario = '';
    console.log(usuario);
    this.servicio.logoutUser(usuario).subscribe(datos=>{
    console.log(datos);
    });
    }
}
