export interface MoviesList {
  Response: string;
  Search: Movie[];
  totalResults: string;
  Error: string;
}

export interface Movie {
  Poster: string;
  Title: string;
  Year: string;
  Type: string;
  imdbID: string;
}
