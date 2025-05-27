import { api } from "./api"
import { getByIdMovieParams, getBySearchMovieParams } from "./params"
import type {
  GetByIdParamsRequired,
  GetBySearchParamsRequired,
  MovieDetails,
  MoviesResponse,
} from "./types"
import { TOP_20_MOVIES_IDS } from "../constants"

export const moviesApi = {
  async getTopMovies(): Promise<MoviesResponse> {
    const movies = await Promise.all(
      TOP_20_MOVIES_IDS.map((i) => moviesApi.getById({ i })),
    )

    return {
      Search: movies.filter((item) => item !== null),
      totalResults: String(movies.length),
      Response: "True",
    }
  },
  getBySearch(params: GetBySearchParamsRequired) {
    return api.get<MoviesResponse>("/", {
      params: getBySearchMovieParams(params),
    })
  },
  getById(params: GetByIdParamsRequired) {
    return api.get<MovieDetails>("/", {
      params: getByIdMovieParams(params),
    })
  },
}
