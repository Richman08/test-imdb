import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {MoviesList} from "../../interfaces/movie.interfase";
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesHttpService {

  constructor(private http: HttpClient) { }

  getMoviesByTitle(title: string): Observable<MoviesList> {
    let params = new HttpParams();
    params = params.append('apikey', environment.API_KEY);
    params = params.append('s', title);
    return this.http.get<MoviesList>(environment.BASE_URL, {params: params});
  }
}
