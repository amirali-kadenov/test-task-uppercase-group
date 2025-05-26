import { MOVIES_GRID } from "@/entities/movies/lib/constants"
import { MoviesSkeleton } from "./movies-skeleton"

export const MoviesLoading = () => {
  return (
    <div className={MOVIES_GRID}>
      <MoviesSkeleton />
    </div>
  )
}
