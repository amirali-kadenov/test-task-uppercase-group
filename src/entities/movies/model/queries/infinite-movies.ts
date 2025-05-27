import { infiniteQueryOptions } from "@tanstack/react-query"
import type { Nullable } from "@/shared/types/utilities"
import { getMoviesBySearch, getTopMovies } from "./actions"
import type { GetBySearchParamsRequired } from "../api/types"
import { MOVIES_MAX_PAGE } from "../constants"

export type MoviesNullableParams = Nullable<Partial<GetBySearchParamsRequired>>

export const hasSearch = (
  params: MoviesNullableParams,
): params is GetBySearchParamsRequired => {
  return Boolean(params?.s)
}

export const getInfiniteMoviesQueryOptions = (
  namespace: string,
  params: MoviesNullableParams,
) => {
  return infiniteQueryOptions({
    queryKey: [namespace, params],

    queryFn: () => {
      if (hasSearch(params)) {
        return getMoviesBySearch(params)
      }

      return getTopMovies()
    },

    getNextPageParam: (lastPage, _, pageParam) => {
      if (!hasSearch(params)) return

      if (!lastPage?.Search?.length) return

      return pageParam + 1
    },

    initialPageParam: params?.page ? Number(params.page) : 1,

    maxPages: MOVIES_MAX_PAGE,
  })
}
