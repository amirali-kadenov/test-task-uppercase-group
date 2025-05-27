import { MovieCard, MovieCardSkeleton, useMovieQuery } from "@/entities/movies"

type Props = {
  movieId: string
}

export const FavoriteCard = ({ movieId }: Props) => {
  const query = useMovieQuery(movieId)

  if (query.isLoading) {
    return <MovieCardSkeleton />
  }

  if (query.error || !query.data) {
    return null
  }

  return <MovieCard movie={query.data} />
}
