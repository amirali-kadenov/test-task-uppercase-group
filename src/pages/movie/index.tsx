import { dehydrate, HydrationBoundary } from "@tanstack/react-query"

import { notFound } from "next/navigation"
import { getMovieParams, MOVIES_QUERY_KEY, moviesApi } from "@/entities/movies"
import { createQueryClient } from "@/shared/lib/create-query-client"
import { MovieDetailsView } from "./ui/movie-details"

type Props = {
  params: Promise<{ id: string }>
}

export const MoviePage = async ({ params }: Props) => {
  const { id } = await params
  const movie = await moviesApi.getById(getMovieParams(id))

  if (!movie) {
    return notFound()
  }

  const queryClient = createQueryClient()
  await queryClient.setQueryData([MOVIES_QUERY_KEY, id], movie)

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <MovieDetailsView movie={movie} />
    </HydrationBoundary>
  )
}

export { generateMetadata } from "./model/metadata"
