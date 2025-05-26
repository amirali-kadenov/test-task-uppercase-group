"use client"

import { MOVIES_GRID, useMoviesStore } from "@/entities/movies"
import { cn } from "@/shared/lib/utils/cn"
import { FavoriteCard } from "./ui/favorite-card"

export const FavoritesPage = () => {
  const favorites = useMoviesStore((state) => state.favorites)

  return (
    <section className="mt-10">
      <h1 className="text-2xl font-bold">Favorites</h1>

      <div className={cn(MOVIES_GRID, "mt-6")}>
        {favorites.map((movieId) => (
          <FavoriteCard key={movieId} movieId={movieId} />
        ))}
      </div>
    </section>
  )
}
