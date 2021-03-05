import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  movieList = [
    {id: "1", title: "Star wars: A New Hope", year: "1977", director: "George Lucas"},
    {id: "2", title: "John Wick", year: "2014", director: "Chad stahelski"},
    {id: "3", title: "Blade Runner 2049", year: "2017", director: "Denis Villeneuve"}
  ];

  GetMovies() {
    return this.movieList;
  }
}
