import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies:any
  constructor(public http:HttpClient,public fb:FormBuilder) {
    this.movies=[]
   }
  Search=this.fb.group({
    search:new FormControl('')
  }) 

  ngOnInit(): void { 
  }
  Searching(){
    console.log(this.Search.value)
    let search=this.Search.controls['search'].value

    const url=`https://www.omdbapi.com/?s=${search}&apikey=8a9d34c9`
    this.http.get(`${url}`).subscribe((data)=>{
      console.log(data);
      this.movies=data
      console.log(this.movies)
    })
    
  } 
  
}
