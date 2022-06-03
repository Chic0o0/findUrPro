import { Component, OnInit } from '@angular/core';
import { BackTalkService } from 'src/app/services/back-talk.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  
  profileData:any = {};

  constructor(private servicio: BackTalkService) {
    
  }

  
  ngOnInit(): void {
    // Intento de mostrar en el componente datos del usuario, salio mal

    // this.servicio.getUser().subscribe( params => {
    //   this.datosUser = this.servicio.getUser();
    // })

    // this.datosUser = this.servicio.getUser().subscribe(datosUser=>{return datosUser});
    // console.log(this.datosUser);

    this.servicio.getUser().subscribe( params => {
      this.profileData = params;
    })
  }

}
