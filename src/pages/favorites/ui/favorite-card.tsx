import { useQuery } from "@tanstack/react-query"

import {
  MovieCard,
  MovieCardSkeleton,
  MOVIES_QUERY_KEY,
  getMovieById,
} from "@/entities/movies"

type Props = {
  movieId: string
}

export const FavoriteCard = ({ movieId }: Props) => {
  const query = useQuery({
    queryKey: [MOVIES_QUERY_KEY, movieId],
    queryFn: () => getMovieById(movieId),
  })

  if (query.isLoading) {
    return <MovieCardSkeleton />
  }

  if (query.error || !query.data) {
    return null
  }

  return <MovieCard movie={query.data} />
}
