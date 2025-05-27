import { dehydrate, HydrationBoundary } from "@tanstack/react-query"
import { moviesQueries, TOP_20_MOVIES } from "@/entities/movies"
import { createQueryClient } from "@/shared/lib/create-query-client"
import { MovieDetailsView } from "./ui/movie-details"
export { generateMetadata } from "./model/metadata"

type Props = {
  params: Promise<{ id: string }>
}

export const revalidate = 3600 // 1 hour
export const dynamicParams = true // isr
export const generateStaticParams = () => {
  return TOP_20_MOVIES.map((movie) => ({
    id: movie,
  }))
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
