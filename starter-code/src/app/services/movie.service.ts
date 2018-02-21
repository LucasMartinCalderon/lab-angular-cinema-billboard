import { Injectable } from '@angular/core';
import moviesSample from  '../../sample-movies';
import { movieInterface } from '../interfaces/movieInterface';

@Injectable()
export class CinemaService {

    movies : Array<movieInterface>=moviesSample;



    getMovies():Array<movieInterface>{
      return this.movies;
    };

    getMovie(id):movieInterface{
        let mov: movieInterface;
        this.movies.forEach (e =>{
          if(e.id === id){
            mov = e;
          }
        });
      return mov; 
    }

}