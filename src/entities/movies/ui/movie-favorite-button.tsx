"use client"

import { Heart } from "lucide-react"
import type { MouseEvent } from "react"
import { useMoviesStore } from "@/entities/movies"
import { cn } from "@/shared/lib/utils/cn"
import { Button } from "@/shared/ui/button"

type Props = {
  movieId: string
  className?: string
}

export const MovieFavoriteButton = ({ movieId, className }: Props) => {
  const { addFavorite, removeFavorite, favorites } = useMoviesStore()

  const isFavorite = favorites.includes(movieId)

  const toggleFavorite = (e: MouseEvent) => {
    e.preventDefault()

    if (isFavorite) {
      removeFavorite(movieId)
    } else {
      addFavorite(movieId)
    }
  }

  return (
    <Button variant="outline" onClick={toggleFavorite} className={className}>
      <Heart className={cn(isFavorite && "fill-red-500 text-red-500")} />
      {isFavorite ? "Remove from favorites" : "Add to favorites"}
    </Button>
  )
}
