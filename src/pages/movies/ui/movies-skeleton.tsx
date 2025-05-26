import { MOVIES_PER_PAGE, MovieCardSkeleton } from "@/entities/movies"

type Props = {
  itemsCount?: number
}

export const MoviesSkeleton = ({ itemsCount = MOVIES_PER_PAGE }: Props) => {
  return Array.from({ length: itemsCount }, (_, i) => (
    <MovieCardSkeleton key={i} />
  ))
}
