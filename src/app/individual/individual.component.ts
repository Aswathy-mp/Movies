import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute,ParamMap } from '@angular/router';

@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.css']
})
export class IndividualComponent implements OnInit {
    id:any='';
    movie:any
  constructor(public http:HttpClient,public route:ActivatedRoute) {
    this.movie=[]
   }
  
  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.id=data;
      console.log(this.id.imdbID)})
    // this.id='tt4154756'
     this.http.get(`http://www.omdbapi.com/?i=${this.id.imdbID}&apikey=d3072a68`).subscribe((data:any)=>{
      console.log(data)
      this.movie=data;
     });
  }

}
