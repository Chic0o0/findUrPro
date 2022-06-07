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
    
  }
}
