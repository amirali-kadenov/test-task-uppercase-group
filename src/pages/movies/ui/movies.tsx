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
    return <MoviesLoading className="mt-10" />
  }

  if (error) {
    return <MoviesError />
  }

  if (isEmpty(data)) {
    return <MoviesEmpty />
  }

  const search = s ? decodeURIComponent(s) : null

  return (
    <section className="mt-10 mb-6">
      {search && (
        <MoviesSearchResults
          search={search}
          totalResults={data?.pages[0]?.totalResults}
          className="mb-6"
        />
      )}

      <InfiniteScroll
        dataLength={data?.pages.length ?? 0}
        next={fetchNextPage}
        hasMore={hasNextPage}
        loader={<MoviesSkeleton />}
        className={MOVIES_GRID}
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
