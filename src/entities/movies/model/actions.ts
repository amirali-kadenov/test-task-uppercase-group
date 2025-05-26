"use server"

import { moviesApi } from "./api"
import type { GetBySearchParams } from "./types"
import { getMovieParams } from "../lib/get-movie-params"
import { getMoviesParams } from "../lib/get-movies-params"

export const getMoviesBySearch = async (searchParams?: GetBySearchParams) => {
  const params = getMoviesParams(searchParams)

  return moviesApi.getBySearch(params)
}

export const getMovieById = async (id: string) => {
  return moviesApi.getById(getMovieParams(id))
}
