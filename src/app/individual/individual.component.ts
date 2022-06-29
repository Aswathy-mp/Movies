import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.css']
})
export class IndividualComponent implements OnInit {

  constructor(public http:HttpClient) { }

  ngOnInit(): void {
    
     this.http.get("http://www.omdbapi.com/?apikey=[yourkey]&").subscribe((data:any)=>{
      console.log(data)
     });
  }

}
