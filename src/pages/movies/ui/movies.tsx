"use client"

import { useInfiniteQuery } from "@tanstack/react-query"
import { useSearchParams } from "next/navigation"
import InfiniteScroll from "react-infinite-scroll-component"
import {
  MovieCard,
  MOVIES_GRID,
  MOVIES_PARAM_NAMES,
  moviesQueries,
} from "@/entities/movies"
import { cn } from "@/shared/lib/utils/cn"
import { MoviesEmpty } from "./movies-empty"
import { MoviesError } from "./movies-error"
import { MoviesLoading } from "./movies-loading"
import { MoviesSearchResults } from "./movies-search-results"
import { MoviesSkeleton } from "./movies-skeleton"
import { isEmpty } from "../lib"

export const Movies = () => {
  const searchParams = useSearchParams()

  const s = searchParams?.get(MOVIES_PARAM_NAMES.SEARCH)
  const page = searchParams?.get(MOVIES_PARAM_NAMES.PAGE)

  const { data, fetchNextPage, hasNextPage, error, isLoading } =
    useInfiniteQuery(moviesQueries.infiniteMovies({ s, page }))

  if (isLoading) {
    return <MoviesLoading className="mt-14" />
  }

  if (error) {
    return <MoviesError />
  }

  if (isEmpty(data)) {
    return <MoviesEmpty />
  }

  const search = s ? decodeURIComponent(s) : null

  return (
    <section className="mt-10">
      {search && (
        <MoviesSearchResults
          search={search}
          totalResults={data?.pages[0]?.totalResults}
        />
      )}

      <InfiniteScroll
        dataLength={data?.pages.length ?? 0}
        next={fetchNextPage}
        hasMore={hasNextPage}
        loader={<MoviesSkeleton />}
        className={cn(MOVIES_GRID, "my-6")}
      >
        {data?.pages.map((page) =>
          page?.Search?.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          )),
        )}
      </InfiniteScroll>
    </section>
  )
}
