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
      surname: info[0].value,
      email: info[0].value,
      number: document.getElementById("i4")?.textContent,
      CP: document.getElementById("i5")?.textContent,
      adress: document.getElementById("i6")?.textContent,
      city: document.getElementById("i7")?.textContent,
      country: document.getElementById("i8")?.textContent,
      password: document.getElementById("i9")?.textContent
    }
    // console.log(userInfo);
    // this.servicio.addUser(usuario)
    // .subscribe(datos=>{console.log(datos);});
  }
  insertAdd(){
    let info = document.getElementsByClassName("updateInfo");
    let addInfo = {
      photo: info[0].nodeValue,
      text: info[1].nodeValue,
      title: info[2].nodeValue,
      prize: info[3].nodeValue,
    }
    console.log(addInfo);
  }
  updateAdds(){
    let info = document.getElementsByClassName("updateInfo");
    let addInfo = {
      photo: info[0].nodeValue,
      text: info[1].nodeValue,
      title: info[2].nodeValue,
      prize: info[3].nodeValue,
    }
    console.log(addInfo);
  }
}
