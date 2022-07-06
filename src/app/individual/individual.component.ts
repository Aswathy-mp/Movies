import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute,ParamMap } from '@angular/router';
import { MovieModel } from '../movie.model';

@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.css']
})
export class IndividualComponent implements OnInit {
    id:any='';
    // movie:MovieModel[]=[]
    movie:any
    Title:any=''
    Poster:any=''
    Actors:any=''
    Director:any=''
    Plot:any=''
    Writer:any=''
    Awards:any=''
    BoxOffice:any=''
    Rating:any=''
    Genre:any=''
    MetaScore:any=''
  constructor(public http:HttpClient,public route:ActivatedRoute) {
   }
  
  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.id=data;
      console.log(this.id.imdbID)})
    // this.id='tt4154756'
     this.http.get(`http://www.omdbapi.com/?i=${this.id.imdbID}&apikey=d3072a68`).subscribe((data:any)=>{
      console.log(data)
      // this.movie=JSON.parse(JSON.stringify(data));
      this.movie=data
      this.Poster=this.movie.Poster
      this.Title=this.movie.Title
      this.Actors=this.movie.Actors
      this.Plot=this.movie.Plot
      this.Director=this.movie.Director
      this.Writer=this.movie.Writer
      this.Awards=this.movie.Awards
      this.BoxOffice=this.movie.BoxOffice
      this.Rating=this.movie.imdbRating
      this.Genre=this.movie.Genre
      this.MetaScore=this.movie.Metascore
     });
  }

}
