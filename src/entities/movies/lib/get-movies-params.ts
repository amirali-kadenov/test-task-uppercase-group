import { DEFAULT_PAGE, DEFAULT_SEARCH } from "./constants"
import type { GetBySearchParams } from "../model/types"

type Params = {
  s?: string | null
  page?: string | number | null
}

export const getMoviesParams = (params?: Params): GetBySearchParams => {
  return {
    s: params?.s ?? DEFAULT_SEARCH,
    page: Number(params?.page) || DEFAULT_PAGE,
    plot: "short",
    r: "json",
  }
}
