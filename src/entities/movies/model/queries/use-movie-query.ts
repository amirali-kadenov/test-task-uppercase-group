import { useQuery } from "@tanstack/react-query"
import { MOVIES_QUERY_KEY } from "../../lib/constants"
import { getMovieById } from "../actions"

export const useMovieQuery = (movieId: string) => {
  return useQuery({
    queryKey: [MOVIES_QUERY_KEY, movieId],
    queryFn: () => getMovieById(movieId),
  })
}
