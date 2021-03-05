import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent implements OnInit {

  movies = [
    {title: "John Wick", director: "Chad Stahelski", year: "2014"},
    {title: "Blade Runner 2049", director: "Denis Villeneuve", year: "2017"},
    {title: "Star Wars: Revenge of the Sith", director: "George Lucas", year: "2005"},
    {title: "This Project", director: "Ciaran Mulligan", year: "2021"}
  ];
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
  }

}
