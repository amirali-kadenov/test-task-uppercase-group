import { dehydrate, HydrationBoundary } from "@tanstack/react-query"
import { moviesQueries } from "@/entities/movies"
import { createQueryClient } from "@/shared/lib/create-query-client"
import { Movies } from "./ui/movies"

type SearchParams = Promise<{
  s?: string
  page?: string
}>

type Props = {
  searchParams: SearchParams
}

export const MoviesPage = async ({ searchParams }: Props) => {
  const params = await searchParams

  const queryClient = createQueryClient()
  await queryClient.prefetchInfiniteQuery(moviesQueries.infiniteMovies(params))

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Movies />
    </HydrationBoundary>
  )
}
