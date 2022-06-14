import { Component, OnInit } from '@angular/core';
import { BackTalkService } from 'src/app/services/back-talk.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  
  profileData:any = {};
  addsData:any = {};
  
  userAddsData:any = [];

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
    });

    this.servicio.readAdd().subscribe( params => {
      this.addsData = params;
    });
  }

  showAdds(){
    this.userAddsData = [];

    for (const value of this.addsData) {
      if(value.user_id == this.profileData.id){
        this.userAddsData.push(value);
        console.log(value);
      }
    }
    console.log(this.userAddsData);
  }
}
