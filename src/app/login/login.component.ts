import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder, Validators} from '@angular/forms';
import { FormModel } from '../form.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registerform:FormModel[]=[];
  constructor(public fb:FormBuilder) { }
  loginform=this.fb.group({
    email:new FormControl('',[Validators.required,Validators.pattern(/^[a-z0-9.%+]+@[a-z0-9.-]+\.[a-z]{2,4}/)]),
    password:new FormControl('',[Validators.required,Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/)])
  })

  ngOnInit(): void {
  }
  login(){
    let logindata=this.loginform.value;
    console.log(logindata)
    let regData=localStorage.getItem('registerdata')
    this.registerform=JSON.parse(JSON.stringify(regData));
    console.log('regdata is : '+this.registerform)
    // let registerdata=JSON.parse()
  }
}
