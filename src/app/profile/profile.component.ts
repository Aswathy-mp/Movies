import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  fullname:any='';
  email:any='';
  contact:any='';
  address:any='';

  constructor() {
    // this.fullname=localStorage.getItem('')
   }

  ngOnInit(): void {
    this.fullname=localStorage.getItem('Fullname')
    this.email=localStorage.getItem('Email')
    this.contact=localStorage.getItem('Contact')
    this.address=localStorage.getItem('Address')
      }

}
