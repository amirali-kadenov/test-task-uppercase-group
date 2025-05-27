import type { ReactNode } from "react"
import { Spinner } from "@/shared/ui/spinner"
import { NOT_AVAILABLE } from "../../lib/constants"
import { useMovie } from "../../model/queries/use-movie"
import { MovieFavoriteButton } from "../movie-favorite-button"

type Props = {
  movieId: string
}

export const MovieCardHoverContent = ({ movieId }: Props) => {
  const query = useMovie(movieId)

  if (query.isLoading) {
    return (
      <Container>
        <Spinner className="text-white" />
      </Container>
    )
  }

  if (query.error || !query.data) {
    return null
  }

  return (
    <Container>
      <div className="line-clamp-[9] text-white">{query.data.Plot}</div>

      {query.data.imdbRating !== NOT_AVAILABLE && (
        <p className="font-bold mt-3 text-white">{query.data.imdbRating}/10</p>
      )}

      <MovieFavoriteButton
        className="absolute bottom-4 left-1/2 -translate-x-1/2"
        movieId={query.data.imdbID}
      />
    </Container>
  )
}

type ContainerProps = { children: ReactNode }
const Container = ({ children }: ContainerProps) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex-col bg-purple-800/70 p-4 flex justify-center items-center">
      {children}
    </div>
  )
}
