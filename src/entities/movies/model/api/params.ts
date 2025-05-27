import type {
  GetByIdParams,
  GetByIdParamsRequired,
  GetBySearchParams,
  GetBySearchParamsRequired,
} from "./types"

export const getBySearchMovieParams = (
  params: GetBySearchParamsRequired,
): GetBySearchParams => {
  return {
    s: decodeURIComponent(params.s),
    page: params.page,
    plot: "short",
    r: "json",
  }
}

export const getByIdMovieParams = ({
  i,
}: GetByIdParamsRequired): GetByIdParams => {
  return {
    i,
    plot: "full",
    r: "json",
  }
}
