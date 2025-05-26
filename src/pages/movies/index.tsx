import { dehydrate, HydrationBoundary } from "@tanstack/react-query"
import { MOVIES_QUERY_KEY, moviesApi } from "@/entities/movies"
import { getMoviesParams } from "@/entities/movies/lib/get-movies-params"
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
  const initialParams = await searchParams
  const params = getMoviesParams(initialParams)
  const queryClient = createQueryClient()

  await queryClient.prefetchInfiniteQuery({
    queryKey: [MOVIES_QUERY_KEY, params],
    queryFn: () => moviesApi.getBySearch(params),
    initialPageParam: params.page,
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Movies />
    </HydrationBoundary>
  )
}
