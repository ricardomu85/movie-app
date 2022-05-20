export interface Rating {
    Source: string;
    Value: string;
}

export interface MovieDetail extends Movie{
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Ratings: Rating[];
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;        
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
    Response: string;
}


export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface Data {
  Search: Movie[];
  totalResults: string;
  Response: string;
}