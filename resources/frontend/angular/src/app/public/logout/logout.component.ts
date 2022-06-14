import { Component, OnInit } from '@angular/core';
import { BackTalkService } from 'src/app/services/back-talk.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private servicio: BackTalkService, private router:Router) { }

  ngOnInit(): void {
  }

  logout(){
    let usuario = this.servicio.getUser(); 
    console.log(usuario);
    this.servicio.logoutUser(usuario).subscribe(datos=>{
    console.log(datos);
    });
    this.router.navigate(['home']);
   }
}
