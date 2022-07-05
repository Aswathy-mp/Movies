import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public fb:FormBuilder,public router:Router) { }
  registerform=this.fb.group({
    fullname:new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/)]),
    email:new FormControl('',[Validators.required,Validators.pattern(/^[a-z0-9.%+]+@[a-z0-9.-]+\.[a-z]{2,4}/)]),
    contact:new FormControl('',[Validators.required,Validators.pattern(/^[0-9]+$/)]),
    address:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required,Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/)])
  })
  ngOnInit(): void {
  }
  register(){
    let registerdata=this.registerform.value;
    console.log()
    console.log(registerdata)
    localStorage.setItem('Fullname',this.registerform.controls['fullname'].value)
    localStorage.setItem('Email',this.registerform.controls['email'].value)
    localStorage.setItem('Contact',this.registerform.controls['contact'].value)
    localStorage.setItem('Address',this.registerform.controls['address'].value)
    localStorage.setItem('Password',this.registerform.controls['password'].value)
    alert('You have successfully registered !!!')
    this.router.navigate(['login'])
  }
}
