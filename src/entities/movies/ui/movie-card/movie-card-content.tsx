import { cn } from "@/shared/lib/utils/cn"
import { CardContent } from "@/shared/ui/card"
import type { Movie } from "../../model/types"
import { MovieImage } from "../movie-image"

type Props = {
  movie: Movie
  className?: string
}

export const MovieCardContent = ({ movie, className }: Props) => {
  return (
    <div className={cn("flex flex-col justify-between h-full pb-4", className)}>
      <div className="relative aspect-[2/3] bg-muted">
        <MovieImage width={200} height={300} movie={movie} />
      </div>
      <CardContent className="mt-2 grow flex flex-col justify-between">
        <h3 className="font-semibold text-lg leading-tight line-clamp-2">
          {movie.Title}
        </h3>

        <div className="space-y-2 text-muted-foreground text-sm mt-2 pt-2 border-t border-muted">
          <p>year: {movie.Year}</p>
          <p>type: {movie.Type}</p>
          <p>id: {movie.imdbID}</p>
        </div>
      </CardContent>
    </div>
  )
}
