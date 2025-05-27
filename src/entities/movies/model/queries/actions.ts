"use server"

import { moviesApi } from "../api"
import type {
  GetByIdParamsRequired,
  GetBySearchParamsRequired,
} from "../api/types"

export const getMoviesBySearch = async (params: GetBySearchParamsRequired) => {
  return moviesApi.getBySearch(params)
}

export const getMovieById = async (params: GetByIdParamsRequired) => {
  return moviesApi.getById(params)
}

export const getTopMovies = async () => {
  return moviesApi.getTopMovies()
}
