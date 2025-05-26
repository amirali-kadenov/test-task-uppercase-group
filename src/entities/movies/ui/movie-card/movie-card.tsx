"use client"

import Link from "next/link"
import { useCallback, useState } from "react"
import { PATHS } from "@/shared/constants/paths"
import { cn } from "@/shared/lib/utils/cn"
import { Card } from "@/shared/ui/card"
import { MovieCardContent } from "./movie-card-content"
import { MovieCardHoverContent } from "./movie-card-hover-content"
import { type Movie } from "../../model/types"

type MovieCardProps = {
  movie: Movie
}

export const MovieCard = ({ movie }: MovieCardProps) => {
  const [isHovered, setIsHovered] = useState(false)

  const onMouseEnter = useCallback(() => setIsHovered(true), [])
  const onMouseLeave = useCallback(() => setIsHovered(false), [])

  return (
    <Card
      className="relative hover:shadow-lg transition-shadow overflow-hidden duration-300"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Link href={PATHS.MOVIE.get(movie.imdbID)}>
        <MovieCardContent
          className={cn(isHovered && "blur transition-all duration-200")}
          movie={movie}
        />

        {isHovered && <MovieCardHoverContent movieId={movie.imdbID} />}
      </Link>
    </Card>
  )
}
