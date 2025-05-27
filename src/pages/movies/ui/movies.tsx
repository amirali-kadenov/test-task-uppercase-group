"use client"

import { useInfiniteQuery } from "@tanstack/react-query"
import { useSearchParams } from "next/navigation"
import InfiniteScroll from "react-infinite-scroll-component"
import {
  MovieCard,
  getMoviesBySearch,
  MOVIES_QUERY_KEY,
  MOVIES_MAX_PAGE,
  getMoviesParams,
  MOVIES_GRID,
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

  const search = searchParams?.get(MOVIES_PARAM_NAMES.SEARCH)
  const page = searchParams?.get(MOVIES_PARAM_NAMES.PAGE)
  const params = getMoviesParams({ s: search, page })

  const { data, fetchNextPage, hasNextPage, error, isLoading } =
    useInfiniteQuery({
      queryKey: [MOVIES_QUERY_KEY, params],
      initialPageParam: params.page,
      maxPages: MOVIES_MAX_PAGE,
      queryFn: ({ pageParam }) =>
        getMoviesBySearch({ ...params, page: pageParam }),
      getNextPageParam: (lastPage, _, pageParam) => {
        if (!lastPage?.Search?.length) return
        return pageParam + 1
      },
    })

  if (isLoading) {
    return <MoviesLoading />
  }

  if (error) {
    return <MoviesError />
  }

  if (isEmpty(data)) {
    return <MoviesEmpty />
  }

  const decodedSearch = search ? decodeURIComponent(search) : null

  return (
    <section className="mt-10">
      {decodedSearch && (
        <MoviesSearchResults
          search={decodedSearch}
          totalResults={data?.pages[0]?.totalResults}
        />
      )}

      <InfiniteScroll
        dataLength={data?.pages.length ?? 0}
        next={fetchNextPage}
        hasMore={hasNextPage}
        loader={<MoviesSkeleton />}
        className={cn(MOVIES_GRID, "mb-6")}
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
