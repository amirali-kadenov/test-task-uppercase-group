import { api } from "./api"
import {
  getByIdMovieParams,
  getBySearchMovieParams,
  getByTitleMovieParams,
} from "./params"
import type {
  GetByIdParamsRequired,
  GetBySearchParamsRequired,
  GetByTitleParamsRequired,
  MovieDetails,
  MoviesResponse,
} from "./types"
import { TOP_20_MOVIES } from "../constants"

export const moviesApi = {
  async getTopMovies(): Promise<MoviesResponse> {
    const movies = await Promise.all(
      TOP_20_MOVIES.map((t) => moviesApi.getByTitle({ t })),
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
  getByTitle(params: GetByTitleParamsRequired) {
    return api.get<MovieDetails>("/", {
      params: getByTitleMovieParams(params),
    })
  },
}
