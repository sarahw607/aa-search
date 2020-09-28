export interface IOMDBMovie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface IOMDBResponse {
  Search?: IOMDBMovie[];
  Response?: string;
  Error?: string;
}
