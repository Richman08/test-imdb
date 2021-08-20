import { Component } from '@angular/core';
import {tap} from "rxjs/operators";
import {MoviesList} from "../../interfaces/movie.interfase";
import {Observable} from "rxjs";
import {MoviesHttpService} from "../../services/http/movies-http.service";
import {FormControl} from "@angular/forms";
import {DownloadFileService} from "../../services/download/download-file.service";

@Component({
  selector: 'imdb-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {

  filtered: FormControl = new FormControl('');
  moviesList$: Observable<MoviesList> = new Observable<MoviesList>();
  moviesList: MoviesList | undefined;

  constructor(private moviesHttpService: MoviesHttpService,
              private downloadFileService: DownloadFileService) { }

  searchMovies(filtered: string): void {
    this.moviesList$ = this.moviesHttpService.getMoviesByTitle(filtered)
      .pipe(
        tap((movies: MoviesList) => {
          this.moviesList = movies;
          if (movies.Search?.length) {
            this.downloadFileService.downloadFile(movies.Search, this.filtered.value)
          }
        })
      );
  }
}
