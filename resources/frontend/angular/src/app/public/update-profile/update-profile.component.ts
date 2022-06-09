import { Component, OnInit } from '@angular/core';
import { BackTalkService } from 'src/app/services/back-talk.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent implements OnInit {

  profileData:any = {};
  addsData:any = {};

  constructor(private servicio: BackTalkService) { }

  ngOnInit(): void {
    this.servicio.getUser().subscribe( params => {
      this.profileData = params;
    })
    
    // Hacer similar
    // this.servicio.getUser().subscribe( params => {
    //   this.profileData = params;
    // })
  }

  updateInfo(){
    let info = document.querySelectorAll("input");
    info.forEach(element => {
      console.log(element.value);
    });

    let userInfo = {
      name: info[0].value,
      surname: info[1].value,
      email: info[2].value,
      number: info[3].value,
      adress: info[4].value,
      CP: info[5].value,
      city: info[6].value,
      country: info[7].value,
      password: info[8].value,
    }
    console.log(userInfo);
    this.servicio.updateUser(userInfo)
    .subscribe(datos=>{console.log(datos);});
  }
  insertAdd(){
    let info = document.querySelectorAll("input");
    let addInfo = {
      photo: info[9].value,
      text: info[10].value,
      title: info[11].value,
      prize: info[12].value,
    }
    console.log(addInfo);
  }
  updateAdds(){
    let info = document.querySelectorAll("input");
    let addInfo = {
      photo: info[13].value,
      text: info[14].value,
      title: info[15].value,
      prize: info[16].value,
    }
    console.log(addInfo);
  }
}
