import type { InfiniteData } from "@tanstack/react-query"
import type { MoviesResponse } from "@/entities/movies/model/types"

export const isEmpty = (
  movies: InfiniteData<MoviesResponse | null, unknown> | undefined,
) => {
  return !movies?.pages.reduce(
    (acc, page) => acc + (page?.Search?.length || 0),
    0,
  )
}
