import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../services/movie.service';
import { movieInterface } from '../interfaces/movieInterface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-home-component',
  templateUrl: './my-home-component.component.html',
  styleUrls: ['./my-home-component.component.css']
})
export class MyHomeComponentComponent implements OnInit {
  allMovies: Array< movieInterface>;
  constructor(private accesCinema: CinemaService,private router: Router) { }

  viewDetails(id) {
     this.router.navigate(['movie', id]);
   }

   ngOnInit() {
    this.allMovies=this.accesCinema.getMovies();
  }

}