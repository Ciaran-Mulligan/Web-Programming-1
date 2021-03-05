import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  movieList = [
    {title: "Star wars: A New Hope", year: "1977", director: "George Lucas"},
    {title: "John Wick", year: "2014", director: "Chad stahelski"},
    {title: "Blade Runner 2049", year: "2017", director: "Denis Villeneuve"}
  ];

  addMovie(movietitle:string, moviedirector:string, movieyear:string) {
    this.movieList.push({ title:movietitle, director:moviedirector, year:movieyear });
  }

  GetMovies() {
    return this.movieList;
  }
}
