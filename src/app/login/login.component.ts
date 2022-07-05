import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder, Validators} from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registerform:any
  constructor(public fb:FormBuilder,public Data:DataService,public router:Router) { 
    this.registerform=[]
  }
  loginform=this.fb.group({
    email:new FormControl('',[Validators.required,Validators.pattern(/^[a-z0-9.%+]+@[a-z0-9.-]+\.[a-z]{2,4}/)]),
    password:new FormControl('',[Validators.required,Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/)])
  })

  ngOnInit(): void {
  }
  login(){
    let logindata=this.loginform.value;
    console.log(logindata)
    let email=localStorage.getItem('Email')
    console.log(email)
    let password=localStorage.getItem('Password')
    console.log(password)
    if((this.loginform.controls['email'].value==email)&&(this.loginform.controls['password'].value==password)){
      console.log('true')
      localStorage.setItem('token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ0b2RvYXBpIiwibmJmIjoxNDk4MTE3NjQyLCJleHAiOjE0OTgxMjEyNDIsInVpZCI6MSwicm9sZSI6ImFkbWluIn0.ZDz_1vcIlnZz64nSM28yA1s-4c_iw3Z2ZtP-SgcYRPQ')
      this.router.navigate(['home'])
    }
    else{
      console.log('false')
    }
  }
}
