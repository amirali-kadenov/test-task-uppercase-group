export type CommonParams = {
  y?: string // 	Year of release.
  plot?: "short" | "full" // 	Plot summary length. (short | full)
  r?: "json" | "xml" // 	Response format. (json | xml)
  type?: "movie" | "series" | "episode" // 	Movie type. (movie | series | episode)
}

export type GetByIdParams = {
  i: string // 	A valid IMDb ID (e.g. tt1285016)
} & CommonParams

export type GetByIdParamsRequired = Omit<GetByIdParams, keyof CommonParams>

export type GetBySearchParams = {
  s: string // 	Movie title to search for.
  page?: string // Page number to return.
} & CommonParams

export type GetBySearchParamsRequired = Omit<
  GetBySearchParams,
  keyof CommonParams
>

export type Movie = {
  Title: string // Movie title
  Poster: string // URL to the movie poster image
  Type: string // Type of media (e.g., "movie", "series")
  Year: string // Release year
  imdbID: string // IMDb ID of the movie
}

export type MovieDetails = Movie & {
  Rated: string // Content rating (e.g., PG-13, R)
  Released: string // Release date
  Runtime: string // Duration (e.g., "120 min")
  Genre: string // Genres, comma-separated
  Director: string // Director(s) of the movie
  Writer: string // Writer(s) of the movie
  Actors: string // Main actors, comma-separated
  Plot: string // Short plot summary
  Language: string // Spoken language(s)
  Country: string // Production country/countries
  Awards: string // Awards won or nominations
  Ratings: { Source: string; Value: string }[] // Array of ratings from various sources
  Metascore: string // Metacritic score
  imdbRating: string // IMDb user rating
  imdbVotes: string // Number of IMDb votes
  DVD: string // DVD release date
  BoxOffice: string // Box office earnings
  Production: string // Production company
  Website: string // Official website URL
  Response: string // API response status (e.g., "True" or "False")
}

export type MoviesResponse = {
  Search: Movie[]
  totalResults: string
  Response: string
}
