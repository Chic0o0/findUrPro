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
  
  userAddsData:any = [];

  constructor(private servicio: BackTalkService) { }

  ngOnInit(): void {
    this.servicio.getUser().subscribe( params => {
      this.profileData = params;
    })
    
    // Hacer similar
    this.servicio.readAdd().subscribe( params => {
      this.addsData = params;
    })

    for (const value of this.addsData) {
      if(value.user_id == this.profileData.id){
        this.userAddsData.push(value);
        console.log(value);
      }
    }

    // element has an any type
    // this.addsData.forEach(element => {
    //   if(element.user_id = this.profileData.id){
    //     this.userAddsData.push(element);
    //   }
    // });
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
    console.log(this.profileData);

    let addInfo = {
      user_id : this.profileData.id,
      photo: info[9].value,
      text: info[10].value,
      title: info[11].value,
      prize: info[12].value,
    }
    console.log(addInfo);
    this.servicio.createAdd(addInfo)
    .subscribe(datos=>{console.log(datos);});
  }

  updateAdds(){
    let info = document.querySelectorAll("input");
    let addInfo = {
      user_id : this.profileData.id,
      photo: info[13].value,
      text: info[14].value,
      title: info[15].value,
      prize: info[16].value,
    }
    console.log(addInfo);
    this.servicio.updateAdd(addInfo)
    .subscribe(datos=>{console.log(datos);});
  }

  showAdds(){
    for (const value of this.addsData) {
      if(value.user_id == this.profileData.id){
        this.userAddsData.push(value);
        console.log(value);
      }
    }
  }

  deleteAdds(){
    // this.servicio.deleteAdd().subscribe(datos=>{console.log(datos);});
  }
}
