import type { InfiniteData } from "@tanstack/react-query"
import type { MoviesResponse } from "@/entities/movies/model/api/types"

export const isEmpty = (
  movies: InfiniteData<MoviesResponse | null, unknown> | undefined,
) => {
  const totalMovies = movies?.pages.reduce(
    (acc, page) => acc + (page?.Search?.length || 0),
    0,
  )

  return totalMovies === 0
}
