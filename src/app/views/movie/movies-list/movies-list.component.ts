import {Component, Input} from '@angular/core';
import {Observable} from "rxjs";
import {MoviesList} from "../../../interfaces/movie.interfase";

@Component({
  selector: 'imdb-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent {

  @Input() moviesList$: Observable<MoviesList> = new Observable<MoviesList>();
  @Input() moviesList: MoviesList | undefined;

  constructor() {}
}
