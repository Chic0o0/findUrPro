import { Component, OnInit } from '@angular/core';
import { BackTalkService } from 'src/app/services/back-talk.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  userData:any={};
  constructor( private servicio: BackTalkService) { }

  ngOnInit(): void {
    this.servicio.getUser().subscribe( params => {
      this.userData = params;
    })
  }
}