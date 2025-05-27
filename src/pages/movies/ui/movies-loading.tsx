import { MOVIES_GRID } from "@/entities/movies/lib/constants"
import { cn } from "@/shared/lib/utils/cn"
import { MoviesSkeleton } from "./movies-skeleton"

type Props = {
  className?: string
}

export const MoviesLoading = ({ className }: Props) => {
  return (
    <div className={cn(MOVIES_GRID, className)}>
      <MoviesSkeleton />
    </div>
  )
}
