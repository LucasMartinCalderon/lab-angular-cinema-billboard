import { Component, OnInit } from '@angular/core';
import {CinemaService} from '../services/movie.service';
import { movieInterface } from '../interfaces/movieInterface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-movie-component',
  templateUrl: './my-movie-component.component.html',
  styleUrls: ['./my-movie-component.component.css']
})
export class MyMovieComponentComponent implements OnInit {
    movieDetail:movieInterface;
    movieId: Number;
    constructor(private accesCinema: CinemaService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params)=>this.movieId=Number(params['id']));
    this.movieDetail=this.accesCinema.getMovie(this.movieId);
    console.log("ET VOILÀ");
  }
}