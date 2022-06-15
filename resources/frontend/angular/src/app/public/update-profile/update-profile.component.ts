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
    
    this.servicio.readAdd().subscribe( params => {
      this.addsData = params;
    })

    // element has an any type
    // this.addsData.forEach(element => {
    //   if(element.user_id = this.profileData.id){
    //     this.userAddsData.push(element);
    //   }
    // });
  }

  updateInfo(){
    let info = document.querySelectorAll("input");

    let userInfo = {
      id: this.profileData.id,
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

    this.servicio.updateUser(userInfo)
    .subscribe(datos=>{return datos});

    window.alert("Information updated succesfully!")
  }
  
  insertAdd(){
    
    let info = document.querySelectorAll("input");

    let addInfo = {
      user_id : this.profileData.id,
      photo: info[9].value,
      text: info[10].value,
      title: info[11].value,
      prize: info[12].value,
    }
    this.servicio.createAdd(addInfo)
    .subscribe(datos=>{return datos});

    window.alert("Add uploaded succesfully!")
  }

  updateAdds(idAdd:any){
    let info = document.querySelectorAll("input");
    let addInfo = {
      id : idAdd,
      photo: info[13].value,
      text: info[14].value,
      title: info[15].value,
      prize: info[16].value,
    }
    this.servicio.updateAdd(addInfo)
    .subscribe(datos=>{return datos});

    window.alert("Add updated succesfully!")
  }

  showAdds(){
    this.userAddsData = [];

    for (const value of this.addsData) {
      if(value.user_id == this.profileData.id){
        this.userAddsData.push(value);
      }
    }

  }

  deleteAdds(id:any){
    this.servicio.deleteAdd(id).subscribe(datos=>{return datos});

    window.alert("Add deleated succesfully!")
  }
}
