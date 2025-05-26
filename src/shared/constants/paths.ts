export const PATHS = {
  ROOT: "/",
  FAVORITES: "/favorites",
  MOVIE: {
    get: (id: string) => `/movie/${id}`,
  },
}
