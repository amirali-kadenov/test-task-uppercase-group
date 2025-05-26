import { createPersistentStore } from "@/shared/lib/create-persistent-store"

type State = {
  favorites: string[]
  addFavorite: (id: string) => void
  removeFavorite: (id: string) => void
}

export const useMoviesStore = createPersistentStore<State>("movies", (set) => ({
  favorites: [],
  addFavorite: (id) =>
    set((state) => {
      if (!state.favorites.includes(id)) {
        state.favorites.push(id)
      }
    }),
  removeFavorite: (id: string) =>
    set((state) => {
      state.favorites = state.favorites.filter((item) => item !== id)
    }),
}))
