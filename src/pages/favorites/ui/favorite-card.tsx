import { MovieCard, MovieCardSkeleton, useMovie } from "@/entities/movies"

type Props = {
  movieId: string
}

export const FavoriteCard = ({ movieId }: Props) => {
  const query = useMovie(movieId)

  if (query.isLoading) {
    return <MovieCardSkeleton />
  }

  if (query.error || !query.data) {
    return null
  }

  return <MovieCard movie={query.data} />
}
