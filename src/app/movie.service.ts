import { Injectable } from '@angular/core';
import { Movie } from './movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movie: Movie;

  constructor() { }

  movieList = [
    new Movie("Star wars: A New Hope", "1977", "George Lucas"),
    new Movie("John Wick", "2014", "Chad stahelski"),
    new Movie("Blade Runner 2049", "2017", "Denis Villeneuve"),
    new Movie("Week5's Task", "2021", "Ciaran Mulligan")
  ];

  addMovie(movietitle:string, moviedirector:string, movieyear:string) {
    this.movieList.push(new Movie(movietitle, movieyear, moviedirector));
  }

  GetMovies() {
    return this.movieList.sort();
  }
}
