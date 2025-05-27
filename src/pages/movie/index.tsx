import { dehydrate, HydrationBoundary } from "@tanstack/react-query"
import { moviesQueries, TOP_20_MOVIES_IDS } from "@/entities/movies"
import { createQueryClient } from "@/shared/lib/create-query-client"
import { MovieDetailsView } from "./ui/movie-details"

type Props = {
  params: Promise<{ id: string }>
}

export const generateStaticParams = () => {
  return TOP_20_MOVIES_IDS.map((id) => ({ id }))
}

export const MoviePage = async ({ params }: Props) => {
  const { id } = await params

  const queryClient = createQueryClient()
  await queryClient.prefetchQuery(moviesQueries.movie({ i: id }))

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <MovieDetailsView movieId={id} />
    </HydrationBoundary>
  )
}
