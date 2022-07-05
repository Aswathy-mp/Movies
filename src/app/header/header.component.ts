import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public auth:DataService, public router:Router) { }

  ngOnInit(): void {
  }
  logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('Fullname')
    localStorage.removeItem('Email')
    localStorage.removeItem('Address')
    localStorage.removeItem('Contact')
    localStorage.removeItem('Password')
    this.router.navigate(['register'])
  }
}
