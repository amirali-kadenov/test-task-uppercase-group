import { useQuery } from "@tanstack/react-query"
import { moviesQueries } from "../queries"

export const useMovie = (movieId: string) => {
  return useQuery(moviesQueries.movie({ i: movieId }))
}
