import { Api } from "@/shared/api"

import type {
  GetByIdParams,
  GetBySearchParams,
  MovieDetails,
  MoviesResponse,
} from "./types"

const api = new Api(process.env.OMDB_API_URL)

api.addRequestInterceptor((config) => {
  config.params.apikey = process.env.OMDB_API_KEY
  return config
})

export const moviesApi = {
  getBySearch: (params: GetBySearchParams) => {
    return api.get<MoviesResponse>("/", {
      params,
    })
  },
  getById: (params: GetByIdParams) => {
    return api.get<MovieDetails>("/", {
      params,
    })
  },
}
