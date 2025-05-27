import { queryOptions } from "@tanstack/react-query"
import { getMovieById } from "./actions"
import type { MoviesNullableParams } from "./infinite-movies"
import { getInfiniteMoviesQueryOptions } from "./infinite-movies"
import type { GetByIdParamsRequired } from "../api/types"

const NAMESPACE = "movies"

export const moviesQueries = {
  movie: (params: GetByIdParamsRequired) => {
    return queryOptions({
      queryKey: [NAMESPACE, params],
      queryFn: () => getMovieById(params),
    })
  },

  infiniteMovies: (params: MoviesNullableParams) => {
    return getInfiniteMoviesQueryOptions(NAMESPACE, params)
  },
}
